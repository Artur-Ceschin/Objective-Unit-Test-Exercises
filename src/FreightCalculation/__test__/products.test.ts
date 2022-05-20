import { Products } from '../Products'

let product: Products

beforeEach(() => {
  product = new Products('monitor', 185, 2)
})

describe('Product', () => {
  test('Returns the name, price and the quantity of an project', () => {
    expect('monitor').toEqual(product.getName())
    expect(185).toEqual(product.getPrice())
    expect(2).toEqual(product.getQuantity())
  })
})
