import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlAllPosts } from "../module/urls.js";
import { urlFirstPosts } from "../module/urls.js";
import { urlHomePage } from "../module/urls.js";

let loader = document.querySelector(".loader");
let displayAllButton = document.querySelector(".display-all-button");
let displayHeader = document.querySelector(".all-articles");

const posts = await makeApiCalls(urlFirstPosts);
async function writePosts() {
  cardInnerHtml(posts[0], "all");
  loader.style.display = "none";
  displayAllButton.style.display = "flex";
  displayHeader.style.display = "flex";
}
writePosts();
const allPosts = await makeApiCalls(urlAllPosts);
const selectContainer = document.querySelector(`.all-cards-container`);
const displayAll = document.getElementById("display-all");
displayAll.addEventListener("click", (event) => {
  async function writePosts() {
    selectContainer.innerHTML = "";
    cardInnerHtml(allPosts[0], "all");
    displayAllButton.style.display = "none";
  }
  writePosts();
});
