var username = 'davenfroberg';

window.onload = function () {
    const menu_button = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    menu_button.addEventListener('click', function() {
        menu_button.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}

var reposRequest = new XMLHttpRequest();

reposRequest.open('GET', `https://api.github.com/users/${username}/repos`, true);

reposRequest.onload = function() {
    var datas = JSON.parse(this.response);

    datas.forEach(function(data) {

        //skips profile readme repository
        if (data.name == username)
            return;

        description = data.description;
        var ul = document.getElementById("projectList");
        var li = document.createElement("li");
        var div = document.createElement("div");
        li.appendChild(div);
        div.appendChild(document.createTextNode(description));
        div.classList.add('project');
        div.setAttribute('id', data.name)
        ul.appendChild(li);

        var full_name = data.full_name;
        var branch = data.default_branch;
        if (data.language != null) {
            var language = document.createElement('div');
            language.appendChild(document.createTextNode(data.language));
            li.appendChild(language);
            language.classList.add('language');
        }
        

        var readMeRequest = new XMLHttpRequest();
        readMeRequest.open('GET', `https://raw.githubusercontent.com/${full_name}/${branch}/README.md`, true);

        readMeRequest.onload = function() {
            var readme = this.response;
            
            var readmeDiv = document.createElement("div");
            readmeDiv.classList.add('readme')
            readmeDiv.appendChild(document.createTextNode(readme));
            li.appendChild(readmeDiv);
            console.log(readme);
        }
        readMeRequest.send();
    });
}

reposRequest.send();

