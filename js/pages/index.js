import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlHomePage } from "../module/urls.js";
import { carousel } from "../module/carousel.js";
import { errorHandler } from "../module/errorHandler.js";

const loader = document.querySelector(".loader");
const carouselSection = document.querySelector(".carousel-section");
const categorySection = document.querySelector(".category-section");

async function writePosts() {
  const { data, error } = await makeApiCalls(urlHomePage);
  if (error) {
    return errorHandler(error);
  }
  cardInnerHtml(data[0], "carousel");
  cardInnerHtml(data[1], "review");
  cardInnerHtml(data[2], "tutorial");
  cardInnerHtml(data[3], "news");
  loader.style.display = "none";
  categorySection.style.display = "flex";
  carouselSection.style.display = "flex";
  // "text" adds correct classes to pair with the posts categories
  carousel();
}
writePosts();

window.onresize = function () {
  carousel();
};
