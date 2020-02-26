
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

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

//swamps style sheet


function changeBG(n){
  if(n==1){
    document.getElementById("pagestyle").setAttribute("href", "sportSty.css")
  }else if(n==2){
    document.getElementById("pagestyle").setAttribute("href", "sportSty2.css")
  }else if(n==0){
    document.getElementById("pagestyle").setAttribute("href", "sportSty4.css")
  }else if(n==5){
    document.getElementById("pagestyle").setAttribute("href", "sportSty.css")
  }else if(n==3){
    document.getElementById("pagestyle").setAttribute("href", "sportSty3.css")
  }
  else{
    document.getElementById("pagestyle").setAttribute("href", "sportSty4.css")
  }
}