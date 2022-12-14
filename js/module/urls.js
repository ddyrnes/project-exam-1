let url = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=`;
let urlCategory = `&categories=`;

export const urlHomePage = [
  url + "6",
  url + "3" + urlCategory + "17",
  url + "3" + urlCategory + "18",
  url + "3" + urlCategory + "19",
];
export const urlSpecificPage = [
  url + "12",
  url + "4" + urlCategory + "17",
  url + "4" + urlCategory + "18",
  url + "4" + urlCategory + "19",
];
// First number is X amount of posts
// Second number is categories: Reviews = 17, Tutorials = 18, News = 19

export const urlFirstPosts = [url + "10"];

export const urlAllPosts = [url + "100"];

export const specificUrl = `https://api.dd2.no/wp-json/wp/v2/posts/`;
