import { specificUrl } from "../module/urls.js";
import { createSpecificArticle } from "../module/createSpecificArticle.js";
import { modal } from "../module/modal.js";
import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlSpecificPage } from "../module/urls.js";
const loader = document.querySelector(".loader");
const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const newUrl = specificUrl + id + "?_embed";
let categoryNumber;

async function makeApiCall() {
  try {
    const response = await fetch(newUrl);
    const data = await response.json();
    createSpecificArticle(data);
    loader.style.display = "none";
    if (data.categories[0] === 17) {
      return (categoryNumber = 1);
    }
    if (data.categories[0] === 18) {
      return (categoryNumber = 2);
    }
    if (data.categories[0] === 19) {
      return (categoryNumber = 3);
    }
  } catch (error) {
    console.log(error);
  }
}
makeApiCall();

const posts = await makeApiCalls(urlSpecificPage);
async function writePosts() {
  document.querySelector(".related-cards-container h3").innerHTML = "Related Articles";
  cardInnerHtml(posts[`${categoryNumber}`], "related", id);
  modal();
}

writePosts();
