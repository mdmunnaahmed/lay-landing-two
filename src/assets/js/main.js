"user strict";

// slider 
let slideIndex1 = 1;
let slideIndex2 = 1;

// Function to change slides
function changeSlide(sliderNum, n) {
  if (sliderNum === 1) {
    showSlide(1, slideIndex1 += n);
  } else {
    showSlide(2, slideIndex2 += n);
  }
}

// Function to set the current slide
function setCurrentSlide(sliderNum, n) {
  if (sliderNum === 1) {
    showSlide(1, slideIndex1 = n);
  } else {
    showSlide(2, slideIndex2 = n);
  }
}

// Function to show slides
function showSlide(sliderNum, n) {
  let slides, thumbnails;

  if (sliderNum === 1) {
    slides = document.querySelectorAll('.slider-1 .slides');
    thumbnails = document.querySelectorAll('.slider-1 .thumbnail');
  } else {
    slides = document.querySelectorAll('.slider-2 .slides');
    thumbnails = document.querySelectorAll('.slider-2 .thumbnail');
  }

  if (n > slides.length) { n = 1; }
  if (n < 1) { n = slides.length; }

  slides.forEach(slide => slide.classList.remove('active'));
  thumbnails.forEach(thumb => thumb.classList.remove('active-thumbnail'));

  slides[n - 1].classList.add('active');
  // thumbnails[n - 1].classList.add('active-thumbnail');
}

// Initialize the sliders
showSlide(1, slideIndex1);
showSlide(2, slideIndex2);



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