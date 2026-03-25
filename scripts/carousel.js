const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
