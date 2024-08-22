const btnShowAll = document.querySelector(".btn-show-all");
const slides = document.querySelectorAll(".swiper-slide");

    btnShowAll.addEventListener("click", () => {
      showSlides(), changeButton();
    });
  

function showSlides() {
  if (window.innerWidth >= 768) {
    for(let slide of slides){
      slide.classList.toggle("brands-slide--visible");
    }
  }
}

function changeButton() {

    btnShowAll.classList.toggle("btn-show-all--active");
    btnShowAll.classList.contains("btn-show-all--active") ?
    btnShowAll.innerHTML = "Закрыть":
    btnShowAll.innerHTML = "Показать все";
   
  
}
