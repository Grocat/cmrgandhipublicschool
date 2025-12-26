
document.addEventListener("DOMContentLoaded", function () {

  const questions = document.querySelectorAll(
    ".new_seo_faq_loop .new_fquestion"
  );

  questions.forEach((question) => {
    question.addEventListener("click", function () {

      const parent = this.closest(".new_seo_faq_loop");
      const isActive = parent.classList.contains("new_active");

      // Close all FAQs
      document.querySelectorAll(".new_seo_faq_loop").forEach((item) => {
        item.classList.remove("new_active");
        const answer = item.querySelector("[itemprop='acceptedAnswer']");
        if (answer) answer.style.display = "none";
      });

      // Toggle current FAQ
      if (!isActive) {
        parent.classList.add("new_active");
        const answer = parent.querySelector("[itemprop='acceptedAnswer']");
        if (answer) answer.style.display = "block";
      }
    });
  });

});


jQuery(document).ready(function ($) {

  const videoCarousel = $('.parents-video-carousel');
  const textCarousel = $('.parents-text-carousel');

  videoCarousel.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 600
  });

  textCarousel.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 600
  });

  /* Sync both carousels */
  videoCarousel.on('changed.owl.carousel', function (e) {
    textCarousel.trigger('to.owl.carousel', [e.item.index, 600, true]);
  });

  textCarousel.on('changed.owl.carousel', function (e) {
    videoCarousel.trigger('to.owl.carousel', [e.item.index, 600, true]);
  });

});

// Owl Carousel initializations
$(document).ready(function () {
  $('.brand-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: "linear",
    autoHeight: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    autoplaySpeed: 3000,
    navText: false,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 4 }
    }
  });

});