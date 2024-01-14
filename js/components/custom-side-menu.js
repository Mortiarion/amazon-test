import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

const sideMenuButtonOpen = document.querySelector(".side-menu-button");
const sideMenu = document.querySelector(".side-menu");
const sideMenuButtonClose = document.querySelector(".side-menu-close");

const openSideMenu = () => {
    sideMenu.classList.add("side-menu-active");
    showOverlay();
}

const closeSideMenu = () => {
    sideMenu.classList.remove("side-menu-active");
    hideOverlay();
}


overlay.addEventListener("click", closeSideMenu);
sideMenuButtonOpen.addEventListener("click", openSideMenu);
sideMenuButtonClose.addEventListener("click", closeSideMenu);