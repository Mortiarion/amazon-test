import { showOverlay, hideOverlay, overlay } from "./custom-overlay.js";

const sideMenuButtonOpen = document.querySelector(".side-menu-button");
const sideMenu = document.querySelector(".side-menu");
const sideMenuButtonClose = document.querySelector(".side-menu-close");

const openSideMenu = () => {
    sideMenu.classList.add("side-menu-active");
    showOverlay();
};

const closeSideMenu = () => {
    sideMenu.classList.remove("side-menu-active");
    hideOverlay();
};

overlay.addEventListener("click", closeSideMenu);
sideMenuButtonOpen.addEventListener("click", openSideMenu);
sideMenuButtonClose.addEventListener("click", closeSideMenu);

const amazonMusic = document.getElementById("amazon-music");
const sideMenuOther = document.querySelector(".side-menu-other");
const goBackMainMenu = document.querySelectorAll(".go-back-main-menu");
const sideMenuMain = document.querySelector(".side-menu-main");

const openSideMenuOther = () => {
    sideMenuOther.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
};

const closeSideMenuOther = () => {
    sideMenuOther.classList.remove("side-menu-other-active");
    sideMenuMain.classList.remove("side-menu-main-hide");
};

const handleAmazonMusicClick = () => {
    if (!amazonMusic.classList.contains("side-menu-other-active")) {
        openSideMenuOther();
        sideMenu.classList.add("amazon-music-hide");
    }
};

const handleGoBackMainMenuClick = () => {
    return () => {
        closeSideMenuOther();
        sideMenu.classList.remove("amazon-music-hide");

        if (sideMenuReadersBook) {
            sideMenuReadersBook.classList.remove("side-menu-other-active");
        }

        if (sideMenuAmazonAppStore) {
            sideMenuAmazonAppStore.classList.remove("side-menu-other-active");
        }

        if (sideMenuElectronic) {
            sideMenuElectronic.classList.remove("side-menu-other-active");
        }

        if (sideMenuComputers) {
            sideMenuComputers.classList.remove("side-menu-other-active");
        }

        if (sideMenuSmartHome) {
            sideMenuSmartHome.classList.remove("side-menu-other-active");
        }

        if (sideMenuArtsCraft) {
            sideMenuArtsCraft.classList.remove("side-menu-other-active");
        }

        if (sideMenuAutomotive) {
            sideMenuAutomotive.classList.remove("side-menu-other-active");
        }

        if (sideMenuBaby) {
            sideMenuBaby.classList.remove("side-menu-other-active");
        }

        if (sideMenuBeautyPersonalCare) {
            sideMenuBeautyPersonalCare.classList.remove(
                "side-menu-other-active"
            );
        }

        if (sideMenuWomensFashion) {
            sideMenuWomensFashion.classList.remove("side-menu-other-active");
        }

        if (sideMenuMensFashion) {
            sideMenuMensFashion.classList.remove("side-menu-other-active");
        }

        if (sideMenuGirlsFashion) {
            sideMenuGirlsFashion.classList.remove("side-menu-other-active");
        }

        if (sideMenuBoysFashion) {
            sideMenuBoysFashion.classList.remove("side-menu-other-active");
        }

        if (sideMenuHealthHousehold) {
            sideMenuHealthHousehold.classList.remove("side-menu-other-active");
        }

        if (sideMenuHomeKitchen) {
            sideMenuHomeKitchen.classList.remove("side-menu-other-active");
        }

        if (sideMenuIndustrialScientific) {
            sideMenuIndustrialScientific.classList.remove(
                "side-menu-other-active"
            );
        }

        if (sideMenuLuggage) {
            sideMenuLuggage.classList.remove("side-menu-other-active");
        }

        if (sideMenuMoviesTelevision) {
            sideMenuMoviesTelevision.classList.remove("side-menu-other-active");
        }

        if (sideMenuPetSupplies) {
            sideMenuPetSupplies.classList.remove("side-menu-other-active");
        }

        if (sideMenuSoftware) {
            sideMenuSoftware.classList.remove("side-menu-other-active");
        }

        if (sideMenuSportsOutdoors) {
            sideMenuSportsOutdoors.classList.remove("side-menu-other-active");
        }

        if (sideMenuToysGames) {
            sideMenuToysGames.classList.remove("side-menu-other-active");
        }

        if (sideMenuVideoGames) {
            sideMenuVideoGames.classList.remove("side-menu-other-active");
        }

        if (sideMenuGiftCards) {
            sideMenuGiftCards.classList.remove("side-menu-other-active");
        }

        if (sideMenuAmazonLive) {
            sideMenuAmazonLive.classList.remove("side-menu-other-active");
        }

        if (sideMenuInternationalShopping) {
            sideMenuInternationalShopping.classList.remove(
                "side-menu-other-active"
            );
        }
    };
};

const handleClickSideMenu = (event) => {
    if (event.target === amazonMusic) {
        handleAmazonMusicClick();
    } else if (Array.from(goBackMainMenu).includes(event.target)) {
        const index = Array.from(goBackMainMenu).indexOf(event.target);
        handleGoBackMainMenuClick(index)();
    }
};

amazonMusic.addEventListener("click", handleClickSideMenu);
goBackMainMenu.forEach((item, index) => {
    item.addEventListener("click", handleGoBackMainMenuClick(index));
});

const readersBooks = document.getElementById("readers-books");
const sideMenuReadersBook = document.querySelector(".side-menu-readers-book");

const handleReadersBooksClick = () => {
    if (!sideMenuReadersBook.classList.contains("side-menu-other-active")) {
        sideMenuReadersBook.classList.add("side-menu-other-active");
        sideMenu.classList.add("amazon-music-hide");
        sideMenuMain.classList.add("side-menu-main-hide");
    }
};

readersBooks.addEventListener("click", handleReadersBooksClick);

const amazonApps = document.getElementById("amazon-apps");
const sideMenuAmazonAppStore = document.querySelector(
    ".side-menu-amazon-appstore"
);

const openSideMenuAmazonAppStore = () => {
    sideMenuAmazonAppStore.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

amazonApps.addEventListener("click", openSideMenuAmazonAppStore);

const electronic = document.getElementById("electronic");
const sideMenuElectronic = document.querySelector(".side-menu-electronic");

const openSideMenuElectronic = () => {
    sideMenuElectronic.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

electronic.addEventListener("click", openSideMenuElectronic);

const computers = document.getElementById("computers");
const sideMenuComputers = document.querySelector(".side-menu-computers");

const openSideMenuComputers = () => {
    sideMenuComputers.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

computers.addEventListener("click", openSideMenuComputers);

const smartHome = document.getElementById("smart-home");
const sideMenuSmartHome = document.querySelector(".side-menu-smart-home");

const openSideMenuSmartHome = () => {
    sideMenuSmartHome.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

smartHome.addEventListener("click", openSideMenuSmartHome);

const artsCrafts = document.getElementById("arts-crafts");
const sideMenuArtsCraft = document.querySelector(".side-menu-arts-crafts");

const openSideMenuArtsCraft = () => {
    sideMenuArtsCraft.classList.add("side-menu-other-active");
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

artsCrafts.addEventListener("click", openSideMenuArtsCraft);

const shopDepartmentAllList = document.getElementById(
    "shop-department-all-list"
);
const sideMenuAllList = document.querySelector(".side-menu-list-all");

const openShopDepartmentAllList = () => {
    sideMenuAllList.classList.toggle("side-menu-list-all-active");
    shopDepartmentAllList.classList.toggle("open-all-list-active");

    const isOpen = shopDepartmentAllList.classList.contains(
        "open-all-list-active"
    );
    shopDepartmentAllList.textContent = isOpen ? "See Less" : "See All";
    sideMenuAllList.style.height = isOpen
        ? sideMenuAllList.scrollHeight + "px"
        : "0";
};

shopDepartmentAllList.addEventListener("click", openShopDepartmentAllList);

const sideMenuProgramsFeatureList = document.querySelector(
    ".side-menu-programs-feature"
);
const programFeatureAllList = document.getElementById(
    "program-feature-all-list"
);

const openSideMenuProgramsFeatureList = () => {
    sideMenuProgramsFeatureList.classList.toggle("side-menu-list-all-active");
    programFeatureAllList.classList.toggle("open-all-list-active");

    const isOpen = programFeatureAllList.classList.contains(
        "open-all-list-active"
    );
    programFeatureAllList.textContent = isOpen ? "See Less" : "See All";
    sideMenuProgramsFeatureList.style.height = isOpen
        ? sideMenuProgramsFeatureList.scrollHeight + "px"
        : "0";
};

programFeatureAllList.addEventListener(
    "click",
    openSideMenuProgramsFeatureList
);

const automotive = document.getElementById("automotive"); // при натиску на це
const sideMenuAutomotive = document.querySelector(".side-menu-automotive"); // має відкритись це

const openSideMenuMainAndSideMenu = () => {
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.add("amazon-music-hide");
};

const openSideMenuAutomotive = () => {
    openSideMenuMainAndSideMenu();
    sideMenuAutomotive.classList.add("side-menu-other-active");
};

automotive.addEventListener("click", openSideMenuAutomotive);

const baby = document.getElementById("baby");
const sideMenuBaby = document.querySelector(".side-menu-baby");

const openSideMenuBaby = () => {
    openSideMenuMainAndSideMenu();
    sideMenuBaby.classList.add("side-menu-other-active");
};

baby.addEventListener("click", openSideMenuBaby);

const beautyPersonalCare = document.getElementById("beauty-personal-care");
const sideMenuBeautyPersonalCare = document.querySelector(
    ".side-menu-beauty-personal-care"
);

const openSideMenuBeautyPersonalCare = () => {
    openSideMenuMainAndSideMenu();
    sideMenuBeautyPersonalCare.classList.add("side-menu-other-active");
};

beautyPersonalCare.addEventListener("click", openSideMenuBeautyPersonalCare);

const womensFashion = document.getElementById("womens-fashion");
const sideMenuWomensFashion = document.querySelector(
    ".side-menu-womens-fashion"
);

const openSideMenuWomensFashion = () => {
    openSideMenuMainAndSideMenu();
    sideMenuWomensFashion.classList.add("side-menu-other-active");
};

womensFashion.addEventListener("click", openSideMenuWomensFashion);

const mensFashion = document.getElementById("mens-fashion");
const sideMenuMensFashion = document.querySelector(".side-menu-mens-fashion");

const openSideMenuMensFashion = () => {
    openSideMenuMainAndSideMenu();
    sideMenuMensFashion.classList.add("side-menu-other-active");
};

mensFashion.addEventListener("click", openSideMenuMensFashion);

const girlsFashion = document.getElementById("girls-fashion");
const sideMenuGirlsFashion = document.querySelector(".side-menu-girls-fashion");

const openSideMenuGirlsFashion = () => {
    openSideMenuMainAndSideMenu();
    sideMenuGirlsFashion.classList.add("side-menu-other-active");
};

girlsFashion.addEventListener("click", openSideMenuGirlsFashion);

const boysFashion = document.getElementById("boys-fashion");
const sideMenuBoysFashion = document.querySelector(".side-menu-boys-fashion");

const openSideMenuBoysFashion = () => {
    openSideMenuMainAndSideMenu();
    sideMenuBoysFashion.classList.add("side-menu-other-active");
};

boysFashion.addEventListener("click", openSideMenuBoysFashion);

const healthHousehold = document.getElementById("health-household");
const sideMenuHealthHousehold = document.querySelector(
    ".side-menu-health-household"
);

const openSideMenuHealthHousehold = () => {
    openSideMenuMainAndSideMenu();
    sideMenuHealthHousehold.classList.add("side-menu-other-active");
};

healthHousehold.addEventListener("click", openSideMenuHealthHousehold);

const homeKitchen = document.getElementById("home-kitchen");
const sideMenuHomeKitchen = document.querySelector(".side-menu-home-kitchen");

const openSideMenuHomeKitchen = () => {
    openSideMenuMainAndSideMenu();
    sideMenuHomeKitchen.classList.add("side-menu-other-active");
};

homeKitchen.addEventListener("click", openSideMenuHomeKitchen);

const industrialScientific = document.getElementById("industrial-scientific");
const sideMenuIndustrialScientific = document.querySelector(
    ".side-menu-industrial-scientific"
);

const openSideMenuIndustrialScientific = () => {
    sideMenuMain.classList.add("side-menu-main-hide");
    sideMenu.classList.remove("amazon-music-hide");
    sideMenuIndustrialScientific.classList.add("side-menu-other-active");
};

industrialScientific.addEventListener(
    "click",
    openSideMenuIndustrialScientific
);

const luggage = document.getElementById("luggage");
const sideMenuLuggage = document.querySelector(".side-menu-luggage");

const openSideMenuLuggage = () => {
    openSideMenuMainAndSideMenu();
    sideMenuLuggage.classList.add("side-menu-other-active");
};

luggage.addEventListener("click", openSideMenuLuggage);

const moviesTelevision = document.getElementById("movies-television");
const sideMenuMoviesTelevision = document.querySelector(
    ".side-menu-movies-television"
);

const openSideMenuMoviesTelevision = () => {
    openSideMenuMainAndSideMenu();
    sideMenuMoviesTelevision.classList.add("side-menu-other-active");
};

const petSupplies = document.getElementById("pet-supplies");
const sideMenuPetSupplies = document.querySelector(".side-menu-pet-supplies");

const openSideMenuPetSupplies = () => {
    openSideMenuMainAndSideMenu();
    sideMenuPetSupplies.classList.add("side-menu-other-active");
};

const software = document.getElementById("software");
const sideMenuSoftware = document.querySelector(".side-menu-software");

const openSideMenuSoftware = () => {
    openSideMenuMainAndSideMenu();
    sideMenuSoftware.classList.add("side-menu-other-active");
};

const sportsOutdoors = document.getElementById("sports-outdoors");
const sideMenuSportsOutdoors = document.querySelector(
    ".side-menu-sports-outdoors"
);

const openSideMenuSportsOutdoors = () => {
    openSideMenuMainAndSideMenu();
    sideMenuSportsOutdoors.classList.add("side-menu-other-active");
};

const toysGames = document.getElementById("toys-games");
const sideMenuToysGames = document.querySelector(".side-menu-toys-games");

const openSideMenuToysGames = () => {
    openSideMenuMainAndSideMenu();
    sideMenuToysGames.classList.add("side-menu-other-active");
};

const videoGames = document.getElementById("video-games");
const sideMenuVideoGames = document.querySelector(".side-menu-video-games");

const openSideMenuVideoGames = () => {
    openSideMenuMainAndSideMenu();
    sideMenuVideoGames.classList.add("side-menu-other-active");
};

moviesTelevision.addEventListener("click", openSideMenuMoviesTelevision);
petSupplies.addEventListener("click", openSideMenuPetSupplies);
software.addEventListener("click", openSideMenuSoftware);
sportsOutdoors.addEventListener("click", openSideMenuSportsOutdoors);
toysGames.addEventListener("click", openSideMenuToysGames);
videoGames.addEventListener("click", openSideMenuVideoGames);

const giftCards = document.getElementById("gift-cards");
const sideMenuGiftCards = document.querySelector(".side-menu-gift-cards");

const openSideMenuGiftCards = () => {
    openSideMenuMainAndSideMenu();
    sideMenuGiftCards.classList.add("side-menu-other-active");
};

giftCards.addEventListener("click", openSideMenuGiftCards);

const amazonLive = document.getElementById("amazon-live");
const sideMenuAmazonLive = document.querySelector(".side-menu-amazon-live");

const openSideMenuAmazonLive = () => {
    openSideMenuMainAndSideMenu();
    sideMenuAmazonLive.classList.add("side-menu-other-active");
};

amazonLive.addEventListener("click", openSideMenuAmazonLive);

const internationalShopping = document.getElementById("international-shopping");
const sideMenuInternationalShopping = document.querySelector(
    ".side-menu-international-shopping"
);

const openSideMenuInternationalShopping = () => {
    openSideMenuMainAndSideMenu();
    sideMenuInternationalShopping.classList.add("side-menu-other-active");
};

internationalShopping.addEventListener(
    "click",
    openSideMenuInternationalShopping
);
