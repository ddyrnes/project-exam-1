export async function modal() {
  const imgContainer = document.querySelector(".article-container");
  const img = imgContainer.querySelectorAll("img");
  let modalRoot = document.getElementById("modal-root");

  modalRoot.addEventListener("click", rootClick);

  img.forEach((img) => {
    img.addEventListener("click", (e) => {
      modalRoot.classList.add("visible");
      document.querySelector("#modal-img").src = e.target.src;
      document.querySelector("#modal-figcap").innerHTML = e.target.alt;
    });
  });

  function rootClick() {
    modalRoot.classList.remove("visible");
    console.log("remove visible");
  }
}
