import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlAllPosts } from "../module/urls.js";
import { urlFirstPosts } from "../module/urls.js";
import { urlHomePage } from "../module/urls.js";

const posts = await makeApiCalls(urlFirstPosts);
async function writePosts(item) {
  cardInnerHtml(item[0], "all");
  // "all" adds correct classes (reusing function)
}
writePosts(posts);
const allPosts = await makeApiCalls(urlAllPosts);
const selectContainer = document.querySelector(`.all-cards-container`);
const displayAll = document.getElementById("display-all");
displayAll.addEventListener("click", () => {
  async function writePosts(item) {
    selectContainer.innerHTML = "";
    cardInnerHtml(item[0], "all");
  }
  writePosts(allPosts);
});
