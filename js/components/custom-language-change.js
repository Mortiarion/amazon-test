const ukrainianCheckbox = document.getElementById("ukrainianCheckbox");
const labelUkrainianCheckbox = document.querySelector(
    "label[for='ukrainianCheckbox']"
);

const englishCheckbox = document.getElementById("englishCheckbox");
const labelEnglishCheckbox = document.querySelector(
    "label[for='englishCheckbox']"
);

async function loadLanguageTexts(language) {
    const response = await fetch(`language-change-json/texts-${language}.json`);
    const data = await response.json();
    return data;
}

async function changeLanguage(language) {
    const languageTexts = await loadLanguageTexts(language);
    document.querySelector(".deliver").textContent = languageTexts.deliver;
    document.querySelector(".region").textContent = languageTexts.region;
    document.querySelector(".selected").textContent = languageTexts.selected;
    document.querySelector(".change-language").textContent =
        languageTexts.changeLanguage;
    document.querySelector(".learn-more").textContent = languageTexts.learnMore;
    document.querySelector(".change-currency").textContent =
        languageTexts.changeСurrency;
    document.querySelector(".learn-more-language").textContent =
        languageTexts.learnMore1;
    document.querySelector(".dollar").textContent = languageTexts.dollar;
    document.querySelector(".change-dollar").textContent =
        languageTexts.changeDollar;
    document.querySelector(".flag-shopping").textContent =
        languageTexts.flagShoppong;
    document.querySelector(".flag-amazon").textContent =
        languageTexts.flagAmazon;
    document.querySelector(".change-region-country").textContent =
        languageTexts.changeRegionCountry;
    document.querySelector(".sign-in-text-first").textContent =
        languageTexts.signInTextFirst;
    document.querySelector(".sign-in-text-second").textContent =
        languageTexts.signInTextSecond;
    document.querySelector(".sign-in-link-dropdown").textContent =
        languageTexts.signInLinkDropdown;
    document.querySelector(".new-customer").textContent =
        languageTexts.newCustomer;
    document.querySelector(".new-customer-start").textContent =
        languageTexts.newCustomerStart;
    document.querySelector(".sign-your-list-title").textContent =
        languageTexts.signYourListTitle;
    document.querySelector(".sign-your-list-lang1").textContent =
        languageTexts.signYourListLang1;
    document.querySelector(".sign-your-list-lang2").textContent =
        languageTexts.signYourListLang2;
}

englishCheckbox.addEventListener("change", async function () {
    if (this.checked) {
        saveSelectedLanguage("en");
        await changeLanguage("en");
        labelEnglishCheckbox.parentElement.classList.add("active-checkbox");
        labelUkrainianCheckbox.parentElement.classList.remove(
            "active-checkbox"
        );
        ukrainianCheckbox.checked = false; // Знімаємо вибір з іншого чекбоксу
    }
});

ukrainianCheckbox.addEventListener("change", async function () {
    if (this.checked) {
        saveSelectedLanguage("uk");
        await changeLanguage("uk");
        labelUkrainianCheckbox.parentElement.classList.add("active-checkbox");
        labelEnglishCheckbox.parentElement.classList.remove("active-checkbox");
        englishCheckbox.checked = false; // Знімаємо вибір з іншого чекбоксу
    }
});

document.addEventListener("DOMContentLoaded", async function () {
    const selectedLanguage = loadSelectedLanguage();

    if (selectedLanguage === "uk") {
        ukrainianCheckbox.checked = true;
        labelUkrainianCheckbox.parentElement.classList.add("active-checkbox");
        await changeLanguage("uk");
    } else {
        englishCheckbox.checked = true;
        labelEnglishCheckbox.parentElement.classList.add("active-checkbox");
        await changeLanguage("en");
    }
});

function saveSelectedLanguage(language) {
    localStorage.setItem("selectedLanguage", language);
}

function loadSelectedLanguage() {
    return localStorage.getItem("selectedLanguage") || "en";
}
