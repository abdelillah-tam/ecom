class Product {
  constructor(
    _id,
    _productName,
    _company,
    _description,
    _quantity,
    _reservedQuantity,
    _price
  ) {
    this.productId = _id;
    this.productName = _productName;
    this.company = _company;
    this.description = _description;
    this.quantity = _quantity;
    this.reservedQuantity = _reservedQuantity;
    this.price = _price;
  }
}
