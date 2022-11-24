import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlAllPosts } from "../module/urls.js";
import { urlFirstPosts } from "../module/urls.js";
import { urlHomePage } from "../module/urls.js";

const posts = await makeApiCalls(urlFirstPosts);
async function writePosts() {
  cardInnerHtml(posts[0], "all");
  // "all" adds correct classes (reusing function)
}
writePosts();
const allPosts = await makeApiCalls(urlAllPosts);
const selectContainer = document.querySelector(`.all-cards-container`);
const displayAll = document.getElementById("display-all");
displayAll.addEventListener("click", (event) => {
  async function writePosts() {
    selectContainer.innerHTML = "";
    cardInnerHtml(allPosts[0], "all");
  }
  writePosts();
});
