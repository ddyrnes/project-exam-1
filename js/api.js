const plainUrl = `https://api.dd2.no/wp-json/wp/v2/posts?per_page=50&_embed&`;
const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
const url = `${plainUrl}consumer_key=${key}&consumer_secret=${secret}`;

const selectContainer = document.querySelector(".api-test");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    for (let i = 0; i < posts.length; i++) {
      if (i >= 3) {
        break;
      } else {
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
        <div>
        <h2>${posts[i].title.rendered}</h2>
        <img src="${posts[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="">
        <p class="${posts[i]._embedded["wp:term"][0][0].name}">${posts[i]._embedded["wp:term"][0][0].name}</p>
        <p>By ${posts[i]._embedded.author[0].name}</p><p> ${year + "-" + month + "-" + date}</p>
        </div>
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
    }
  } catch (error) {
    console.log(error);
  }
}
getPosts(url);
