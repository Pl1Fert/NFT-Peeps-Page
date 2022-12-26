let accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("accordion__item_active");
    });
});
