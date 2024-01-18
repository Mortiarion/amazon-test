const customSlider = document.querySelector(".custom-slider");
const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slider-track");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let slides = [...sliderTrack.children];

sliderTrack.prepend(slides[slides.length - 1]);

const handleArrowClick = (arrow) => {
    arrow.addEventListener("click", () => {
        slides = [...sliderTrack.children];
        const currentSlide = sliderTrack.querySelector(".is-selected");
        currentSlide.classList.remove("is-selected");
        let targetSlide;

        if (arrow.classList.contains("prev-button")) {
            targetSlide = currentSlide.previousElementSibling;
            sliderTrack.prepend(slides[slides.length - 1]);
        }

        if (arrow.classList.contains("next-button")) {
            targetSlide = currentSlide.nextElementSibling;
            sliderTrack.append(slides[0]);
        }

        targetSlide.classList.add("is-selected");
    });
};

const buttons = document.querySelectorAll(".slider-button");
buttons.forEach(handleArrowClick);

const prevBtn = buttons[0];
const nextBtn = buttons[1];

const slideTiming = 5000;
let interval;

const slideInterval = () =>
    (interval = setInterval(() => nextBtn.click(), slideTiming));

customSlider.addEventListener("mouseover", () => clearInterval(interval));
customSlider.addEventListener("mouseleave", slideInterval);

slideInterval();
