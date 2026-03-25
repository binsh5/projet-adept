"use strict";
let menuOpen = false;
let sidebarOpen = false;
let lastScroll = 0;
// mobile
function toggleMenu() {
    menuOpen = !menuOpen;
    const menu = document.getElementById('menu');
    if (menuOpen) {
        menu.style.maxHeight = '300px';
        menu.classList.add('open');
    }
    else {
        menu.style.maxHeight = '0';
        menu.classList.remove('open');
    }
}
// desktop
function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open', sidebarOpen);
}
// popup
function showPopup(type) {
    const title = document.getElementById('popup-title');
    const msg = document.getElementById('popup-msg');
    const overlay = document.getElementById('popup-overlay');
    if (type === 'android') {
        title.textContent = 'Application Android';
        msg.textContent = "L'application Android sera disponible prochainement. Revenez bientôt !";
    }
    else {
        title.textContent = 'Application iOS';
        msg.textContent = "L'application iOS sera disponible prochainement. Revenez bientôt !";
    }
    overlay.classList.add('active');
}
function closePopup() {
    const overlay = document.getElementById('popup-overlay');
    overlay.classList.remove('active');
}
// scroll — mobile seulement
window.addEventListener('scroll', () => {
    if (window.innerWidth >= 768)
        return;
    const navbar = document.getElementById('navbar');
    const current = window.scrollY;
    if (current > lastScroll && current > 60) {
        navbar.style.transform = 'translateY(-100%)';
        if (menuOpen)
            toggleMenu();
    }
    else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = current;
});
