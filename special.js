


// let currentIndex = 0;

// function moveSlide(direction) {
//     const slides = document.querySelector('.spl');
//     const totalSlides = slides.children.length;
//     currentIndex += direction;

//     if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (currentIndex >= totalSlides) {
//         currentIndex = 0;
//     }

//     const offset = -currentIndex * 100;
//     slides.style.transform = `translateX(${offset}%)`;
// } 


let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.gallery-slide');
    const totalSlides = slides.children.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}


let index = 0;
const slides = document.querySelectorAll(".gallery-slide img, .gallery-slide video");

function moveSlide(step) {
    slides[index].classList.remove("active");  // Hide current image/video
    index = (index + step + slides.length) % slides.length;  // Move to the next or previous
    slides[index].classList.add("active");  // Show new image/video
}

// Initialize first image as active
slides[index].classList.add("active");
