export async function createSpecificArticle(data) {
  const articleHeader = document.querySelector(".specific-article-header");
  const articleContent = document.querySelector(".specific-article");
  let newDate = new Date(data.date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let date = newDate.getDate();
  if (date < 10) {
    date = "0" + date;
  }
  if (month < 10) {
    month = "0" + month;
  }
  articleHeader.innerHTML = `
      <h1>${data.title.rendered}</h1>
      <div class="category-title">${data._embedded["wp:term"][0][0].name}</div>
      <p>By ${data._embedded.author[0].name} | ${year + "-" + month + "-" + date}</p>
      `;
  articleContent.innerHTML = data.content.rendered;
}
