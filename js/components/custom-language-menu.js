import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

const languageMenu = document.querySelector(".languages-menu");
const languageDropdown = document.querySelector(".language-dropdown");

const openLanguageDropdown = () => {
    languageDropdown.classList.add("language-dropdown-active");
    languageMenu.classList.add("languages-menu-active");
};

const closeLanguageDropdown = () => {
    languageDropdown.classList.remove("language-dropdown-active");
    languageMenu.classList.remove("languages-menu-active");
};

const handleLanguageMenuClick = (event) => {
    const isLanguageMenu = event.target === languageMenu;
    if (isLanguageMenu) {
        if (!languageDropdown.classList.contains("language-dropdown-active")) {
            openLanguageDropdown();
            showOverlay();
        } else {
            closeLanguageDropdown();
            hideOverlay();
        }
    } else {
        closeLanguageDropdown();
        hideOverlay();
    }
};

languageMenu.addEventListener("click", handleLanguageMenuClick);
overlay.addEventListener("click", handleLanguageMenuClick);
