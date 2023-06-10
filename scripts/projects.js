window.onload = function () {
    const menu_button = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    menu_button.addEventListener('click', function() {
        menu_button.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}

var request = new XMLHttpRequest();

request.open('GET', ' https://api.github.com/users/davenfroberg/repos', true);

request.onload = function() {
    var datas = JSON.parse(this.response);
    var descriptions = datas.map((data) => data.description);
    descriptions.forEach(function(description) {
        var ul = document.getElementById("projectList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(description));
        li.classList.add('project');
        ul.appendChild(li);
    });
}

request.send();