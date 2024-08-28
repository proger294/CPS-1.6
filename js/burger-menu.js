const btnBurger = document.querySelectorAll(".navigation__btn-burger");
const burgerMenu = document.querySelector(".burger-menu");
const btnClose = document.querySelectorAll(".navigation__btn-close");
const modalState = document.querySelector(".body__modal-state");

for (btn of btnBurger) {
  btn.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger-menu--open");
    if (burgerMenu.classList.contains("burger-menu--open")) {
      modalState.classList.add("body__modal-state--visible");
    }
  });
}

for (btn of btnClose) {
  btn.addEventListener("click", () => {
    burgerMenu.classList.remove("burger-menu--open");
    if (!burgerMenu.classList.contains("burger-menu--open")) {
      modalState.classList.remove("body__modal-state--visible");
    }
  });
}
