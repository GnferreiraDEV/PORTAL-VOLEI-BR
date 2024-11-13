let carrosel = 0;

Slides();

function Slides() {

  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  carrosel++;

  if (carrosel > slides.length) {carrosel = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[carrosel-1].style.display = "block";  
  dots[carrosel-1].className += " active";
  setTimeout(Slides, 5000); 
}