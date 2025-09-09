document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('carouselProfile');
  var prevBtn = carousel.querySelector('.carousel-control-prev');
  var nextBtn = carousel.querySelector('.carousel-control-next');
  var items = carousel.querySelectorAll('.carousel-item--profile');

  function updateArrows() {
    var activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    prevBtn.style.display = (activeIndex === 0) ? 'none' : '';
    nextBtn.style.display = (activeIndex === items.length - 1) ? 'none' : '';
  }

  carousel.addEventListener('slid.bs.carousel', updateArrows);
  updateArrows();
});