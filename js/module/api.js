// export function url() {
//   const url = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=5`;
// }
// export function url() {
//   const baseUrl = `https://api.dd2.no/wp-json/wp/v2/posts?_embed`;
//   let postPerPage = `&per_page=${arguments[0]}`;
//   if (arguments[1]) {
//     let category = `&categories=${arguments[1]}`;
//     return (url = baseUrl + postPerPage + category);
//   } else {
//     return (url = baseUrl + postPerPage);
//   }
// }
// First number = number of posts
// Second number = category number:
// News = 19, Tutorials = 18, Reviews = 17
// const plainUrl = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=3&categories=17&`;
// const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
// const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
// const url = `${plainUrl}consumer_key=${key}&consumer_secret=${secret}`;

export async function makeApiCalls(urls) {
  let data;
  let error;
  try {
    const requests = urls.map((url) => fetch(url));
    const results = await Promise.all(requests);
    const promises = results.map((response) => response.json());
    let apiResults = await Promise.all(promises);
    return await Promise.all(promises);
  } catch (error) {
    console.log(error);
  }
  return { apiResults, error };
}

let url = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=`;
let urlCategory = `&categories=`;

export const urls = [
  url + "6",
  url + "3" + urlCategory + "17",
  url + "3" + urlCategory + "18",
  url + "3" + urlCategory + "19",
  // Categories: Reviews = 17, Tutorials = 18, News = 19
];
