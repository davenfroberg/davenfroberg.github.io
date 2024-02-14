var username = 'davenfroberg';

window.onload = function () {
    const menu_button = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    menu_button.addEventListener('click', function() {
        menu_button.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}

fetch(`https://api.github.com/users/${username}/repos`).then((response) => response.json()).then(function(datas) {
    datas.forEach(function(data) {
        //skips profile readme repository
        if (data.name == username)
            return;

        description = data.description;
        var ul = document.getElementById("project-list");
        var li = document.createElement("li");
        var div = document.createElement("div");
        li.appendChild(div);
        div.appendChild(document.createTextNode(description));
        div.classList.add('project');
        div.setAttribute('id', data.name);
        
        ul.appendChild(li);
        
        if (data.language != null) {
            var language = document.createElement('div');
            language.appendChild(document.createTextNode(data.language));
            li.appendChild(language);
            language.classList.add('language');
        }

        document.getElementById(data.name).addEventListener('click', function() {
            window.open(data.html_url, '_blank');
        }, false);
    });
});

