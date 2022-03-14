let tally = document.getElementById("tally");
let x = document.getElementById("menu");
let closed = document.getElementById("closed");
let checkOut = document.getElementById("checkout");
let reciept = document.getElementById("reciept");
let total = document.getElementById("total");
let trolly = document.getElementById("trolly");
// ...............Navbar...............
function clicked() {
  x.style.display = "block";
}
function drop() {
  x.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//...............ADD TO CART.............
let count = 0;
let price = 125;
let tot = 125;
function Add() {
  count += 1;
  price *= count;
  reciept.innerHTML = "$125" + " " + " * " + count + "  ";
  total.innerHTML = "$" + price;
  tally.innerHTML = count;
  trolly.innerHTML = count;
}

function Minus() {
  count = count - 1;
  price = price - tot;
  tally.innerHTML = count;
  reciept.innerHTML = "$125" + " " + " * " + count + "  ";
  total.innerHTML = "$" + price;
  tally.innerHTML = count;
  trolly.innerHTML = count;
}

//...................Cart....................
function check() {
  document.getElementById("cart").addEventListener("click", function () {
    checkOut.style.display = "flex";
  });
}

function hiden() {
  document.getElementById("closed").addEventListener("click", function () {
    checkOut.style.display = "none";
  });
}

function plus() {
  document.getElementById("button").addEventListener("click", function () {
    checkOut.style.display = "flex";
  });
}

function remove() {
  count = 0;
  tally.innerHTML = count;
  trolly.innerHTML = count;
  checkOut.style.display = "none";
}
