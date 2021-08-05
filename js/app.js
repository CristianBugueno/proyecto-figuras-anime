//MENU RESPONSIVE
const btnMenuOpen = document.querySelector('#btnMenuOpen');
const btnMenuClose = document.querySelector('#btnMenuClose');
const menuResponsive = document.querySelector('#menuBar');
const enlaces = document.querySelector('#enlaces');

//CLICK ABRIR
btnMenuOpen.addEventListener('click', () => {
    menuResponsive.classList.add('active');
});

btnMenuClose.addEventListener('click', () => {
    menuResponsive.classList.remove('active');
});

//CERRAR MENÚ CON ELEMENTOS DE ENLACE
enlaces.addEventListener('click', () => {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove('active');
});