import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlAllPosts } from "../module/urls.js";
import { urlFirstPosts } from "../module/urls.js";
import { urlHomePage } from "../module/urls.js";
import { filterCategories } from "../module/categoryfilter.js";
import { errorHandler } from "../module/errorHandler.js";
import { removeLoader } from "../module/removeLoader.js";
import { articlesDisplay } from "../module/articlesDisplay.js";

const displayAllButton = document.querySelector(".display-all-button");
displayAllButton.style.display = "flex";

async function writePost() {
  const { data, error } = await makeApiCalls(urlFirstPosts);

  if (error) {
    return errorHandler(error);
  }
  cardInnerHtml(data[0], "all");
  removeLoader();
  articlesDisplay();
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
