import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

const sideMenuButtonOpen = document.querySelector(".side-menu-button");
const sideMenu = document.querySelector(".side-menu");
const sideMenuButtonClose = document.querySelector(".side-menu-close");

const openSideMenu = () => {
    sideMenu.classList.add("side-menu-active");
    showOverlay();
};

const closeSideMenu = () => {
    sideMenu.classList.remove("side-menu-active");
    hideOverlay();
};

overlay.addEventListener("click", closeSideMenu);
sideMenuButtonOpen.addEventListener("click", openSideMenu);
sideMenuButtonClose.addEventListener("click", closeSideMenu);

const amazonMusic = document.getElementById("amazon-music");
const sideMenuOther = document.querySelector(".side-menu-other");
const goBackMainMenu = document.querySelector(".go-back-main-menu");
const sideMenuMain = document.querySelector(".side-menu-main");
console.log(goBackMainMenu);

const openSideMenuOther = () => {
    sideMenuOther.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
};

const closeSideMenuOther = () => {
    sideMenuOther.classList.remove("side-menu-other-active");
    sideMenuMain.classList.remove("side-menu-main-hide");
};

const handleClickSideMenu = (event) => {
    const isAmazonMusic = event.target === amazonMusic;
    if (isAmazonMusic) {
        if (!amazonMusic.classList.contains("side-menu-other-active")) {
            openSideMenuOther();
        }
    }

    const isGoBackMainMenu = event.target === goBackMainMenu;
    console.log(isGoBackMainMenu);
    if (isGoBackMainMenu) {
        closeSideMenuOther();
    }
};

amazonMusic.addEventListener("click", handleClickSideMenu);
goBackMainMenu.addEventListener("click", handleClickSideMenu);
