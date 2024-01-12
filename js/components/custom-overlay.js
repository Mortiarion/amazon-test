import { handleClickOverlay } from "./custom-autocomplite-searchfield.js";

const overlay = document.querySelector(".overlay");

const showOverlay = () => {
    overlay.classList.add("overlay-active");
};

const hideOverlay = () => {
    overlay.classList.remove("overlay-active");
};

overlay.addEventListener("click", handleClickOverlay);

export { showOverlay, hideOverlay, overlay };
