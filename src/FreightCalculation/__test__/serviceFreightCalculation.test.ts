import { Products } from '../Products'
import ServiceFreightCalculation from '../ServiceFreightCalculation'
import { ShoppingCart } from '../ShoppingCart'
import { User } from '../User'

let user: User
let car: ShoppingCart
let macbook: Products
let mouse: Products
let monitor: Products
let service: ServiceFreightCalculation

beforeEach(() => {
  user = new User('Artur', 123456)
  service = ServiceFreightCalculation.getInstancia()
  car = new ShoppingCart(user)

  macbook = new Products('macbook', 25, 2)
  mouse = new Products('mouse', 25, 2)
  monitor = new Products('monitor', 25, 2)
})

test('Should be able to return the freight value', () => {
  const expectedValue = 30

  const resultado = service.register(car.user.getCep())

  expect(expectedValue).toEqual(resultado)
})

describe('Value with and without Freight', () => {
  test('Return the total with out freight', () => {
    const expectedValue = 150

    car.add(macbook)
    car.add(mouse)
    car.add(monitor)
    const result = service.totalValue(car)

    expect(expectedValue).toEqual(result)
  })

  test('Returns the total value with freight', () => {
    const expectedValue = 80

    car.getTotalValue = jest.fn().mockReturnValue(50)
    const result = service.totalValue(car)

    expect(expectedValue).toEqual(result)
    expect(car.getTotalValue).toHaveBeenCalledTimes(2)
  })

  test('Should be able to return the function to calculate freight if it has a freight value', () => {
    car.add(macbook)
    service.register = jest.fn()

    service.totalValue(car)

    expect(service.registered).toHaveBeenCalled()
  })
})
