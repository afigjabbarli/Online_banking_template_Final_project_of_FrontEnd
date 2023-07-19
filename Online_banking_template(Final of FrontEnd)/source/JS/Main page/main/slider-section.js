


var intervalValue;
var setInputValue;


const nextButton = document.querySelector("#Right-button");
nextButton.addEventListener("click", function(){
  nextSlide()
})
const previousButton = document.querySelector("#Left-button");
previousButton.addEventListener("click", function(){
  previousSlide()
})
var slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  var slides = document.getElementsByClassName("slides");
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "flex";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
// autoPlay.addEventListener("click", function(){
//   intervalValue = setInterval(function() {
//     nextSlide();
//   }, setInputValue);
// })
// stopAutoPlay.addEventListener("click", function(){
//   clearInterval(intervalValue);
// })

  