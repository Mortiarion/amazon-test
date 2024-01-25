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
