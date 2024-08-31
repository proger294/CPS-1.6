const buttons = document.querySelectorAll(
  ".btn-circle",
  ".repair-btn",
  ".btn-order"
);

for (let button of buttons) {
  button.addEventListener("click", () => {
    vibrate();
  });
}

function vibrate() {
  navigator.vibrate(100);
}
