export function carousel() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  let width = carousel.clientWidth - 120;

  nextButton.addEventListener("click", () => {
    carouselContainer.scrollLeft += width;
  });

  prevButton.addEventListener("click", () => {
    carouselContainer.scrollLeft -= width;
  });
}
