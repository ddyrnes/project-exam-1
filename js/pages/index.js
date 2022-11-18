import { url } from "../module/api.js";
import { writeCard } from "../module/writecard.js";

Promise.all([
  fetch("https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=3"),
  fetch("https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=3&categories=17"),
  fetch("https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=3&categories=18"),
  fetch("https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=3&categories=19"),
])
  .then(function (results) {
    return Promise.all(
      results.map(function (result) {
        return result.json();
      })
    );
  })
  .then(function (apiResults) {
    let carousel = "carousel";
    let review = "review";
    let tutorial = "tutorial";
    let news = "news";
    writeCard(apiResults[0], carousel);
    writeCard(apiResults[1], review);
    writeCard(apiResults[2], tutorial);
    writeCard(apiResults[3], news);
  })
  .catch(function (error) {
    console.log(error);
  });

// for (let i = 0; i < posts.length; i++) {
//     let newDate = new Date(posts[i].date);
//     let year = newDate.getFullYear();
//     let month = newDate.getMonth() + 1;
//     let date = newDate.getDate();
//     if (date < 10) {
//       date = "0" + dt;
//     }
//     if (month < 10) {
//       month = "0" + month;
//     }

//       selectContainer.innerHTML += `
//         <a href="${data[0].id}" class="card flex-col">
//         <img src="${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="">
//         <div class="card-category ${posts[i]._embedded["wp:term"][0][0].name}"><p>${
//         posts[i]._embedded["wp:term"][0][0].name
//       }
// </p></div>
// <div class="card-text flex-col">
// <h2>${posts[i].title.rendered}</h2>
// <div class="card-short-summary">${posts[i].excerpt.rendered}</div>
// <div class="card-info flex-row">
// <div>
// <p>By ${posts[i]._embedded.author[0].name}</p><p> ${year + "-" + month + "-" + date}</p>
// </div>
// <div class="card-link">Read More</div>
// </div>
// </div>
// </a>
//         `;

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

// const nurl = `https://api.dd2.no/wp-json/wp/v2/categories`;
// async function getP(nurl) {
//   const response = await fetch(url);
//   const posts = await response.json();
//   console.log(posts);
// }
// getP(nurl);

// console.log(apiResults);
// apiResults.forEach(
//   (data) =>
//     (selectContainer.innerHTML += `
// <a href="${data.id}" class="card flex-col">
// <img src="${data[0]._embedded["wp:featuredmedia"]["0"].source_url}" alt="">
// <div class="card-category ${data[0]._embedded["wp:term"][0][0].name}"><p>${data[0]._embedded["wp:term"][0][0].name}
// </p></div>
// <div class="card-text flex-col">
// <h2>${data[0].title.rendered}</h2>
// <div class="card-short-summary">${data[0].excerpt.rendered}</div>
// <div class="card-info flex-row">
// <div>
// </div>
// <div class="card-link">Read More</div>
// </div>
// </div>
// </a>

// `)
// );

// async function writePosts(url) {
//   const selectContainer = document.querySelector(`.${arguments[1]}-cards-container`);
//   try {
//     const response = await fetch(url);
//     const posts = await response.json();
// for (let i = 0; i < posts.length; i++) {
//   let newDate = new Date(posts[i].date);
//   let year = newDate.getFullYear();
//   let month = newDate.getMonth() + 1;
//   let date = newDate.getDate();
//   if (date < 10) {
//     date = "0" + dt;
//   }
//   if (month < 10) {
//     month = "0" + month;
//   }
//       selectContainer.innerHTML += `
//         <a href="${posts[i].id}" class="card flex-col">
//         <img src="${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="">
//         <div class="card-category ${posts[i]._embedded["wp:term"][0][0].name}"><p>${
//         posts[i]._embedded["wp:term"][0][0].name
//       }
//         </p></div>
//         <div class="card-text flex-col">
//         <h2>${posts[i].title.rendered}</h2>
//         <div class="card-short-summary">${posts[i].excerpt.rendered}</div>
//         <div class="card-info flex-row">
//         <div>
//         <p>By ${posts[i]._embedded.author[0].name}</p><p> ${year + "-" + month + "-" + date}</p>
//         </div>
//         <div class="card-link">Read More</div>
//         </div>
//         </div>
//         </a>
//         `;
//       continue;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// let review = "review";
// let tutorial = "tutorial";
// let news = "news";
// writePosts(url(3, 18), tutorial);

// async function test1(url) {
//   const response = await fetch(url);
//   const posts = await response.json();
//   return posts;
// }
// async function test2(url) {
//   const response = await fetch(url);
//   const posts2 = await response.json();
//   return posts2;
// }
// const dependencies = [test1(url(10, 17))];
// const homepage = await Promise.all(dependencies);
// console.log(homepage);
