import { Cart } from '../Cart'
import { Product } from '../Product'
import { User } from '../User'

const newCart = () => {
  const user = new User('Artur', '123456')
  return new Cart(user)
}

const cart = newCart()

describe('Shopping Cart test', () => {
  afterEach(() => {
    cart.removeAllItems()
  })
  it('Should be able to return 0 if cart is empty', () => {
    const cart = newCart()
    expect(cart.getItemsValue()).toBe(0)
  })

  it('Should be able to return the calculation of the value of cart', () => {
    const product = new Product('Mouse', 100)

    cart.addItemToCart(product, 1)

    expect(cart.getItemsValue()).toBe(100)
  })

  it('Should be able to calculate the value of product with two different products', () => {
    const product = new Product('Mouse', 100)
    const product2 = new Product('Keyboard', 50)

    cart.addItemToCart(product, 2)
    cart.addItemToCart(product2, 3)

    expect(cart.getItemsValue()).toBe(350)
  })

  it('Should be able to return the calculation of cart with only one product', () => {
    const product = new Product('Mouse', 50)
    cart.addItemToCart(product, 1)

    expect(cart.getTotalQuantityOfProducts()).toBe(1)
  })

  it('Should be able to calculate the total value of cart with only one product', () => {
    const product = new Product('Mouse', 50)
    cart.addItemToCart(product, 3)

    expect(cart.getTotalQuantityOfProducts()).toBe(3)
  })

  it('Should be able to remove a product in cart with only one product', () => {
    const product = new Product('Mouse', 50)

    cart.addItemToCart(product, 6)
    cart.removeItemToCart(product)
    expect(cart.getTotalQuantityOfProducts()).toBe(5)
    expect(cart.getItemsValue()).toBe(250)
  })

  it('Should be able to handle when removing a product of an empty cart', () => {
    const product = new Product('Mouse', 50)

    cart.removeItemToCart(product)
    expect(cart.getTotalQuantityOfProducts()).toBe(0)
    expect(cart.getItemsValue()).toBe(0)
  })

  it('Should be able to remove all products in the cart', () => {
    const product = new Product('Mouse', 50)

    cart.addItemToCart(product, 3)

    cart.removeAllItems()
    expect(cart.getTotalQuantityOfProducts()).toBe(0)
    expect(cart.getItemsValue()).toBe(0)
  })
})
