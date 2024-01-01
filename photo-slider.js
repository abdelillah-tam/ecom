let thumbs = document.getElementsByClassName("thumb");

let productImageElement = document.getElementsByClassName("product-image-js");
productImageElement[0].setAttribute(
  "src",
  `${thumbs[0].getAttribute("src").split("-thumbnail").join("")}`
);

let index = 0;



setInterval(() => {
  if (index < thumbs.length) {
    productImageElement[0].setAttribute(
      "src",
      `${thumbs[index].getAttribute("src").split("-thumbnail").join("")}`
    );
    if (index > 0) {
      thumbs[index - 1].classList.remove("outline-2");
      thumbs[index - 1].classList.remove("opacity-30");
    } else {
      thumbs[index].classList.remove("border-2");
      thumbs[index].classList.remove("opacity-30");
    }
    thumbs[index].classList.add("outline-2");
    thumbs[index].classList.add("outline-orange");
    thumbs[index].classList.add("opacity-30");
    index++;
  } else {
    thumbs[index - 1].classList.remove("outline-2");
    thumbs[index - 1].classList.remove("opacity-30");
    index = 0;
    productImageElement[0].setAttribute(
      "src",
      `${thumbs[index].getAttribute("src").split("-thumbnail").join("")}`
    );
    thumbs[index].classList.add("outline-2");
    thumbs[index].classList.add("opacity-30");
  }
}, 1500);
