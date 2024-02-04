const ukrainianCheckbox = document.getElementById("ukrainianCheckbox");
const labelUkrainianCheckbox = document.querySelector(
    "label[for='ukrainianCheckbox']"
);

const englishCheckbox = document.getElementById("englishCheckbox");
const labelEnglishCheckbox = document.querySelector(
    "label[for='englishCheckbox']"
);

// тут буду отримувати аснхронно доступ до файлів json де зберігаються переклади мов
async function loadLanguageTexts(language) {
    const response = await fetch(`language-change-json/texts-${language}.json`);
    const data = await response.json();
    return data;
}

async function changeLanguage() {
    // Отримуємо обрану англійську мову, якщо жоден інший чекбокс не вибрано
    const selectedLanguage = ukrainianCheckbox.checked ? "uk" : "en";

    saveSelectedLanguage(selectedLanguage);

    // Обираємо мову залежно від вибору користувача
    const languageTexts = await loadLanguageTexts(selectedLanguage);
    document.querySelector(".deliver").textContent = languageTexts.deliver;
    document.querySelector(".region").textContent = languageTexts.region;
}

englishCheckbox.addEventListener("change", changeLanguage);
ukrainianCheckbox.addEventListener("change", changeLanguage);

// Зберігаємо обрану мову в локальному сховищі
function saveSelectedLanguage(language) {
    localStorage.setItem("selectedLanguage", language);
}

// Завантажуємо обрану мову з локального сховища
function loadSelectedLanguage() {
    return localStorage.getItem("selectedLanguage") || "en";
}

const languageCheckboxes = document.querySelectorAll(".checkbox");

document.addEventListener("DOMContentLoaded", async function () {
    // Завантажуємо обрану мову з локального сховища
    const selectedLanguage = loadSelectedLanguage();

    // Встановлюємо обрану мову відповідно до локального сховища
    if (selectedLanguage === "uk") {
        ukrainianCheckbox.checked = true;
        labelUkrainianCheckbox.parentElement.classList.add("active-checkbox");
    } else {
        englishCheckbox.checked = true;
        labelEnglishCheckbox.parentElement.classList.add("active-checkbox");
    }

    await changeLanguage();

    // Встановлюємо подію зміни мови для кожного чекбокса
    [ukrainianCheckbox, englishCheckbox].forEach((checkbox) => {
        checkbox.addEventListener("change", async function () {
            // Змінюємо значення мови в локальному сховищі
            saveSelectedLanguage(
                checkbox.id === "ukrainianCheckbox" ? "uk" : "en"
            );

            // Знімаємо попередній вибір з усіх чекбоксів
            [ukrainianCheckbox, englishCheckbox].forEach((cb) => {
                if (cb !== checkbox) {
                    cb.checked = false;
                    cb.parentElement.classList.remove("active-checkbox");
                }
            });

            // Позначаємо обраний чекбокс як активний
            if (checkbox.checked) {
                // checkbox.checked = true;
                checkbox.parentElement.classList.add("active-checkbox");
                await changeLanguage();
            }

            // Змінюємо мову
            await changeLanguage();
        });
    });

    // Викликаємо зміну мови при завантаженні сторінки
    await changeLanguage();

    // Перевіряємо, чи чекбокс для англійської мови не встановлений
    if (!englishCheckbox.checked) {
        // Якщо чекбокс не встановлений, встановлюємо за замовчуванням англійську мову
        englishCheckbox.checked = true;
        labelEnglishCheckbox.parentElement.classList.add("active-checkbox");
    }

    // Встановлюємо подію зміни мови для кожного чекбокса
    languageCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            // Знімаємо попередній вибір з усіх чекбоксів
            languageCheckboxes.forEach((cb) => {
                if (cb !== this) {
                    cb.checked = false;
                    cb.parentElement.classList.remove("active-checkbox");
                }
            });

            // Позначаємо обраний чекбокс як активний
            if (this.checked) {
                this.parentElement.classList.add("active-checkbox");
            }

            changeLanguage();
        });
    });
});
















"choose-location": "Choose your location",
    "location-text": "Delivery options and delivery speeds may vary for different locations",
    "location-button": "Sign in to see your addresses",
    "divider-break-text": "or enter a US zip code",
    "apply": "Apply",
    "divider-break-texts": "or",
    "selected-country": "Ukraine",
    "done": "Done"