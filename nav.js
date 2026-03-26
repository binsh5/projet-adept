let menuOpen = false;
let sidebarOpen = false;
let lastScroll = 0;

// mobile
function toggleMenu() {
    menuOpen = !menuOpen;
    const menu = document.getElementById('menu');
    if (menuOpen) {
        menu.style.maxHeight = '500px';
        menu.classList.add('open');
    } else {
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

// scroll — mobile seulement
window.addEventListener('scroll', function () {
    if (window.innerWidth >= 768) return;
    const navbar = document.getElementById('navbar');
    const current = window.scrollY;
    if (current > lastScroll && current > 60) {
        navbar.style.transform = 'translateY(-100%)';
        if (menuOpen) toggleMenu();
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = current;
});

// active link selon la page courante
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-link-md, #menu li a');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});