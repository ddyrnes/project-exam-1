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
      if (i >= 5) {
        break;
      } else {
        selectContainer.innerHTML += `<h2>${posts[i].title.rendered}</h2>`;
        selectContainer.innerHTML += posts[i].content.rendered;
        // console.log(posts[i]);
        console.log(posts[i]._embedded.author[0].name);
        console.log(posts[i]._embedded);
        console.log(posts[i]._embedded["wp:term"][0][0].name);
        console.log(posts[i].slug);
        // console.log(posts[i].date);
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
