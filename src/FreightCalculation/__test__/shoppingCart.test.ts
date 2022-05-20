import { Products } from '../Products'
import { ShoppingCart } from '../ShoppingCart'
import { User } from '../User'

let user: User
let shoppingCar: ShoppingCart
let macbook: Products
let monitor: Products
let headphone: Products

beforeEach(() => {
  user = new User('marcos', 35430045)
  shoppingCar = new ShoppingCart(user)

  macbook = new Products('macbook', 75, 2)
  monitor = new Products('monitor', 65, 3)
  headphone = new Products('headphone', 55, 2)
})

describe('Add a new product at shopping item', () => {
  test('Add a product to shopping car', () => {
    const expectedProduct = [{ name: 'macbook', value: 75, quantity: 2 }]

    shoppingCar.add(macbook)

    expect(expectedProduct).toEqual(shoppingCar.getTotalValue())
  })

  test('Add the same product two times in shopping car', () => {
    const expectedValue = [{ name: 'macbook', value: 75, quantity: 4 }]

    shoppingCar.add(macbook)
    shoppingCar.add(macbook)

    const result = shoppingCar.getProductList()

    expect(expectedValue).toEqual(result)
  })

  test('Add two different products in shopping car', () => {
    const expectedValue = [
      { name: 'macbook', value: 75, quantity: 2 },
      { name: 'monitor', value: 65, quantity: 3 },
    ]

    shoppingCar.add(macbook)
    shoppingCar.add(monitor)

    const result = shoppingCar.getProductList()

    expect(expectedValue).toEqual(result)
  })
})

describe('Final value in shopping car', () => {
  test('The value of an empty car must be 0', () => {
    const expectedValue = 0

    const result = shoppingCar.getTotalValue()

    expect(expectedValue).toEqual(result)
  })

  test('The final value of two products must be 1000', () => {
    const expectedValue = 1000

    shoppingCar.add(macbook)
    shoppingCar.add(macbook)

    const result = shoppingCar.getTotalValue()

    expect(expectedValue).toEqual(result)
  })
})

test('Should be able to remove a product', () => {
  const expectedValue = 'Product removed'

  shoppingCar.add(macbook)
  shoppingCar.add(headphone)
  const result = shoppingCar.remove(macbook)

  expect(expectedValue).toEqual(result)
})

test('Should be able to remove an specif product ', () => {
  const expectedValue = [{ name: 'headphone', value: 55, quantity: 2 }]

  shoppingCar.add(macbook)
  shoppingCar.add(headphone)

  shoppingCar.remove(macbook)

  expect(expectedValue).toEqual(shoppingCar.getProductList())
})
