const buttons = document.querySelectorAll(".btn-circle, .repair-btn, .btn-order");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        navigator.vibrate(10);
    });
  });
