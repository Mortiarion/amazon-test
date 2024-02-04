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
    document.querySelector(".text-language3").textContent =
        languageTexts.textLanguage3;
    document.querySelector(".text-language4").textContent =
        languageTexts.textLanguage4;
    document.querySelector(".text-language5").textContent =
        languageTexts.textLanguage5;
    document.querySelector(".text-language6").textContent =
        languageTexts.textLanguage6;
    document.querySelector(".text-language7").textContent =
        languageTexts.textLanguage7;
    document.querySelector(".text-language8").textContent =
        languageTexts.textLanguage8;
    document.querySelector(".text-language9").textContent =
        languageTexts.textLanguage9;
    document.querySelector(".text-language10").textContent =
        languageTexts.textLanguage10;
    document.querySelector(".text-language11").textContent =
        languageTexts.textLanguage11;
    document.querySelector(".text-language12").textContent =
        languageTexts.textLanguage12;
    document.querySelector(".text-language13").textContent =
        languageTexts.textLanguage13;
    document.querySelector(".text-language14").textContent =
        languageTexts.textLanguage14;
    document.querySelector(".return").textContent = languageTexts.return;
    document.querySelector(".orders").textContent = languageTexts.orders;
    document.querySelector(".basket-text").textContent =
        languageTexts.basketText;
    document.querySelector(".deals").textContent = languageTexts.deals;
    document.querySelector(".registry").textContent = languageTexts.registry;
    document.querySelector(".service").textContent = languageTexts.service;
    document.querySelector(".gift").textContent = languageTexts.gift;
    document.querySelector(".sell").textContent = languageTexts.sell;
    document.querySelector(".text-language15").textContent =
        languageTexts.textLanguage15;
    document.querySelector(".amazon-music").textContent =
        languageTexts.amazonMusic;
    document.querySelector(".readers-books").textContent =
        languageTexts.readersBooks;
    document.querySelector(".amazon-apps").textContent =
        languageTexts.amazonApps;
    document.querySelector(".text-language16").textContent =
        languageTexts.textLanguage16;
    document.querySelector(".text-language17").textContent =
        languageTexts.textLanguage17;
    document.querySelector(".text-language18").textContent =
        languageTexts.textLanguage18;
    document.querySelector(".electronic").textContent =
        languageTexts.electronic;
    document.querySelector(".computers").textContent = languageTexts.computers;
    document.querySelector(".smart-home").textContent = languageTexts.smartHome;
    document.querySelector(".arts-crafts").textContent =
        languageTexts.artsCrafts;
    document.querySelector(".automotive").textContent =
        languageTexts.automotive;
    document.querySelector(".baby").textContent = languageTexts.baby;
    document.querySelector(".beauty-personal-care").textContent =
        languageTexts.beautyPersonalCare;
    document.querySelector(".womens-fashion").textContent =
        languageTexts.womensFashion;
    document.querySelector(".mens-fashion").textContent =
        languageTexts.mensFashion;
    document.querySelector(".girls-fashion").textContent =
        languageTexts.girlsFashion;
    document.querySelector(".boys-fashion").textContent =
        languageTexts.boysFashion;
    document.querySelector(".health-household").textContent =
        languageTexts.healthHousehold;
    document.querySelector(".home-kitchen").textContent =
        languageTexts.homeKitchen;
    document.querySelector(".industrial-scientific").textContent =
        languageTexts.industrialScientific;
    document.querySelector(".luggage").textContent = languageTexts.luggage;
    document.querySelector(".movies-television").textContent =
        languageTexts.moviesTelevision;
    document.querySelector(".pet-supplies").textContent =
        languageTexts.petSupplies;
    document.querySelector(".software").textContent = languageTexts.software;
    document.querySelector(".sports-outdoors").textContent =
        languageTexts.sportsOutdoors;
    document.querySelector(".toys-games").textContent = languageTexts.toysGames;
    document.querySelector(".video-games").textContent =
        languageTexts.videoGames;
    document.querySelector(".open-all-list").textContent =
        languageTexts.openAllList;
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
