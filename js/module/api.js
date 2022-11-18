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
// First number = number of posts
// Second number = category number:
// News = 19, Tutorials = 18, Reviews = 17
// const plainUrl = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=3&categories=17&`;
// const key = `ck_1fea3ffc8bc99a342906cb9de269c915b0367458`;
// const secret = `cs_2aa926822b33ef9731b67319cd7a99585def833b`;
// const url = `${plainUrl}consumer_key=${key}&consumer_secret=${secret}`;
