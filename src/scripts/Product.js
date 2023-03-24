class Product { // Objeto que guarda toda la información de los productos del carrito
  constructor (id, name, price, impuesto, quantity) {
    this.id = id
    this.name = name
    this.price = price
    this.impuesto = impuesto
    this.quantity = quantity
  }
}

export default Product