let menuOpen: boolean = false;
let sidebarOpen: boolean = false;
let lastScroll: number = 0;

// mobile
function toggleMenu(): void {
    menuOpen = !menuOpen;
    const menu = document.getElementById('menu') as HTMLElement;
    if (menuOpen) {
        menu.style.maxHeight = '300px';
        menu.classList.add('open');
    } else {
        menu.style.maxHeight = '0';
        menu.classList.remove('open');
    }
}

// desktop
function toggleSidebar(): void {
    sidebarOpen = !sidebarOpen;
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    sidebar.classList.toggle('open', sidebarOpen);
}

// popup
function showPopup(type: 'android' | 'ios'): void {
    const title = document.getElementById('popup-title') as HTMLElement;
    const msg = document.getElementById('popup-msg') as HTMLElement;
    const overlay = document.getElementById('popup-overlay') as HTMLElement;

    if (type === 'android') {
        title.textContent = 'Application Android';
        msg.textContent = "L'application Android sera disponible prochainement. Revenez bientôt !";
    } else {
        title.textContent = 'Application iOS';
        msg.textContent = "L'application iOS sera disponible prochainement. Revenez bientôt !";
    }
    overlay.classList.add('active');
}

function closePopup(): void {
    const overlay = document.getElementById('popup-overlay') as HTMLElement;
    overlay.classList.remove('active');
}

// scroll — mobile seulement
window.addEventListener('scroll', (): void => {
    if (window.innerWidth >= 768) return;
    const navbar = document.getElementById('navbar') as HTMLElement;
    const current: number = window.scrollY;
    if (current > lastScroll && current > 60) {
        navbar.style.transform = 'translateY(-100%)';
        if (menuOpen) toggleMenu();
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = current;
});