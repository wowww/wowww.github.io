const carouselSlide = document.querySelector('.caroucel-slide');
const caroucelImages = document.querySelectorAll('.caroucel-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter = 1;
const size = caroucelImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listeners
nextBtn.addEventListener('click', () => {
  if(counter >= caroucelImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
  if (caroucelImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = caroucelImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (caroucelImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    counter = caroucelImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

const pagination = document.querySelector(".carousel-pagination > li");
pagination.addEventListener('click', () => {
  console.log(22)
})