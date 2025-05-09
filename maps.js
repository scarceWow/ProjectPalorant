const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dots span");

let currentSlide = 0;

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
  
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active-dot');
    } else {
      dot.classList.remove('active-dot');
    }
  });
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlide();
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

updateSlide();
