//for nav

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//for slideshow

var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  changeBG(n);
}

function changeBG(n){
  if(n==1){
    document.getElementById("pagestyles").setAttribute("href", "smartSty.css")
  }else if(n==2){
    document.getElementById("pagestyles").setAttribute("href", "smartSty2.css")
  }else if(n==3){
    document.getElementById("pagestyles").setAttribute("href", "smartSty3.css")
  }else{
    document.getElementById("pagestyles").setAttribute("href", "smartSty4.css")
  }
}