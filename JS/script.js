const menuHumburger = document.querySelector(".menu__humburger");
const menuBody = document.querySelector(".menu__body");
const menuBox = document.querySelector(".menu__box");
const menuCloseButton = document.querySelector(".menu__close-button");
const popupBody = document.querySelector(".popup");
const popupButton = document.querySelector(".popup__button");
const popupCloseButton = document.querySelector(".help__close-button");
const body = document.body;

menuHumburger.addEventListener("click", () => {
    menuBox.classList.toggle("menu__box--open");
    body.classList.toggle("lock");
});

menuCloseButton.addEventListener("click", () => {
    menuBox.classList.remove("menu__box--open");
    body.classList.remove("lock");
});

popupButton.addEventListener("click", () => {
    popupBody.classList.toggle("popup--open");
    body.classList.toggle("lock");
});

popupCloseButton.addEventListener("click", () => {
    popupBody.classList.remove("popup--open");
    body.classList.remove("lock");
});
