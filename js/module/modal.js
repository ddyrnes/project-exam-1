export async function modal() {
  const imgContainer = document.querySelector(".article-container");
  const img = imgContainer.querySelectorAll("img");
  const figure = imgContainer.querySelectorAll("figure");
  const modalRoot = document.getElementById("modal-root");

  figure.forEach((figure) => {
    figure.innerHTML += `
    <div id="zoom"></div>
    `;
  });
  modalRoot.addEventListener("click", rootClick);

  figure.forEach((figure) => {
    figure.addEventListener("click", (e) => {
      modalRoot.classList.add("visible");
      document.querySelector("#modal-img").src = e.target.src;
      document.querySelector("#modal-figcap").innerHTML = e.target.alt;
    });
  });

  function rootClick() {
    modalRoot.classList.remove("visible");
  }
}
