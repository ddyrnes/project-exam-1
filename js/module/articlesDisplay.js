export function articlesDisplay() {
  const displayAllButton = document.querySelector(".display-all-button");
  const displayHeader = document.querySelector(".all-articles");
  const categoryRadio = document.querySelector(".category-radio");
  displayAllButton.style.display = "flex";
  displayHeader.style.display = "flex";
  categoryRadio.style.display = "flex";
}
