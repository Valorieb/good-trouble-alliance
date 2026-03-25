const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pauseBtn = document.querySelector(".pause-btn");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;
let isPaused = false;
let autoSlide = null;

// -----------------------
// 1️⃣ Show a specific slide
// -----------------------
function showSlide(index) {
  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;

  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;

  // Update dots
  const dots = document.querySelectorAll(".carousel-dots span");
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
}

// -----------------------
// 2️⃣ Auto-slide functions
// -----------------------
function startAutoSlide() {
  // Only start if not paused
  if (isPaused) return;

  // Clear any existing interval first
  if (autoSlide) clearInterval(autoSlide);

  autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
}

function stopAutoSlide() {
  if (autoSlide) {
    clearInterval(autoSlide);
    autoSlide = null;
  }
}

// -----------------------
// 3️⃣ Reset auto-slide (after manual action)
// -----------------------
function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// -----------------------
// 4️⃣ Create dots dynamically
// -----------------------
items.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    showSlide(index);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

// Set first dot active
const dots = document.querySelectorAll(".carousel-dots span");
if (dots.length > 0) dots[0].classList.add("active");

// -----------------------
// 5️⃣ Arrow navigation
// -----------------------
prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
  resetAutoSlide();
});

// -----------------------
// 6️⃣ Hover pause
// -----------------------
carousel.addEventListener("mouseenter", () => {
  stopAutoSlide();
});

carousel.addEventListener("mouseleave", () => {
  startAutoSlide();
});

// -----------------------
// 7️⃣ Pause/Play button
// -----------------------
pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    isPaused = false;
    pauseBtn.textContent = "⏸";
    startAutoSlide();
  } else {
    isPaused = true;
    pauseBtn.textContent = "▶";
    stopAutoSlide();
  }
});

// -----------------------
// 8️⃣ Start carousel
// -----------------------
showSlide(0);
startAutoSlide();
