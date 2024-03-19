const swipeSliderCarts = document.querySelector(".slider-carts");

swipeSliderCarts.addEventListener("wheel", function (event) {
    event.preventDefault();
    swipeSliderCarts.scrollLeft += event.deltaY;
});

swipeSliderCarts.addEventListener("mousedown", function (event) {
    if (event.button === 0) {
        event.preventDefault();
        const startX = event.clientX;
        const scrollLeft = swipeSliderCarts.scrollLeft;

        function onMouseMove(moveEvent) {
            const delta = moveEvent.clientX - startX;
            swipeSliderCarts.scrollLeft = scrollLeft - delta;
        }

        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }
});
