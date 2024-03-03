const languageName = document.querySelector(".languages-name");
const englishCheckbox = document.getElementById("englishCheckbox");
const ukraineCheckbox = document.getElementById("ukraineCheckbox");

const dataLang = document.querySelectorAll("[data-lang]");

document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage && (savedLanguage === "UA" || savedLanguage === "EN")) {
        languageName.textContent = savedLanguage;
        ukraineCheckbox.checked = savedLanguage === "UA";
        englishCheckbox.checked = savedLanguage === "EN";
        changeLanguage(savedLanguage.toLowerCase());
    }
});

ukraineCheckbox.addEventListener("change", async function () {
    if (this.checked) {
        languageName.textContent = "UA";
        englishCheckbox.checked = false;
        await changeLanguage("ua");
        localStorage.setItem("selectedLanguage", "UA");
    }
});

englishCheckbox.addEventListener("change", async function () {
    if (this.checked) {
        languageName.textContent = "EN";
        ukraineCheckbox.checked = false;
        await changeLanguage("en");
        localStorage.setItem("selectedLanguage", "EN");
    }
});

async function loadLanguageTexts(language) {
    const response = await fetch(`language-change-json/texts-${language}.json`);
    const data = await response.json();
    console.log(data);
    return data;
}
async function changeLanguage(language) {
    const languageTexts = await loadLanguageTexts(language);
    dataLang.forEach((element) => {
        const key = element.getAttribute("data-lang");
        element.textContent = languageTexts[key];
    });
}
