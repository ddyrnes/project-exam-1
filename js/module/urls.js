let url = `https://api.dd2.no/wp-json/wp/v2/posts?_embed&per_page=`;
let urlCategory = `&categories=`;

export const urlHomePage = [
  url + "8",
  url + "3" + urlCategory + "17",
  url + "3" + urlCategory + "18",
  url + "3" + urlCategory + "19",
  // Categories: Reviews = 17, Tutorials = 18, News = 19
];
