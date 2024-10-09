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
        //   var activeContent = activeItem.querySelector(".faq-content");
        //   activeContent.classList = "open";
          activeItem.classList.remove("active");
        });

        // Open this item
        content.style.height = content.scrollHeight + "px";
        item.classList.add("active");
      }
    });
  });
});