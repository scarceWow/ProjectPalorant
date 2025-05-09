let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.boxcontainer .box');

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  thumbnails.forEach(thumb => thumb.classList.remove('active'));

  slides[index].style.display = 'flex';
  thumbnails[index].classList.add('active');
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});

showSlide(slideIndex);
