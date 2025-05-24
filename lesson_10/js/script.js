const menuIcons = document.getElementById("menu-icons");
const menuBurgerBtn = document.getElementById("menu-burger");
const menuXmarkBtn = document.getElementById("menu-xmark");
const menuNav = document.getElementById("menu-nav-list");
const heroInfo = document.getElementById("hero-info");

menu.addEventListener('click', ()=> {
    menuBurgerBtn.classList.toggle("hide");
    menuXmarkBtn.classList.toggle("hide");
    menuNav.classList.toggle("mobile-menu_closed");
    heroInfo.classList.toggle("hero-info_hide");
})