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

document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const topnav = document.querySelector('.topnav');
    if (navToggle && topnav) {
        navToggle.addEventListener('click', function() {
            topnav.classList.toggle('show');
        });
    }

    // ...existing carousel code...
});