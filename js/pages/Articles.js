import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlAllPosts } from "../module/urls.js";
import { urlFirstPosts } from "../module/urls.js";
import { urlHomePage } from "../module/urls.js";
import { filterCategories } from "../module/categoryfilter.js";
import { errorHandler } from "../module/errorHandler.js";

const loader = document.querySelector(".loader");
const displayAllButton = document.querySelector(".display-all-button");
const displayHeader = document.querySelector(".all-articles");
const categoryRadio = document.querySelector(".category-radio");

async function writePost() {
  const { data, error } = await makeApiCalls(urlFirstPosts);

  if (error) {
    return errorHandler(error);
  }
  cardInnerHtml(data[0], "all");
  loader.style.display = "none";
  displayAllButton.style.display = "flex";
  displayHeader.style.display = "flex";
  categoryRadio.style.display = "flex";
  filterCategories();
}
writePost();

const selectContainer = document.querySelector(`.all-cards-container`);
const displayAll = document.getElementById("display-all");
displayAll.addEventListener("click", (event) => {
  async function writePosts() {
    const { data, error } = await makeApiCalls(urlAllPosts);
    if (error) {
      return errorHandler(error);
    }
    selectContainer.innerHTML = "";
    cardInnerHtml(data[0], "all");
    displayAllButton.style.display = "none";
    filterCategories();
  }
  writePosts();
});
