import { Cart } from '../Cart'
import { Calculator } from '../FreightCalculator'
import { MailService } from '../MailService'
import { Product } from '../Product'
import { User } from '../User'

const newCart = () => {
  const user: User = new User('Artur', '1234567')
  return new Cart(user)
}

const client: jest.Mocked<MailService> = {
  calculateShipping: jest.fn().mockReturnValue(30),
  cep: '1234567',
}

const mail: MailService = new MailService('1234567')
const spyMail = jest.spyOn(mail, 'calculateShipping')

const cart: Cart = newCart()
describe('Calculator test', () => {
  afterEach(() => {
    cart.removeAllItems()
  })

  it('Should be able to calculate the total cart value with out freight ', () => {
    const product: Product = new Product('Keyboard', 150)
    cart.addItemToCart(product, 3)

    const calculator: Calculator = new Calculator(client)
    expect(calculator.calculateCartValue(cart)).toBe(450)
  })

  it('Should be able to calculate the total cart value with $10 as freight', () => {
    const product: Product = new Product('Keyboard', 50)
    cart.addItemToCart(product, 3)

    const calculator: Calculator = new Calculator(client)
    expect(calculator.calculateCartValue(cart)).toBe(150)
  })

  it('Should be able to calculate the cart value of $150 without freight ', () => {
    const product: Product = new Product('Keyboard', 30)
    cart.addItemToCart(product, 5)

    spyMail.mockReturnValue(50)
    const calculator: Calculator = new Calculator(mail)

    expect(calculator.calculateCartValue(cart)).toBe(150)
  })

  it('Should be able to return the total cart value with an empty cart', () => {
    spyMail.mockReturnValue(40)
    const calculator: Calculator = new Calculator(mail)

    expect(calculator.calculateCartValue(cart)).toBe(0)
  })
})
