const goTop = document.querySelector(".go-top");
const rootElement = document.documentElement;

const scrollToTop = () => {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

goTop.addEventListener("click", scrollToTop);
