document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);


    const slider = document.querySelector('.testimonial-slider');
    
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    showSlide(currentIndex);
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const button = document.querySelector(".contact-btn1");
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = "Light";
    } else {
        button.textContent = "Dark";
    }
}
