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
        console.log(index);
        img.addEventListener('click', () => openModal(index));
        gallery.appendChild(img);
    });
};
// Función para abrir el modal y mostrar la imagen seleccionada
function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex];
    modal.style.display = 'flex';
}
// Función para cerrar el modal
const closeModal = () => {
    modal.style.display = 'none';
};
function prevImagen() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Volver al final si es la primera imagen
    }
    modalImage.src = images[currentIndex];
}
function nextImagen() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al principio si es la última imagen
    }
    modalImage.src = images[currentIndex];
}
// Eventos de los EventListeners
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', prevImagen);
nextBtn.addEventListener('click', nextBtn);

windows.addEventListener('click', event => {
    if (event.target === modal) {
        closeModal();
    }
});

crearGaleria();
