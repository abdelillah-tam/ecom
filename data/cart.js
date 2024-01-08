export let products = [];

export function addToCart(product) {
  
  if (!products[product.productId - 1]) {
    products.push(product);
    
  }else{
    console.log('called');
    products[product.productId - 1].quantity = product.quantity;
    products[product.productId - 1].reservedQuantity = product.reservedQuantity;
  }
  localStorage.setItem("products", JSON.stringify(products));
  console.log(products);
}

export function getFromCart() {
  const jsonProducts = localStorage.getItem("products");
  products = JSON.parse(jsonProducts);
}

export function removeFromCart(position) {
  //products.filter((index) => index !== position);
}
