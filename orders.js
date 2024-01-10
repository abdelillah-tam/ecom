import {
  products,
  addToCart,
  getFromCart,
  removeFromCart,
} from "./data/cart.js";
import { productOne, quantityElement } from "./photo-slider.js";
const productCartElement = document.querySelector(".product-cart-element");
const addToCartButtonElement = document.querySelector(".add-to-cart");
const checkoutBtn = document.querySelector(".checkout-btn");
const removeBtns = document.querySelectorAll(".remove");
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
    quantityElement[0].textContent = 0;
  }
}

removeBtns.forEach((element) => {
  element;
});
function removeFromShopcart(position) {
  productOne.reservedQuantity = 0;
  productOne.quantity = 20;
  removeFromCart(position);
  refreshShopcart(position);
}

function refreshShopcart(position = -1) {
  let div = document.createElement("div");
  getFromCart();

  if (products.length > 0) {
    products.forEach((element) => {
      div.setAttribute("id", `c${element.productId - 1}`);
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
          <img class="remove cursor-pointer" src="./images/icon-delete.svg"/>
        </div>
        </div>`;

      div
        .querySelector(".remove")
        .addEventListener("click", () =>
          removeFromShopcart(element.productId - 1)
        );

      if (productCartElement.hasChildNodes()) {
        productCartElement.replaceChild(
          div,
          document.querySelector(`#c${element.productId - 1}`)
        );
      } else {
        productCartElement.appendChild(div);
      }
    });
    document.querySelector('.empty').classList.add('hidden');
    document.querySelector('.empty').classList.remove('basis-full');
    productCartElement.classList.add("overflow-y-scroll");
    checkoutBtn.classList.remove("hidden");
  } else {
    productCartElement.removeChild(productCartElement.childNodes.item(position));
    checkoutBtn.classList.add("hidden");
    productCartElement.classList.remove("overflow-y-scroll");
    document.querySelector('.empty').classList.remove('hidden');
    document.querySelector('.empty').classList.add('basis-full');
  }
}
