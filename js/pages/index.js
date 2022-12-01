import { cardInnerHtml } from "../module/cardInnerHtml.js";
import { makeApiCalls } from "../module/api.js";
import { urlHomePage } from "../module/urls.js";
import { carousel } from "../module/carousel.js";
import { errorHandler } from "../module/errorHandler.js";
import { removeLoader } from "../module/removeLoader.js";
import { indexDisplay } from "../module/indexDisplay.js";

const categoryNames = ["carousel", "review", "tutorial", "news"];

async function writePosts() {
  const { data, error } = await makeApiCalls(urlHomePage);
  if (error) {
    return errorHandler(error);
  }
  categoryNames.map((categoryNames, index) => cardInnerHtml(data[index], categoryNames));
  removeLoader();
  indexDisplay();
  carousel();
}
writePosts();

window.onresize = function () {
  carousel();
};
