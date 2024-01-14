import { handleClickOverlay } from "./custom-autocomplite-searchfield.js";

const overlay = document.querySelector(".overlay");

const showOverlay = () => {
    overlay.classList.add("overlay-active");
    document.body.classList.add("no-scroll");
};

const hideOverlay = () => {
    overlay.classList.remove("overlay-active");
    document.body.classList.remove("no-scroll");
};

overlay.addEventListener("click", handleClickOverlay);

export { showOverlay, hideOverlay, overlay };
