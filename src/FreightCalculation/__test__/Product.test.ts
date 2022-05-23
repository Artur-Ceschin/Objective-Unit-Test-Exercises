import { Product } from '../Product'

let product: Product

beforeEach(() => {
  product = new Product('Macbook', 1000)
})

describe('Produto', () => {
  test('Should be able to return the name and value of a new product', () => {
    expect('Macbook').toEqual(product.getName())
    expect(1000).toEqual(product.getValue())
  })
})
