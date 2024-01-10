const cartBtn = document.querySelector(".shopcart-btn");

let clicked = false;

cartBtn.addEventListener("click", () => {
  const shopcartBox = document.querySelector(".shopcart-box");
  /*if (shopcartBox.classList.contains("h-1/3")) {
    shopcartBox.classList.replace("h-1/3", "h-0");
  } else {
    shopcartBox.classList.add("h-1/3");
  }*/
  if (shopcartBox.classList.contains("h-1/3")) {
    shopcartBox.classList.remove("h-1/3");
  } else {
    shopcartBox.classList.add("h-1/3");
  }
  
});
