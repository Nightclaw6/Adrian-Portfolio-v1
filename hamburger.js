const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuBtn.classList.add('hideBtn');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach( item => item.classList.add('show'))
        showMenu = true;
        navLinks.forEach( link => link.addEventListener('click', closeMenu));
    } else {
        menuBtn.classList.remove('close');
        menuBtn.classList.add('hideBtn');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach( item => item.classList.remove('show'));
        showMenu = false;
        navLinks.forEach( link => link.addEventListener('click', closeMenu));
    }
}

function closeMenu() {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach( item => item.classList.remove('show'));
    showMenu = false;
}



