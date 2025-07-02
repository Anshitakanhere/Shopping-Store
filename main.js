// Image Slider Logic
    document.addEventListener('DOMContentLoaded', function () {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');
        let currentIndex = 0;
        let intervalId;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % slides.length;
            showSlide(nextIndex);
        }

        function prevSlide() {
            let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }

        function startAutoSlide() {
            intervalId = setInterval(nextSlide, 3000);
        }

        function stopAutoSlide() {
            clearInterval(intervalId);
        }

        nextBtn.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(i);
                startAutoSlide();
            });
        });

        function startAutoSlide() {
    intervalId = setInterval(nextSlide, 1500); // 1.5 seconds
}
        function stopAutoSlide() {
            clearInterval(intervalId);
        }

        showSlide(0);
        startAutoSlide();
    });