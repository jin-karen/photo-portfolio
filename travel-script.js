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

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let demo = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    // sets slide index back to 1 once you pass the last image to restart carousel (for next arrow)
    if (n > slides.length) {slideIndex = 1}
    // will take you to last image in carousel if you went back one from first (for prev arrow)
    if (n < 1) {slideIndex = slides.length}
    // sets all slides to be not visible (so we can later set one visible)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // set all images in gallery to be inactive - not fully opaque
    for (i = 0; i < demo.length; i++) {
        demo[i].className = demo[i].className.replace(" active", "");
    }
    // displays chosen slide in carousel, makes gallery image opaque, shows corresponding caption
    // slides[slideIndex-2].style.display = "inline-block";
    // slides[slideIndex-1].style.display = "inline-block";
    // slides[slideIndex].style.display = "inline-block";
    // demo[slideIndex-1].className += " active";
    // captionText.innerHTML = demo[slideIndex-1].alt;
    slides[slideIndex-1].style.display = "block";
    demo[slideIndex-1].className += " active";
    captionText.innerHTML = demo[slideIndex-1].alt;
}