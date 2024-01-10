export let products = [];

export function addToCart(product) {
  
  if (!products[product.productId - 1]) {
    products.push(product);
    
  }else{
    products[product.productId - 1].quantity = product.quantity;
    products[product.productId - 1].reservedQuantity = product.reservedQuantity;
  }
  localStorage.setItem("products", JSON.stringify(products));
}

export function getFromCart() {
  const jsonProducts = localStorage.getItem("products");
  products = JSON.parse(jsonProducts);
}

export function removeFromCart(position) {
  products = products.filter((index) => index === position);
  localStorage.setItem("products", JSON.stringify(products));
}
