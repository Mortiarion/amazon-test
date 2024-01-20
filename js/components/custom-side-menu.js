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
const goBackMainMenu = document.querySelectorAll(".go-back-main-menu");
const sideMenuMain = document.querySelector(".side-menu-main");

const openSideMenuOther = () => {
    sideMenuOther.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
};

const closeSideMenuOther = () => {
    sideMenuOther.classList.remove("side-menu-other-active");
    sideMenuMain.classList.remove("side-menu-main-hide");
};

const handleAmazonMusicClick = () => {
    if (!amazonMusic.classList.contains("side-menu-other-active")) {
        openSideMenuOther();
        sideMenu.classList.add("amazon-music-hide");
    }
};

const handleGoBackMainMenuClick = () => {
    return () => {
        closeSideMenuOther();
        sideMenu.classList.remove("amazon-music-hide");

        if (sideMenuReadersBook) {
            sideMenuReadersBook.classList.remove("side-menu-other-active");
        }
    };
};

const handleClickSideMenu = (event) => {
    if (event.target === amazonMusic) {
        handleAmazonMusicClick();
    } else if (Array.from(goBackMainMenu).includes(event.target)) {
        const index = Array.from(goBackMainMenu).indexOf(event.target);
        handleGoBackMainMenuClick(index)();
    }
};

amazonMusic.addEventListener("click", handleClickSideMenu);
goBackMainMenu.forEach((item, index) => {
    item.addEventListener("click", handleGoBackMainMenuClick(index));
});

const readersBooks = document.getElementById("readers-books");
const sideMenuReadersBook = document.querySelector(".side-menu-readers-book");

const handleReadersBooksClick = () => {
    if (!sideMenuReadersBook.classList.contains("side-menu-other-active")) {
        sideMenuReadersBook.classList.add("side-menu-other-active");
        sideMenu.classList.add("amazon-music-hide");
    }
};

readersBooks.addEventListener("click", handleReadersBooksClick);
