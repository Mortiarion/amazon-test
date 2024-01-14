const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
let slideInterval = setInterval(() => changeSlide(1), 4000);

const changeSlide = (direction) => {
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * 100 + "%";
    sliderWrapper.style.transform = "translateX(" + translateValue + ")";
};

prevButton.addEventListener("click", () => changeSlide(-1));
nextButton.addEventListener("click", () => changeSlide(1));

sliderWrapper.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

sliderWrapper.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => changeSlide(-1), 5000);
});
