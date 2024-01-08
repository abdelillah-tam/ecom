import { products, addToCart, getFromCart } from "./data/cart.js";
import { productOne, quantityElement } from "./photo-slider.js";
const productCartElement = document.querySelector(".product-cart-element");
const addToCartButtonElement = document.querySelector(".add-to-cart");
const checkoutBtn = document.querySelector(".checkout-btn");

addToCartButtonElement.addEventListener("click", putToCart);

if (products.length === 0) {
  checkoutBtn.classList.add("hidden");
}
function putToCart() {
  if (
    productOne.quantity >= 0 &&
    quantityElement[0].textContent <= productOne.quantity
  ) {
    productOne.reservedQuantity += Number(quantityElement[0].textContent);
    productOne.quantity -= Number(quantityElement[0].textContent);
    addToCart(productOne);
    refreshShopcart();
  }
}

function removeFromShopcart() {}

function refreshShopcart() {
  let div = document.createElement("div");
  getFromCart();

  products.forEach((element) => {
    div.setAttribute("id", `c${element.productId}`);
    div.innerHTML = `<div class="flex justify-between">
        <img
          class="rounded-lg w-1/6"
          src="./images/image-product-1-thumbnail.jpg"
        />
        <div class="flex flex-col">
          <p class="text-grayish-blue">${element.productName}</p>
          <p class="text-grayish-blue">
            $${element.price} x ${
      element.reservedQuantity
    }<span class="text-very-dark-blue font-bold">
              $${element.price * element.reservedQuantity}</span
            >
          </p>
        </div>
        
        <div class="flex flex-col justify-center">
          <img class="cursor-pointer" src="./images/icon-delete.svg" />
        </div>
        </div>`;

    console.log(productCartElement.hasChildNodes());
    if (productCartElement.hasChildNodes()) {
      productCartElement.replaceChild(
        div,
        document.querySelector(`#c${element.productId}`)
      );
    } else {
      productCartElement.appendChild(div);
    }
  });

  productCartElement.classList.add("overflow-y-scroll");
  checkoutBtn.classList.remove("hidden");
}
