export function cardInnerHtml(apiResults, review) {
  for (let i = 0; i < apiResults.length; i++) {
    if (arguments[2] == apiResults[i].id) {
      continue;
    }
    if (document.querySelectorAll(".related-cards-container a").length > 2) {
      continue;
    } else {
      let newDate = new Date(apiResults[i].date);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let date = newDate.getDate();
      if (date < 10) {
        date = "0" + date;
      }
      if (month < 10) {
        month = "0" + month;
      }
      let selectContainer = document.querySelector(`.${arguments[1]}-cards-container`);
      selectContainer.innerHTML += `
          <a href="specific-article.html?id=${apiResults[i].id}" class="card flex-col carousel-card"data-category="${
        apiResults[i]._embedded["wp:term"][0][0].name
      }" >
          <img src="${apiResults[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="">
          <div class="card-category ${apiResults[i]._embedded["wp:term"][0][0].name}"><p>${
        apiResults[i]._embedded["wp:term"][0][0].name
      }
          </p></div>
          <div class="card-text flex-col">
          <h2>${apiResults[i].title.rendered}</h2>
          <div class="card-short-summary">${apiResults[i].excerpt.rendered}</div>
          <div class="card-info flex-row">
          <div>
          <p class="card-author">By ${apiResults[i]._embedded.author[0].name}</p><p class="card-author"> ${
        year + "-" + month + "-" + date
      }</p>
          </div>
          <div class="card-link">Read More</div>
          </div>
          </div>
          </a>
          `;
    }
  }
}
