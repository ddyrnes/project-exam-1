export function filterCategories() {
  const allButton = document.getElementsByClassName("filter-all");
  const newsButton = document.getElementById("filter-news");
  const reviewButton = document.getElementsByClassName("filter-review");
  const tutorialButton = document.getElementsByClassName("filter-tutorial");

  const newsCard = document.querySelectorAll(".News");
  const reviewCard = document.querySelectorAll(".Review");
  const tutorialCard = document.querySelectorAll(".Tutorial");
  console.log(newsButton);
  const test = document.querySelectorAll(".all-cards-container a");
  // console.log(test.dataset.category);
  console.log(test);
  // const test2 = test.getAttribute("data.category");
  // console.log(test2);
  // newsCard.forEach(myFunction);

  // function myFunction() {
  //   newsCard.innerText = "";
  // }
  // myFunction();
  test.forEach((e) => {
    // console.log(e.dataset.category);
    // console.log(e.dataset.category);
    console.log(e);
    newsButton.addEventListener("click", function () {
      console.log("Robin er gay");
      if (e.dataset.category === "Tutorial") {
        e.style.display = "none";
      }
    });
  });
}
// QUERYSELECT ALL BUTTONS - TARGET BUTTON AND MATCH WITH CATEGORY BUTTON - LESS CODE
