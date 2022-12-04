export function errorHandler(error) {
  console.log(error);
  const loader = document.querySelector(".loader");
  const loaderInside = document.querySelector(".loader-inside");
  const loaderBox = document.querySelectorAll(".loader-box");
  loaderBox.forEach((e) => {
    e.style.display = "none";
  });
  loaderInside.innerHTML = `
<div class="error-container flex-col">
<div class="error-icon flex-col">&#33;</div>
<div class="error-text">
<p>We apologize but there has been an error</p>
<p>Please try again later</p>
</div>
<div>
`;
}
