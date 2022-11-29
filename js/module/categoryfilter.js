export function filterCategories() {
  // const allButton = document.getElementsByClassName("filter-all");
  const allButton = document.getElementById("radioAll");
  const newsButton = document.getElementById("radioNews");
  const reviewsButton = document.getElementById("radioReviews");
  const tutorialsButton = document.getElementById("radioTutorials");

  const buttons = document.querySelectorAll(`input[name="categoryButton"]`);
  // const reviewButton = document.getElementsByClassName("filter-review");
  // const tutorialButton = document.getElementsByClassName("filter-tutorial");
  // const buttons = document.querySelectorAll("");

  const newsCard = document.querySelectorAll(".News");
  const reviewCard = document.querySelectorAll(".Review");
  const tutorialCard = document.querySelectorAll(".Tutorial");
  console.log(buttons);
  const allCards = document.querySelectorAll(".all-cards-container a");
  // console.log(test.dataset.category);
  // console.log(test);
  // const test2 = test.getAttribute("data.category");
  // console.log(test2);
  // newsCard.forEach(myFunction);

  // function myFunction() {
  //   newsCard.innerText = "";
  // }
  // myFunction();
  // if ((newsButton.checked = true)) {
  //   console.log("Hello");
  // }
  // if ((allButton.checked = true)) {
  //   console.log("No");
  // }
  buttons.forEach((e) => {
    e.addEventListener("change", function (event) {
      let item = event.target.value;
      if (item == "News") {
        let category = "News";
        console.log(category);
        displayCards(category);
      }
      if (item == "Reviews") {
        let category = "Reviews";
        console.log(category);
        displayCards(category);
      }
      if (item == "Tutorials") {
        let category = "Tutorials";
        console.log(category);
        displayCards(category);
      }
      if (item == "All") {
        let category = "All";
        console.log(category);
        displayCards(category);
      }
    });
  });
}
// console.log(allCards);
// let filteredCards = allCards.filter(function (e) {
//   console.log(test);
// });

// function displayCards(category) {
//   console.log(category);
//   test.filter((element) => {});
// }

// function displayCards(category) {
//   console.log(category);

//   test.forEach((e) => {
//     e.style.display = "flex";
//     if (e.dataset.category === category) {
//       e.style.display = "none";
//     }
//   });
// }

// test.forEach((e) => {
//   // console.log(e.dataset.category);
//   // console.log(e.dataset.category);
//   console.log(e);
//   newsButton.addEventListener("click", function () {
//     console.log("Robin er gay");
//     if (e.dataset.category === "Tutorial") {
//       e.style.display = "none";
//     }
//   });
// });

// QUERYSELECT ALL BUTTONS - TARGET BUTTON AND MATCH WITH CATEGORY BUTTON - LESS CODE
