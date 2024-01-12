import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";
import { inputField } from "./custom-autocomplite-searchfield.js";

const containerOptions = document.querySelector(".container-options");
const selectedOption = document.querySelector(".selected");
let activeIndexSelect = -1;
const optionsTextArray = [
    "All Departments",
    "Automotive",
    "Arts Crafts",
    "Baby",
    "Beauty Personal Care",
    "Books",
    "Boys' Fashion",
    "Computers",
    "Deals",
    "Digital Music",
    "Electronics",
    "Girls' Fashion",
    "Health Household",
    "Home Kitchen",
    "Industrial Scientific",
    "Kindle Store",
    "Luggage",
    "Men's Fashion",
    "Movies TV",
    "Music, CDs Vinyl",
    "Pet Supplies",
    "Prime Video",
    "Software",
    "Sports Outdoors",
    "Tools Home Improvement",
    "Toys Games",
    "Video Games",
    "Women's Fashion",
];

const createdOptions = () => {
    optionsTextArray.forEach((text) => {
        const element = document.createElement("div");
        element.classList.add("option");
        element.textContent = text;

        containerOptions.appendChild(element);

        element.addEventListener("click", () => {
            const optionText = element.textContent;
            selectedOption.textContent = optionText;
            closeContainerOptions();
            hideOverlay();
            inputField.focus();
        });
    });
};

createdOptions();

const openContainerOptions = () => {
    selectedOption.classList.add("selected-active");
    containerOptions.classList.add("container-options-active");
    activeIndexSelect = 0;
    setActiveOption();
    containerOptions.focus();
};

const closeContainerOptions = () => {
    selectedOption.classList.remove("selected-active");
    containerOptions.classList.remove("container-options-active");
};

const handleOpenCloseCustomSelect = (event) => {
    const isSelectedOption = event.target === selectedOption;
    const isOverlay = event.target === overlay;

    if (isSelectedOption) {
        if (selectedOption.classList.contains("selected-active")) {
            closeContainerOptions();
            hideOverlay();
        } else {
            openContainerOptions();
            showOverlay();
        }
    }

    if (isOverlay) {
        if (
            selectedOption.classList.contains("selected-active") &&
            containerOptions.classList.contains("container-options-active")
        ) {
            closeContainerOptions();
            hideOverlay();
        }
    }
};

selectedOption.addEventListener("click", handleOpenCloseCustomSelect);
overlay.addEventListener("click", handleOpenCloseCustomSelect);

containerOptions.addEventListener("keydown", (event) => {
    const isArrowDown = event.key === "ArrowDown";
    const isArrowUp = event.key === "ArrowUp";
    const isEnter = event.key === "Enter";
    const lastIndex = optionsTextArray.length - 1;

    if (isArrowDown) {
        event.preventDefault();
        activeIndexSelect =
            activeIndexSelect < lastIndex ? activeIndexSelect + 1 : 0;
        setActiveOption();
    } else if (isArrowUp) {
        event.preventDefault();
        activeIndexSelect =
            activeIndexSelect > 0 ? activeIndexSelect - 1 : lastIndex;
        setActiveOption();
    }
    if (isEnter) {
        console.log("Enter");
        closeContainerOptions();
        hideOverlay();
        inputField.focus();
    }
});

const setActiveOption = () => {
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        if (index === activeIndexSelect) {
            option.classList.add("select-option-selected");
            option.setAttribute("tabindex", "0");
            option.focus();
            selectedOption.textContent = option.textContent;
        } else {
            option.classList.remove("select-option-selected");
            option.setAttribute("tabindex", "-1");
        }
    });

    // if (activeIndexSelect === -1 && options.length > 0) {
    //     options[0].classList.add("select-option-selected");
    //     options[0].setAttribute("tabindex", "0");
    //     options[0].focus();
    //     selectedOption.textContent = options[0].textContent;
    // }
};
