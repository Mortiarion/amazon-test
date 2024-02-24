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
    document.querySelector(".text-language19").textContent =
        languageTexts.textLanguage19;
    document.querySelector(".gift-cards").textContent = languageTexts.giftCards;
    document.querySelector(".shop-interest").textContent =
        languageTexts.shopInterest;
    document.querySelector(".amazon-live").textContent =
        languageTexts.amazonLive;
    document.querySelector(".international-shopping").textContent =
        languageTexts.internationalShopping;
    document.querySelector(".amazon-second-chance").textContent =
        languageTexts.amazonSecondChance;
    document.querySelector(".text-language20").textContent =
        languageTexts.textLanguage20;
    document.querySelector(".your-account").textContent =
        languageTexts.yourAccount;
    document.querySelector(".text-language21").textContent =
        languageTexts.textLanguage21;
    document.querySelector(".text-language22").textContent =
        languageTexts.textLanguage22;
    document.querySelector(".customer-service").textContent =
        languageTexts.customerService;
    document.querySelector(".text-language23").textContent =
        languageTexts.textLanguage23;
    document.querySelector(".text-language24").textContent =
        languageTexts.textLanguage24;
    document.querySelector(".stream-music").textContent =
        languageTexts.streamMusic;
    document.querySelector(".amazon-music-unlimited").textContent =
        languageTexts.amazonMusicUnlimited;
    document.querySelector(".free-streaming-music").textContent =
        languageTexts.freeStreamingMusic;
    document.querySelector(".podcasts").textContent = languageTexts.podcasts;
    document.querySelector(".open-web-player").textContent =
        languageTexts.openWebPlayer;
    document.querySelector(".download-the-app").textContent =
        languageTexts.downloadTheApp;
    document.querySelector(".text-language25").textContent =
        languageTexts.textLanguage25;
    document.querySelector(".text-language26").textContent =
        languageTexts.textLanguage26;
    document.querySelector(".text-language27").textContent =
        languageTexts.textLanguage27;
    document.querySelector(".text-language28").textContent =
        languageTexts.textLanguage28;
    document.querySelector(".text-language29").textContent =
        languageTexts.textLanguage29;
    document.querySelector(".text-language30").textContent =
        languageTexts.textLanguage30;
    document.querySelector(".text-language31").textContent =
        languageTexts.textLanguage31;
    document.querySelector(".text-language32").textContent =
        languageTexts.textLanguage32;
    document.querySelector(".text-language33").textContent =
        languageTexts.textLanguage33;
    document.querySelector(".text-language34").textContent =
        languageTexts.textLanguage34;
    document.querySelector(".text-language35").textContent =
        languageTexts.textLanguage35;
    document.querySelector(".text-language36").textContent =
        languageTexts.textLanguage36;
    document.querySelector(".text-language37").textContent =
        languageTexts.textLanguage37;
    document.querySelector(".text-language38").textContent =
        languageTexts.textLanguage38;
    document.querySelector(".text-language39").textContent =
        languageTexts.textLanguage39;
    document.querySelector(".text-language40").textContent =
        languageTexts.textLanguage40;
    document.querySelector(".text-language41").textContent =
        languageTexts.textLanguage41;
    document.querySelector(".text-language42").textContent =
        languageTexts.textLanguage42;
    document.querySelector(".text-language43").textContent =
        languageTexts.textLanguage43;
    document.querySelector(".text-language44").textContent =
        languageTexts.textLanguage44;
    document.querySelector(".text-language45").textContent =
        languageTexts.textLanguage45;
    document.querySelector(".text-language46").textContent =
        languageTexts.textLanguage46;
    document.querySelector(".text-language47").textContent =
        languageTexts.textLanguage47;
    document.querySelector(".text-language48").textContent =
        languageTexts.textLanguage48;
    document.querySelector(".text-language49").textContent =
        languageTexts.textLanguage49;
    document.querySelector(".text-language50").textContent =
        languageTexts.textLanguage50;
    document.querySelector(".text-language51").textContent =
        languageTexts.textLanguage51;
    document.querySelector(".text-language52").textContent =
        languageTexts.textLanguage52;
    document.querySelector(".text-language53").textContent =
        languageTexts.textLanguage53;
    document.querySelector(".text-language54").textContent =
        languageTexts.textLanguage54;
    document.querySelector(".text-language55").textContent =
        languageTexts.textLanguage55;
    document.querySelector(".text-language56").textContent =
        languageTexts.textLanguage56;
    document.querySelector(".text-language57").textContent =
        languageTexts.textLanguage57;
    document.querySelector(".text-language58").textContent =
        languageTexts.textLanguage58;
    document.querySelector(".text-language59").textContent =
        languageTexts.textLanguage59;
    document.querySelector(".text-language60").textContent =
        languageTexts.textLanguage60;
    document.querySelector(".text-language61").textContent =
        languageTexts.textLanguage61;
    document.querySelector(".text-language62").textContent =
        languageTexts.textLanguage62;
    document.querySelector(".text-language63").textContent =
        languageTexts.textLanguage63;
    document.querySelector(".text-language64").textContent =
        languageTexts.textLanguage64;
    document.querySelector(".text-language65").textContent =
        languageTexts.textLanguage65;
    document.querySelector(".text-language66").textContent =
        languageTexts.textLanguage66;
    document.querySelector(".text-language67").textContent =
        languageTexts.textLanguage67;
    document.querySelector(".text-language68").textContent =
        languageTexts.textLanguage68;
    document.querySelector(".text-language69").textContent =
        languageTexts.textLanguage69;
    document.querySelector(".text-language70").textContent =
        languageTexts.textLanguage70;
    document.querySelector(".text-language71").textContent =
        languageTexts.textLanguage71;
    document.querySelector(".text-language72").textContent =
        languageTexts.textLanguage72;
    document.querySelector(".text-language73").textContent =
        languageTexts.textLanguage73;
    document.querySelector(".text-language74").textContent =
        languageTexts.textLanguage74;
    document.querySelector(".text-language75").textContent =
        languageTexts.textLanguage75;
    document.querySelector(".text-language76").textContent =
        languageTexts.textLanguage76;
    document.querySelector(".text-language77").textContent =
        languageTexts.textLanguage77;
    document.querySelector(".text-language78").textContent =
        languageTexts.textLanguage78;
    document.querySelector(".text-language79").textContent =
        languageTexts.textLanguage79;
    document.querySelector(".text-language80").textContent =
        languageTexts.textLanguage80;
    document.querySelector(".text-language81").textContent =
        languageTexts.textLanguage81;
    document.querySelector(".text-language82").textContent =
        languageTexts.textLanguage82;
    document.querySelector(".text-language83").textContent =
        languageTexts.textLanguage83;
    document.querySelector(".text-language84").textContent =
        languageTexts.textLanguage84;
    document.querySelector(".text-language85").textContent =
        languageTexts.textLanguage85;
    document.querySelector(".text-language86").textContent =
        languageTexts.textLanguage86;
    document.querySelector(".text-language87").textContent =
        languageTexts.textLanguage87;
    document.querySelector(".text-language88").textContent =
        languageTexts.textLanguage88;
    document.querySelector(".text-language89").textContent =
        languageTexts.textLanguage89;
    document.querySelector(".text-language90").textContent =
        languageTexts.textLanguage90;
    document.querySelector(".text-language91").textContent =
        languageTexts.textLanguage91;
    document.querySelector(".text-language92").textContent =
        languageTexts.textLanguage92;
    document.querySelector(".text-language93").textContent =
        languageTexts.textLanguage93;
    document.querySelector(".text-language94").textContent =
        languageTexts.textLanguage94;
    document.querySelector(".text-language95").textContent =
        languageTexts.textLanguage95;
    document.querySelector(".text-language96").textContent =
        languageTexts.textLanguage96;
    document.querySelector(".text-language97").textContent =
        languageTexts.textLanguage97;
    document.querySelector(".text-language98").textContent =
        languageTexts.textLanguage98;
    document.querySelector(".text-language99").textContent =
        languageTexts.textLanguage99;
    document.querySelector(".text-language100").textContent =
        languageTexts.textLanguage100;
    document.querySelector(".text-language101").textContent =
        languageTexts.textLanguage101;
    document.querySelector(".text-language102").textContent =
        languageTexts.textLanguage102;
    document.querySelector(".text-language103").textContent =
        languageTexts.textLanguage103;
    document.querySelector(".text-language104").textContent =
        languageTexts.textLanguage104;
    document.querySelector(".text-language105").textContent =
        languageTexts.textLanguage105;
    document.querySelector(".text-language106").textContent =
        languageTexts.textLanguage106;
    document.querySelector(".text-language107").textContent =
        languageTexts.textLanguage107;
    document.querySelector(".text-language108").textContent =
        languageTexts.textLanguage108;
    document.querySelector(".text-language109").textContent =
        languageTexts.textLanguage109;
    document.querySelector(".text-language110").textContent =
        languageTexts.textLanguage110;
    document.querySelector(".text-language111").textContent =
        languageTexts.textLanguage111;
    document.querySelector(".text-language112").textContent =
        languageTexts.textLanguage112;
    document.querySelector(".text-language113").textContent =
        languageTexts.textLanguage113;
    document.querySelector(".text-language114").textContent =
        languageTexts.textLanguage114;
    document.querySelector(".text-language115").textContent =
        languageTexts.textLanguage115;
    document.querySelector(".text-language116").textContent =
        languageTexts.textLanguage116;
    document.querySelector(".text-language117").textContent =
        languageTexts.textLanguage117;
    document.querySelector(".text-language118").textContent =
        languageTexts.textLanguage118;
    document.querySelector(".text-language119").textContent =
        languageTexts.textLanguage119;
    document.querySelector(".text-language120").textContent =
        languageTexts.textLanguage120;
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
