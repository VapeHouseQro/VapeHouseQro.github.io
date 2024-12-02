// Selección de los botones de productos para abrir los modales
const modalWaka = document.getElementById('modal-waka');
const modalIplay = document.getElementById('modal-iplay');
const modalAirfuze = document.getElementById('modal-airfuze');
const modalNastyBar = document.getElementById('modal-nastybar');

// Selección de las imágenes de los productos
const wakaBtn = document.querySelector('.producto:nth-child(1)');
const iplayBtn = document.querySelector('.producto:nth-child(2)');
const airfuzeBtn = document.querySelector('.producto:nth-child(3)');
const nastybarBtn = document.querySelector('.producto:nth-child(4)');

// Función para abrir el modal con transición suave
function openModal(model) {
  const modal = document.getElementById('modal-' + model);
  modal.classList.add('mostrar'); // Añadir clase 'mostrar' para hacer visible el modal
}

// Función para cerrar el modal con transición suave
function closeModal(model) {
  const modal = document.getElementById('modal-' + model);
  modal.classList.remove('mostrar'); // Eliminar clase 'mostrar' para ocultar el modal
}

// Funciones para abrir los modales
wakaBtn.addEventListener('click', () => {
  openModal('waka');
});

iplayBtn.addEventListener('click', () => {
  openModal('iplay');
});

airfuzeBtn.addEventListener('click', () => {
  openModal('airfuze');
});

nastybarBtn.addEventListener('click', () => {
  openModal('nastybar');
});

// Función para cerrar los modales desde la X
const cerrarModales = document.querySelectorAll('.cerrar');

cerrarModales.forEach(cerrar => {
  cerrar.addEventListener('click', () => {
    const modalName = cerrar.closest('.modal').id.split('-')[1]; // Obtener el nombre del modal
    closeModal(modalName);
  });
});

// Cerrar el modal al hacer clic fuera del área de contenido
window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.remove('mostrar'); // Cerrar el modal si se hace clic fuera
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