export function carousel() {
  const carouselContainer = document.querySelector(".carousel-container");
  const carousel = document.querySelector(".carousel");
  const card = document.querySelector(".carousel-card");
  const prevButton = document.querySelector("#prev-btn");
  const nextButton = document.querySelector("#next-btn");
  const cardWidth = (card.clientWidth + 40) * 2;
  const carouselWidth = carousel.clientWidth;
  console.log(carouselWidth);
  nextButton.addEventListener("click", () => {
    // const cardWidth = card.clientWidth + 40;
    carouselContainer.scrollLeft += cardWidth;
    console.log(cardWidth);
  });

  prevButton.addEventListener("click", () => {
    // const cardWidth = card.clientWidth;
    carouselContainer.scrollLeft -= cardWidth;
    console.log(cardWidth);
  });
}
