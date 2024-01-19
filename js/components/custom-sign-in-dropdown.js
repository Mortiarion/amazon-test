import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

const signInLink = document.querySelector(".sign-in-link");
const signInDropDown = document.querySelector(".sign-in-dropdown");

const openSignInLinkDropdown = () => {
    signInLink.classList.add("sign-in-link-active");
    signInDropDown.classList.add("sign-in-dropdown-active");
};

const closeSignInLinkDropdown = () => {
    signInLink.classList.remove("sign-in-link-active");
    signInDropDown.classList.remove("sign-in-dropdown-active");
};

const handleClickSignInLinkDropdown = (event) => {
    const isSignInLink = event.target === signInLink;
    if (isSignInLink) {
        if (!signInLink.classList.contains("sign-in-link-active")) {
            openSignInLinkDropdown();
            showOverlay();
        } else {
            closeSignInLinkDropdown();
            hideOverlay();
        }
    } else {
        closeSignInLinkDropdown();
        hideOverlay();
    }
};

signInLink.addEventListener("click", handleClickSignInLinkDropdown);
overlay.addEventListener("click", handleClickSignInLinkDropdown);
