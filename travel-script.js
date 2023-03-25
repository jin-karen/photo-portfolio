// initiates the slideshow on image 1 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// controls which image is displayed as active in slideshow and demo
// reveals previous and next image on the sides (partially transparent)
function showSlides(n) {
    // defines the indices for the three visible slideshow images
    let prevSlide = slideIndex-2;
    let mainSlide = slideIndex - 1;
    let nextSlide = slideIndex;
    let slides = document.getElementsByClassName("mySlides");
    let demo = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    // sets slide index back to 1 once you pass the last image to restart carousel (for next arrow)
    if (n > slides.length) {
        slideIndex = 1;
        mainSlide = 0;
        nextSlide = 1;
    }
    // will take you to last image in carousel if you went back one from first (for prev arrow)
    if (n < 1) {
        slideIndex = slides.length
        prevSlide = slides.length-2;
        mainSlide = slides.length-1;
    }
    // displays first image as next image for last image in slideshow (stationary)
    if (n == slides.length) {nextSlide = 0;}      
    //displays last image as previous image for first image in slideshow (stationary)
    if (n == 1) {prevSlide = slides.length-1;}
    // sets all slides to be not visible (so we can later set one visible)
    // removes opaqueness from all slides and slideshow classes for three visible images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" active", "");
        slides[i].className = slides[i].className.replace(/( prevSlide| mainSlide| nextSlide)/g, "");
    }
    // set all images in gallery to be inactive - not fully opaque
    for (let i = 0; i < demo.length; i++) {
        demo[i].className = demo[i].className.replace(" active", "");
        
    }
    // displays chosen slide in carousel, makes slideshow image and gallery image opaque, shows corresponding caption
    slides[prevSlide].classList.toggle("prevSlide");
    slides[mainSlide].classList.toggle("mainSlide");
    slides[nextSlide].classList.toggle("nextSlide");
    slides[prevSlide].style.display = "block";
    slides[mainSlide].style.display = "block";
    slides[nextSlide].style.display = "block";
    slides[mainSlide].classList.toggle("active")
    demo[mainSlide].classList.toggle("active")
    captionText.innerHTML = demo[mainSlide].alt;
}

