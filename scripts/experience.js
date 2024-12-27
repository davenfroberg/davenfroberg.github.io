window.onload = function () {
    const menu_button = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    menu_button.addEventListener('click', function() {
        menu_button.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}

function toggleSkills(nth) {
    const quote = document.getElementsByClassName('quote').item(nth);
    const skillsContent = document.getElementsByClassName('skillsContent').item(nth);
    const clickMe = quote.querySelector('.clickMe');
    clickMe.classList.add('hidden');
    quote.classList.toggle('hidden');
    skillsContent.classList.toggle('hidden');
  }
  