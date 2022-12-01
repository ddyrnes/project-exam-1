export function getParam(specificUrl) {
  const param = new URLSearchParams(window.location.search);
  const id = param.get("id");
  const newUrl = specificUrl + id + "?_embed";
  return { newUrl, id };
}
