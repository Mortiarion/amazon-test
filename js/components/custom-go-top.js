const goTop = document.querySelector(".go-top");

const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

goTop.addEventListener("click", scrollToTop);
