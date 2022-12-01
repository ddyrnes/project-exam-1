export function filterCategories() {
  const buttons = document.querySelectorAll(`input[name="categoryButton"]`);
  const allCards = document.querySelectorAll(".all-cards-container a");

  if (document.getElementById("radioAll").checked) {
    let category = "All";
    displayCards(category);
  } else if (document.getElementById("radioNews").checked) {
    let category = "News";
    displayCards(category);
  } else if (document.getElementById("radioReviews").checked) {
    let category = "Review";
    displayCards(category);
  } else if (document.getElementById("radioTutorials").checked) {
    let category = "Tutorial";
    displayCards(category);
  }

  buttons.forEach((e) => {
    e.addEventListener("input", function (event) {
      const categoryName = event.target.value;
      displayCards(categoryName);
    });
  });
  // buttons.forEach((e) => {
  //   e.addEventListener("change", function (event) {
  //     let item = event.target.value;
  //     if (item == "News") {
  //       let category = "News";
  //       displayCards(category);
  //     } else if (item == "Reviews") {
  //       let category = "Review";
  //       displayCards(category);
  //     } else if (item == "Tutorials") {
  //       let category = "Tutorial";
  //       displayCards(category);
  //     } else if (item == "All") {
  //       let category = "All";
  //       displayCards(category);
  //     }
  //   });
  // });

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
