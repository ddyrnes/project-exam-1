import { specificUrl } from "../module/urls.js";
import { createSpecificArticle } from "../module/createSpecificArticle.js";
import { modal } from "../module/modal.js";
import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { makeApiCall } from "../module/api.js";
import { urlSpecificPage } from "../module/urls.js";
import { errorHandler } from "../module/errorHandler.js";
const loader = document.querySelector(".loader");
const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const newUrl = specificUrl + id + "?_embed";
let categoryNumber;
const articleContainer = document.querySelector(".article-container");
const asideContainer = document.querySelector(".related-articles");
articleContainer.style.display = "none";
asideContainer.style.display = "none";

async function writePost() {
  const { data, error } = await makeApiCall(newUrl);
  if (error) {
    console.log("Error");
    errorHandler(error);
  }
  createSpecificArticle(data);
  if (data.categories[0] === 17) {
    return (categoryNumber = 1);
  } else if (data.categories[0] === 18) {
    return (categoryNumber = 2);
  } else if (data.categories[0] === 19) {
    return (categoryNumber = 3);
  }
  // Returns correct category number for <aside> "Related Articles" section
}
async function writePosts() {
  const { data, error } = await makeApiCalls(urlSpecificPage);
  if (error) {
    errorHandler(error);
  }
  cardInnerHtml(data[`${categoryNumber}`], "related", id);
  modal();
}

async function setupPage() {
  await writePost();
  await writePosts();
  loader.style.display = "none";
  articleContainer.style.display = "block";
  asideContainer.style.display = "flex";
}
setupPage();
