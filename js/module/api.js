export async function makeApiCalls(urls) {
  let data;
  let error;
  try {
    const requests = urls.map((url) => fetch(url));
    const results = await Promise.all(requests);
    const promises = results.map((response) => response.json());
    data = await Promise.all(promises);
  } catch (err) {
    error = err;
  }
  return { data, error };
}
// Makes several API calls

export async function makeApiCall(newUrl) {
  let data;
  let error;
  try {
    const response = await fetch(newUrl);
    data = await response.json();
  } catch (err) {
    error = err;
  }

  return { data, error };
}
// Single API call
