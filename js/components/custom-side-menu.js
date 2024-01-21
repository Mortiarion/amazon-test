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

        if (sideMenuAmazonAppStore) {
            sideMenuAmazonAppStore.classList.remove("side-menu-other-active");
        }

        if (sideMenuElectronic) {
            sideMenuElectronic.classList.remove("side-menu-other-active");
        }

        if (sideMenuComputers) {
            sideMenuComputers.classList.remove("side-menu-other-active");
        }

        if (sideMenuSmartHome) {
            sideMenuSmartHome.classList.remove("side-menu-other-active");
        }

        if (sideMenuArtsCraft) {
            sideMenuArtsCraft.classList.remove("side-menu-other-active");
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
        sideMenuMain.classList.add("side-menu-main-hide");
    }
};

readersBooks.addEventListener("click", handleReadersBooksClick);

const amazonApps = document.getElementById("amazon-apps");
const sideMenuAmazonAppStore = document.querySelector(
    ".side-menu-amazon-appstore"
);

const openSideMenuAmazonAppStore = () => {
    sideMenuAmazonAppStore.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

amazonApps.addEventListener("click", openSideMenuAmazonAppStore);

const electronic = document.getElementById("electronic");
const sideMenuElectronic = document.querySelector(".side-menu-electronic");

const openSideMenuElectronic = () => {
    sideMenuElectronic.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

electronic.addEventListener("click", openSideMenuElectronic);

const computers = document.getElementById("computers");
const sideMenuComputers = document.querySelector(".side-menu-computers");

const openSideMenuComputers = () => {
    sideMenuComputers.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

computers.addEventListener("click", openSideMenuComputers);

const smartHome = document.getElementById("smart-home");
const sideMenuSmartHome = document.querySelector(".side-menu-smart-home");

const openSideMenuSmartHome = () => {
    sideMenuSmartHome.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

smartHome.addEventListener("click", openSideMenuSmartHome);

const artsCrafts = document.getElementById("arts-crafts");
const sideMenuArtsCraft = document.querySelector(".side-menu-arts-crafts");

const openSideMenuArtsCraft = () => {
    sideMenuArtsCraft.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

artsCrafts.addEventListener("click", openSideMenuArtsCraft);

const shopDepartmentAllList = document.getElementById(
    "shop-department-all-list"
);
const sideMenuAllList = document.querySelector(".side-menu-list-all");

const openShopDepartmentAllList = () => {
    sideMenuAllList.classList.toggle("side-menu-list-all-active");
    shopDepartmentAllList.classList.toggle("open-all-list-active");

    const isOpen = shopDepartmentAllList.classList.contains(
        "open-all-list-active"
    );
    shopDepartmentAllList.textContent = isOpen ? "See Less" : "See All";
    sideMenuAllList.style.height = isOpen
        ? sideMenuAllList.scrollHeight + "px"
        : "0";
};

shopDepartmentAllList.addEventListener("click", openShopDepartmentAllList);

const automotive = document.getElementById("automotive");
