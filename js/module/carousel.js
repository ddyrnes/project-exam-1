export function carousel() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carousel = document.querySelector(".carousel");
  const card = document.querySelector(".carousel-card");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  // const cardWidth = (card.clientWidth + 40) * 3;
  const width = carousel.clientWidth - 120;
  const carouselWidth = carousel.clientWidth;
  nextButton.addEventListener("click", () => {
    carouselContainer.scrollLeft += width;
  });

  prevButton.addEventListener("click", () => {
    carouselContainer.scrollLeft -= width;
  });
}
