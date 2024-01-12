import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

const inputField = document.querySelector(".search-field");
const autocompleteContainer = document.querySelector(".autocomplete-container");
const centerSearchField = document.querySelector(".center-search-field");
let activeIndex = -1;

const productNamesArrayAutocomplete = [
    "Phone",
    "Laptop",
    "Book",
    "Shoes",
    "Headphones",
    "Watch",
    "Jacket",
    "Camera",
    "Desk",
    "Chair",
    "Sunglasses",
    "Backpack",
    "Perfume",
    "Gloves",
    "Hoodie",
    "Guitar",
    "Microphone",
    "Tablet",
    "Sneakers",
    "Necklace",
    "Earrings",
    "Ring",
    "Keyboard",
    "Monitor",
    "Printer",
    "Projector",
    "Drone",
    "Telescope",
    "Binoculars",
    "Skateboard",
    "Bicycle",
    "Fishing Rod",
    "Tent",
    "Sleeping Bag",
    "Hammock",
    "Garden Tools",
    "Toolbox",
    "Flashlight",
    "Screwdriver Set",
    "Paintbrushes",
    "Canvas",
    "Watercolor Paint Set",
    "Fitness Tracker",
    "Yoga Mat",
    "Dumbbells",
    "Resistance Bands",
    "Jump Rope",
    "Treadmill",
    "Ski Goggles",
    "Snowboard",
    "Helmet",
    "Camping Stove",
    "Portable Charger",
    "Bluetooth Speaker",
    "Coffee Maker",
    "Blender",
    "Juicer",
    "Toaster",
    "Microwave",
    "Kettle",
    "Vacuum Cleaner",
    "Iron",
    "Hair Dryer",
    "Curling Iron",
    "Straightener",
    "Electric Shaver",
    "Razor",
    "Dresser",
    "Nightstand",
    "Sofa",
    "Coffee Table",
    "Dining Table",
    "TV Stand",
    "Rug",
    "Curtains",
    "Throw Pillows",
    "Bed Sheets",
    "Blanket",
    "Towels",
    "Cookware Set",
    "Knife Set",
    "Cutting Board",
    "Mixing Bowls",
    "Bakeware Set",
    "Dinnerware Set",
    "Wine Glasses",
    "Cocktail Shaker",
    "Bar Tools",
    "Ice Bucket",
    "Picture Frame",
    "Vase",
    "Candle Holder",
    "Wall Clock",
    "Mirror",
];

const noSuggestionItem = document.createElement("div");
noSuggestionItem.classList.add("no-suggestion");
noSuggestionItem.textContent = "No suggestions found";

const displayNoSuggestions = () => {
    autocompleteContainer.innerHTML = "";
    autocompleteContainer.appendChild(noSuggestionItem);

    autocompleteContainer.classList.add("autocomplete-container-active");
    centerSearchField.classList.add("search-field-active");
    showOverlay();
};

const removeNoSuggestions = () => {
    autocompleteContainer.innerHTML = "";

    autocompleteContainer.classList.remove("autocomplete-container-active");
    centerSearchField.classList.remove("search-field-active");
    hideOverlay();

    activeIndex = -1;
};

inputField.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase().trim();
    const filteredSuggestions = productNamesArrayAutocomplete.filter((item) =>
        item.toLowerCase().startsWith(searchText)
    );

    if (searchText === "") {
        displayAutocompleteSuggestions([]);
        removeNoSuggestions();
        hideOverlay();
        autocompleteContainer.classList.remove("autocomplete-container-active");
        centerSearchField.classList.remove("search-field-active");
    } else {
        if (filteredSuggestions.length === 0) {
            displayNoSuggestions();
            showOverlay();
            autocompleteContainer.classList.add(
                "autocomplete-container-active"
            );
            centerSearchField.classList.add("search-field-active");
        } else {
            displayAutocompleteSuggestions(filteredSuggestions);
            showOverlay();
            autocompleteContainer.classList.add(
                "autocomplete-container-active"
            );
            centerSearchField.classList.add("search-field-active");
        }
    }
});

const displayAutocompleteSuggestions = (suggestions) => {
    autocompleteContainer.innerHTML = "";

    suggestions.forEach((item) => {
        const searchItem = document.createElement("div");
        searchItem.classList.add("search-item");
        searchItem.textContent = item;

        autocompleteContainer.appendChild(searchItem);
    });

    if (suggestions.length > 0) {
        autocompleteContainer.classList.add("autocomplete-container-active");
        centerSearchField.classList.add("search-field-active");
        showOverlay();
    } else {
        hideOverlay();
    }

    activeIndex = -1;
};

autocompleteContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("search-item")) {
        inputField.value = event.target.textContent;
        autocompleteContainer.classList.remove("autocomplete-container-active");
        centerSearchField.classList.remove("search-field-active");
        hideOverlay();
    }
});

inputField.addEventListener("keydown", (event) => {
    const items = autocompleteContainer.querySelectorAll(".search-item");
    const lastIndex = items.length - 1;
    if (event.key === " ") {
        autocompleteContainer.classList.add("autocomplete-container-active");
        centerSearchField.classList.add("search-field-active");
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
        setActiveItem();
    } else if (event.key === "ArrowUp") {
        event.preventDefault();
        activeIndex = activeIndex <= 0 ? lastIndex : activeIndex - 1;
        setActiveItem();
    } else if (event.key === "Enter") {
        centerSearchField.classList.remove("search-field-active");
        autocompleteContainer.classList.remove("autocomplete-container-active");
        hideOverlay();
    }
});

const setActiveItem = () => {
    const items = autocompleteContainer.querySelectorAll(".search-item");

    items.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add("selected-autocomplete-item");
            inputField.value = item.textContent;
        } else {
            item.classList.remove("selected-autocomplete-item");
        }
    });
};

const handleClickOverlay = (event) => {
    const isOverlay = event.target === overlay;
    if (isOverlay && overlay.classList.contains("overlay-active")) {
        hideOverlay();
        inputField.value = "";
        inputField.classList.remove("search-field-active");
        autocompleteContainer.classList.remove("autocomplete-container-active");
        removeNoSuggestions();
    }
};

export { autocompleteContainer, inputField, handleClickOverlay };
