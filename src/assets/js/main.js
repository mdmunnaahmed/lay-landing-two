"user strict";

// slider 
let slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function setCurrentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.querySelectorAll(".slides");
  let thumbnails = document.querySelectorAll(".thumbnail");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  slides.forEach(slide => slide.classList.remove("active"));
  thumbnails.forEach(thumb => thumb.classList.remove("active-thumbnail"));

  slides[slideIndex - 1].classList.add("active");
  thumbnails[slideIndex - 1].classList.add("active-thumbnail");
}


// time count down
function startCountdown(duration) {
  let timer = duration, hours, minutes, seconds;
  setInterval(function() {
    hours = Math.floor((timer / 3600) % 24);
    minutes = Math.floor((timer / 60) % 60);
    seconds = Math.floor(timer % 60);

    document.getElementById('hours').textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? "0" + seconds : seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// Set countdown duration (e.g., 12 hours = 43200 seconds)
const countdownDuration = 12 * 60 * 60; // Example: 12 hours
startCountdown(countdownDuration);


// faq add class remove class
document.addEventListener("DOMContentLoaded", function () {
  var faqTitles = document.querySelectorAll(".faq-title");

  faqTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      var item = this.parentNode;
      var content = item.querySelector(".faq-content");

      if (item.classList.contains("active")) {
        // Close the item
        content.style.height = "0";
        item.classList.remove("active");
      } else {
        // Close other open items
        document.querySelectorAll(".faq-item.active").forEach(function (activeItem) {
          var activeContent = activeItem.querySelector(".faq-content");
          activeContent.style.height = "0";
          activeItem.classList.remove("active");
        });

        // Open this item
        content.style.height = content.scrollHeight + "px";
        item.classList.add("active");
      }
    });
  });
});