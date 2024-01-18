const customSlider = document.querySelector(".custom-slider");
const slider = customSlider.querySelector(".slider-track");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let slides = [...slider.children];

slider.prepend(slides[slides.length - 1]);

const handleArrowClick = (arrow) => {
    arrow.addEventListener("click", () => {
        slides = [...slider.children];
        const currSlide = slider.querySelector(".is-selected");
        currSlide.classList.remove("is-selected");
        let targetSlide;

        if (arrow.classList.contains("prev-button")) {
            targetSlide = currSlide.previousElementSibling;
            slider.prepend(slides[slides.length - 1]);
        }

        if (arrow.classList.contains("next-button")) {
            targetSlide = currSlide.nextElementSibling;
            slider.append(slides[0]);
        }

        targetSlide.classList.add("is-selected");
    });
};

const buttons = customSlider.querySelectorAll(".slider-button");
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















































const elements = document.querySelectorAll("[data-include]");
const totalPartials = elements.length;
let processedPartials = 0;

const scrollToElementId = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
};

const checkAllProcessed = () => {
    if (processedPartials === totalPartials) {
        const event = new CustomEvent("partialsLoaded");
        document.dispatchEvent(event);
        const url = new URL(window.location.href);
        const id = url.hash.slice(1);
        if (id) {
            scrollToElementId(id);
        }
    }
};

checkAllProcessed();

elements.forEach((element) => {
    const src = element.getAttribute("data-include");
    fetch(src)
        .then((response) => {
            if (response.status === 200) {
                return response.text();
            } else {
                return Promise.reject(
                    new Error(
                        `Failed to load ${src} with status ${response.status}`
                    )
                );
            }
        })
        .then((html) => {
            element.outerHTML = html;
            processedPartials++;
            checkAllProcessed();
        })
        .catch((error) => {
            console.error("Error including file:", error);
            processedPartials++;
            checkAllProcessed();
        });
});
