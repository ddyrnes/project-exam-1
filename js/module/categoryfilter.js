export function filterCategories() {
  const buttons = document.querySelectorAll(`input[name="categoryButton"]`);
  const allCards = document.querySelectorAll(".all-cards-container a");

  function checkRadioSelection() {
    buttons.forEach((e) => {
      if (e.checked) {
        displayCards(e.value);
      }
    });
  }
  checkRadioSelection();
  // Keeps current category checked if user clicks "View More" to load all posts

  buttons.forEach((e) => {
    e.addEventListener("input", function (event) {
      const categoryName = event.target.value;
      displayCards(categoryName);
    });
  });

  function displayCards(category) {
    allCards.forEach((e) => {
      e.style.display = "none";
      if (e.dataset.category === category) {
        e.style.display = "flex";
      }
      if (category === "All") {
        e.style.display = "flex";
      }
    });
  }
}
