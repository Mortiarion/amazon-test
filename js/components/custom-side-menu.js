import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

console.log("Starting");
const sideMenuButtonOpen = document.querySelector(".side-menu-button");
const sideMenu = document.querySelector(".side-menu");
const sideMenuButtonClose = document.querySelector(".side-menu-close");
// console.log(sideMenu);

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