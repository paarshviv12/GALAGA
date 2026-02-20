document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0;
    const intervalTime = 5000;
    let slideTimer = setInterval(nextSlide, intervalTime);

    function showSlide(index) {
      if (index < 0 || index >= slides.length) return;

      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (dots[i]) dots[i].classList.remove("active");
      });

      slides[index].classList.add("active");
      dots[index].classList.add("active");

      currentSlide = index;
    }

    function nextSlide() {
      let next = currentSlide + 1;
      if (next >= slides.length) next = 0;
      showSlide(next);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, intervalTime);
      });
    });
  }

  // Size Selector Logic
  const sizeBtns = document.querySelectorAll(".size-btn");
  sizeBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      sizeBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
