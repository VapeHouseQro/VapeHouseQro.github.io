const modalWaka = document.getElementById('modal-waka');
const modalIplay = document.getElementById('modal-iplay');
const modalAirfuze = document.getElementById('modal-airfuze');

const wakaBtn = document.querySelector('.producto:nth-child(1)');
const iplayBtn = document.querySelector('.producto:nth-child(2)');
const airfuzeBtn = document.querySelector('.producto:nth-child(3)');
const nastybarBtn = document.querySelector('.producto:nth-child(4)');

function openModal(model) {
  const modal = document.getElementById('modal-' + model);
  modal.classList.add('mostrar');
}

function closeModal(model) {
  const modal = document.getElementById('modal-' + model);
  modal.classList.remove('mostrar'); 
}

wakaBtn.addEventListener('click', () => {
  openModal('waka');
});

iplayBtn.addEventListener('click', () => {
  openModal('iplay');
});

airfuzeBtn.addEventListener('click', () => {
  openModal('airfuze');
});


const cerrarModales = document.querySelectorAll('.cerrar');

cerrarModales.forEach(cerrar => {
  cerrar.addEventListener('click', () => {
    const modalName = cerrar.closest('.modal').id.split('-')[1];
    closeModal(modalName);
  });
});

window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.remove('mostrar');
    }
  });
});

// Slider
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
let index = 0;

function cambiarSlide() {
  index++;
  if (index >= slideImages.length) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(cambiarSlide, 3000);