const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pauseBtn = document.querySelector(".pause-btn");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;
let autoSlide;
let isPaused = false;

// create dots
items.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".carousel-dots span");
dots[0].classList.add("active");

// show slide function
function showSlide(index) {
  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;

  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// navigation
prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
  resetAutoSlide();
});

// pause/play button
pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    startAutoSlide();
    pauseBtn.textContent = "⏸";
  } else {
    clearInterval(autoSlide);
    pauseBtn.textContent = "▶";
  }
  isPaused = !isPaused;
});

// hover pause
carousel.addEventListener("mouseenter", () => {
  clearInterval(autoSlide);
});
carousel.addEventListener("mouseleave", () => {
  if (!isPaused) startAutoSlide();
});

// auto-rotation
function startAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
}

function resetAutoSlide() {
  if (!isPaused) startAutoSlide();
}

// Intersection Observer to start only in view
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !autoSlide) {
        startAutoSlide();
        observer.unobserve(carousel);
      }
    });
  },
  { threshold: 0.5 },
);

observer.observe(carousel);
