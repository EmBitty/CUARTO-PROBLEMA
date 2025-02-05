/***
Autor: Adrian Emiliano Rodriguez Santiesteban
Fecha: 02/05/2024
Lenguaje html
Fuente: local
Examen
***/

if (document.body.classList.contains('pagina-botones')) {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    function showImage(index) {
        const carouselImages = document.querySelector('.carousel-images');
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 3) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 3 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', nextImage);
    document.querySelector('.prev').addEventListener('click', prevImage);
}