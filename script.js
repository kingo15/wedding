document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.carousel').forEach(function(carousel) {
        const images = JSON.parse(carousel.getAttribute('data-images'));
        const imgTag = carousel.querySelector('.carousel-img');
        let current = 0;

        function showImage(idx) {
            imgTag.src = images[idx];
        }

        carousel.querySelector('.carousel-prev').addEventListener('click', function() {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
        });

        carousel.querySelector('.carousel-next').addEventListener('click', function() {
            current = (current + 1) % images.length;
            showImage(current);
        });

        showImage(current);
    });
});