let slideIndex = 1;
slideShow(slideIndex);

function nextSlides(n) {
    slideShow(slideIndex += n);
}

function currentSlide(n) {
    slideShow(slideIndex = n);
}

function slideShow(n) {
  let i;
  let slides = document.getElementsByClassName("Slides");
  let imgopct = document.getElementsByClassName("img-opacity");
  if (n > slides.length) {slideIndex = 1}  
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  /*slideIndex++;*/
  if (slideIndex > slides.length) {slideIndex = 1}  
  for (i = 0; i < imgopct.length; i++) {
    imgopct[i].className = imgopct[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  imgopct[slideIndex-1].className += " active";
  /*setTimeout(slideShow, 3000);*/
}
