const plainUrl = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=3&categories=17&`;
const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
const url = `${plainUrl}consumer_key=${key}&consumer_secret=${secret}`;
// Categories:
// News = 19
// Tutorials = 18
// Reviews = 17

const selectContainer = document.querySelector(".cards-container");

export function newUrl() {
  const baseUrl = `https://api.dd2.no/wp-json/wp/v2/posts?_embed`;
  let postPerPage = `&per_page=${arguments[0]}`;
  if (arguments[1]) {
    let category = `&categories=${arguments[1]}`;
    return (newUrl = baseUrl + postPerPage + category);
  } else {
    return (newUrl = baseUrl + postPerPage);
  }
}
newUrl(3, 19);
console.log(newUrl);
// First number = number of posts
// Second number = category number:
// News = 19, Tutorials = 18, Reviews = 17

async function getPosts(newUrl) {
  try {
    const response = await fetch(newUrl);
    const posts = await response.json();
    for (let i = 0; i < posts.length; i++) {
      // if (i >= 5) {
      //   break;
      // } else {
      let newDate = new Date(posts[i].date);
      let year = newDate.getFullYear();
      let month = newDate.getMonth() + 1;
      let date = newDate.getDate();

      if (date < 10) {
        date = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }
      selectContainer.innerHTML += `
        <a href+"${posts[i].id}" class="card flex-col">
        <img src="${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="">
        <div class="card-category ${posts[i]._embedded["wp:term"][0][0].name}"><p>${
        posts[i]._embedded["wp:term"][0][0].name
      }
        </p></div>
        <div class="card-text flex-col">
        <h2>${posts[i].title.rendered}</h2>
        <div class="card-short-summary">${posts[i].excerpt.rendered}</div>
        <div class="card-info flex-row">
        <div>
        <p>By ${posts[i]._embedded.author[0].name}</p><p> ${year + "-" + month + "-" + date}</p>
        </div>
        <div class="card-link">Read More</div>
        </div>
        </div>
        </a>
        `;

      // selectContainer.innerHTML += posts[i].content.rendered;
      // console.log(posts[i]);
      // console.log(posts[i]._embedded.author[0].name);
      // console.log(posts[i]._embedded);
      // console.log(posts[i]._embedded["wp:term"][0][0].name);
      // console.log(posts[i].slug);
      // console.log(posts[i]._embedded["wp:featuredmedia"]["0"].source_url);
      // console.log(posts[i]);
      // console.log(posts[i].title.rendered);
      // console.log(posts[i].excerpt.rendered);

      continue;
    }
  } catch (error) {
    console.log(error);
  }
}
getPosts(newUrl);

// const baseUrl = `https://api.dd2.no/wp-json/wp/v2/posts?_embed`;
// const categoryNews = `&categories=19`;
// const categoryTutorials = `&categories=18`;
// const categoryReviews = `&categories=17`;
// const postPerPage = `&per_page=`;
// const totalPosts = 0;
// // let newUrl = baseUrl + categoryNews + postPerPage + 3;
// function makeUrl(baseUrl, categoryNews, postPerPage, totalPosts) {
//   let newUrl = baseUrl + categoryNews + postPerPage + totalPosts;
//   return newUrl;
// }
// newUrl()

// const baseUrl = `https://api.dd2.no/wp-json/wp/v2/posts?_embed`;
// const categoryNews = `&categories=19`;
// const categoryTutorials = `&categories=18`;
// const categoryReviews = `&categories=17`;
// const postPerPage = `&per_page=`;
// const totalPosts = 0;
// // let newUrl = baseUrl + categoryNews + postPerPage + 3;
// function url ()

// // News = 19
// // Tutorials = 18
// // Reviews = 17

// async function getPost() {
//   const response = await fetch(url);
//   const posts = await response.json();
//   for (let i = 0; i < posts.length; i++) {
//     console.log(posts[i].id);
//   }
// }
// getPost(newUrl);

// console.log(newUrl);
