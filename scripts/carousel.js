const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pauseBtn = document.querySelector(".pause-btn");

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;

  const dots = document.querySelectorAll(".carousel-dots span");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

const dotsContainer = document.querySelector(".carousel-dots");

let autoSlide = setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

carousel.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});

carousel.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
}

prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
  resetAutoSlide();
});

items.forEach((_, index) => {
  const dot = document.createElement("span");

  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });

  dotsContainer.appendChild(dot);
});


const dots = document.querySelectorAll(".carousel-dots span");
if (dots.length > 0) {
  dots[0].classList.add("active");
}

let isPaused = false;

pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    // resume
    autoSlide = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
    pauseBtn.textContent = "⏸";
  } else {
    // pause
    clearInterval(autoSlide);
    pauseBtn.textContent = "▶";
  }

  isPaused = !isPaused;
});

