import { products, addToShopcart } from "./data/cart.js";

const productTitleElement = document.querySelector('.product-title-element');
const productDescriptionElement = document.querySelector('.product-description-element');
const productPriceElement = document.querySelector('.price-element');
const productCompanyElement = document.querySelector('.company-element');
let thumbs = document.querySelectorAll(".thumb");
let thumbsDiv = document.querySelectorAll(".thumbnail-div");

let minusElement = document.getElementsByClassName("minus");
let plusElement = document.getElementsByClassName("plus");

let productImageElement = document.getElementsByClassName("product-image-js");

let quantityElement = document.getElementsByClassName("quantity");

let quantity = 0;

const productOne = new Product(
  "Fall Limited Edition Sneakers",
  "SNEAKER COMPANY",
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, " +
    "they'll withstand everything" +
    "the weather can offer.",
  20,
  '125.00'
);

setProductToElements(productOne);
function setProductToElements(product) {
  productTitleElement.textContent = product.productName;
  productCompanyElement.textContent = product.company;
  productDescriptionElement.textContent = product.description;
  productPriceElement.textContent = `$${product.price}`;

}
function addOne() {
  quantity++;
  quantityElement[0].textContent = quantity;
}

function minusOne() {
  if (quantity) {
    quantity--;
    quantityElement[0].textContent = quantity;
  }
}

plusElement[0].addEventListener("click", addOne);
minusElement[0].addEventListener("click", minusOne);

productImageElement[0].setAttribute(
  "src",
  `${thumbs[0].getAttribute("src").split("-thumbnail").join("")}`
);

thumbsDiv[0].classList.add("border-2");
thumbs[0].classList.add("opacity-50");

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", (event) => {
    thumbs.forEach((element) => {
      element.classList.remove("opacity-50");
    });
    thumbsDiv.forEach((element) => {
      element.classList.remove("border-2");
    });
    productImageElement[0].setAttribute(
      "src",
      `${thumbs[i].getAttribute("src").split("-thumbnail").join("")}`
    );
    thumbs[i].classList.add("opacity-50");
    thumbsDiv[i].classList.add("border-2");
  });
}
