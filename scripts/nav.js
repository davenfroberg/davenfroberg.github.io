document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            const isActive = menuButton.classList.toggle('is-active');
            nav.classList.toggle('is-active');
            
            menuButton.setAttribute('aria-expanded', isActive);
        });
        
        menuButton.setAttribute('aria-label', 'Toggle navigation menu');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-controls', 'navigation');
        
        if (nav.id === '') {
            nav.id = 'navigation';
        }
    }
});

