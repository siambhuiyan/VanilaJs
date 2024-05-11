const slide = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slide.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carosole();
});

prevBtn.addEventListener("click", () => {
  counter--;
  carosole();
});

function carosole() {
  if (counter === slide.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slide.length - 1;
  }
  if (counter < slide.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slide.forEach((slides) => {
    slides.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";
