let accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("accordion__item_active");
    });
});

let nav = document.querySelector(".nav");
let menuButton = document.querySelector(".menu-button");
let navLinks = document.querySelectorAll(".nav__link");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("menu-button_show");
    nav.classList.toggle("nav_show");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuButton.classList.remove("menu-button_show");
        nav.classList.remove("nav_show");
    });
});
