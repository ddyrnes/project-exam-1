// const carouselContainer = document.querySelectorAll(".carousel-container");
// const prevBtn = document.querySelectorAll(".prev-btn");
// const nextBtn = document.querySelectorAll(".next-btn");

// carouselContainer.forEach((item) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nextBtn.addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });

//   prevBtn.addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//   });
// });
export function carousel() {
  const slidesContainer = document.getElementById("carousel-container");
  const slide = document.querySelector(".carousel-card");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  });

  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });
}
// need fixing/altering
