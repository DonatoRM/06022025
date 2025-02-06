'use strict';
// Crearemos un array con la galería de imágenes
const images = [
  'https://picsum.photos/600/400?text=Imagen+1',
  'https://picsum.photos/600/400?text=Imagen+2',
  'https://picsum.photos/600/400?text=Imagen+3',
  'https://picsum.photos/600/400?text=Imagen+4',
  'https://picsum.photos/600/400?text=Imagen+5',
  'https://picsum.photos/600/400?text=Imagen+6',
];
// Creamos los elementos del DOM
// galería, modal, modalImage, close, next, prev
const gallery = document.getElementById('galeria');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0; // Índice de la imagen actual
// Creación de la función de la Galería
const crearGaleria = () => {
  images.forEach((imagen, index) => {
    const img = document.createElement('img');
    img.src = imagen;
    img.alt = `Imagen ${index + 1}`;
    img.addEventListener('click', openModal(index));
    gallery.appendChild(img);
  });
};
// Función para abrir el modal y mostrar la imagen seleccionada
const openModal = index => {
  currentIndex = index;
  modalImage.src = images[currentIndex];
  modal.style.display = 'flex';
};
// Función para cerrar el modal
const closeModal = () => {
  modal.style.display = 'none';
};
crearGaleria();
