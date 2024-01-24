const ukrainianCheckbox = document.getElementById("ukrainianCheckbox");
const labelUkrainianCheckbox = document.querySelector("label[for='ukrainianCheckbox']");

async function loadLanguageTexts(language) {
    const response = await fetch(`language-change-json/texts-${language}.json`);
    const data = await response.json();
    console.log(data);
    console.log(response);
    return data;
}

async function changeLanguage() {
    const selectedLanguage = ukrainianCheckbox.checked ? "uk" : "en";
    console.log(selectedLanguage);

    const languageTexts = await loadLanguageTexts(selectedLanguage);
    console.log(languageTexts);

    document.querySelector(".deliver").textContent = languageTexts.deliver;
    document.querySelector(".region").textContent = languageTexts.region;
}

ukrainianCheckbox.addEventListener("change", changeLanguage);

changeLanguage();