import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlHomePage } from "../module/urls.js";
import { carousel } from "../module/carousel.js";
import { errorHandler } from "../module/errorHandler.js";
import { removeLoader } from "../module/removeLoader.js";
import { indexDisplay } from "../module/indexDisplay.js";

// const labels = ["carousel", "review", "tutorial", "news"];
// console.log(labels);
async function writePosts() {
  const { data, error } = await makeApiCalls(urlHomePage);
  if (error) {
    return errorHandler(error);
  }
  console.log(data);
  cardInnerHtml(data[0], "carousel");
  cardInnerHtml(data[1], "review");
  cardInnerHtml(data[2], "tutorial");
  cardInnerHtml(data[3], "news");
  removeLoader();
  indexDisplay();
  // "text" adds correct classes to pair with the posts categories
  carousel();
}
writePosts();

window.onresize = function () {
  carousel();
};
