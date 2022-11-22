import { specificUrl } from "../module/urls.js";
const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const newUrl = specificUrl + id;
console.log(newUrl);

async function makeApiCalls(url) {
  let data;
  let error;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.content.rendered);
    const test = document.querySelector(".specific-article");
    test.innerHTML = data.content.rendered;
  } catch (error) {
    console.log(error);
  }
  return { data, error };
}
makeApiCalls(newUrl);
// const
// createhtml here
