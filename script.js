// Script for navigation bar
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;
let interval;

// تحديث عرض الصور
function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
    // console.log(index, currentIndex);
  });
}

// الانتقال للصورة التالية
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

// الانتقال للصورة السابقة
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

// تشغيل التبديل التلقائي
function startAutoSlide() {
  interval = setInterval(nextSlide, 10000); // يبدل كل 3 ثواني
}

// إيقاف التبديل التلقائي عند الضغط على زر
function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

// ربط الأزرار بالأحداث
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// تشغيل السلايدر لأول مرة
updateSlides();
startAutoSlide();


document.querySelectorAll(".product-slider-container").forEach(container => {
  const slider = container.querySelector(".product-slider");
  const prevProBtn = container.querySelector("#prevProduct");
  const nextProBtn = container.querySelector("#nextProduct");

  prevProBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -220, behavior: "smooth" });
  });

  nextProBtn.addEventListener("click", () => {
      slider.scrollBy({ left: 220, behavior: "smooth" });
  });

  // دعم السحب بالماوس والتاتش
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
  });
});



const btnTop = document.getElementById("top");
btnTop.addEventListener("click", (e) => {
  window.scrollTo({top:0,behavior:"smooth"})
})