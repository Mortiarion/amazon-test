// console.log("Starting");
import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

const location = document.querySelector(".location");
const locationPopup = document.querySelector(".location-popup");

const openLocationPopup = () => {
    locationPopup.classList.add("location-popup-active");
};

const closeLocationPopup = () => {
    locationPopup.classList.remove("location-popup-active");
};

const handleClickLocationPopup = (event) => {
    // !locationPopup.classList.contains("location-popup-active")
    //     ? openLocationPopup()
    //     : closeLocationPopup();
    // !overlay.classList.contains("overlay-active")
    //     ? showOverlay()
    //     : hideOverlay();
    const isLocation = event.target === location;
    if (isLocation) {
        if (!locationPopup.classList.contains("location-popup-active")) {
            openLocationPopup();
            showOverlay();
        } else {
            closeLocationPopup();
            hideOverlay();
        }
    } else {
        closeLocationPopup();
        hideOverlay();
    }
};

location.addEventListener("click", handleClickLocationPopup);
overlay.addEventListener("click", handleClickLocationPopup);
