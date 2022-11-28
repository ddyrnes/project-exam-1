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
