/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("openbtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("openbtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openModal(){
    document.getElementById('myModal').style.display = "block";
    document.getElementById('openbtn').style.display = "none";
    document.getElementById('myBtn').style.display = "none";

}


function closeModal() { 
    document.getElementById('myModal').style.display = "none";
    document.getElementById('openbtn').style.display = "block";
    document.getElementById('myBtn').style.display = "block";


}

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  slides = document.getElementsByClassName("mySlides");
  if (n >  document.getElementsByClassName("mySlides").length) {slideIndex = 1} 
  if (n < 1) {slideIndex = document.getElementsByClassName("mySlides").length}
  for (i = 0; i <  document.getElementsByClassName("mySlides").length; i++) {
    document.getElementsByClassName("mySlides")[i].style.display = "none"; 
  }
  for (i = 0; i < document.getElementsByClassName("dot").length; i++) {
    document.getElementsByClassName("dot")[i].className = document.getElementsByClassName("dot")[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  document.getElementsByClassName("dot")[slideIndex-1].className += " active";
}