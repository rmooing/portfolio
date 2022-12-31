const closeBtn = document.querySelector("close_btn");
const popUp = document.querySelector("popup");

function popUp() {
  closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", popUp)