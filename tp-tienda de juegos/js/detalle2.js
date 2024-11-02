
const openModal = document.getElementById('openModal');
const modal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  stopVideo(); 
});

function stopVideo() {
  const iframe = modal.querySelector('iframe');
  iframe.src = iframe.src; 
}


const images = [
  "../asset/image/imagen2_1.jpg",
  "../asset/image/imagen2_2.jpg",
  "../asset/image/imagen2_3.jpg",
  "../asset/image/imagen2_4.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');


const comentarios = document.querySelector(".comments-container");
comentarios.addEventListener("mouseover", () => {
  comentarios.style.animationPlayState = "paused";

})

comentarios.addEventListener("mouseout", () => {
  comentarios.style.animationPlayState = "running";

})

let index = 0;
const anterior = document.getElementById("anterior");
const posterior = document.getElementById("posterior");

anterior.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  sliderImage.src = images[index];
})

posterior.addEventListener("click", () => {
  index = (index + 1) % images.length;
  sliderImage.src = images[index];
})

