import { Cart } from './Cart'
import { MailService } from './MailService'

export class Calculator {
  mail: MailService

  constructor(mail: MailService) {
    this.mail = mail
  }

  addShippingRate(value: number) {
    return value < 100 && value != 0
  }

  calculateCartValue(cart: Cart) {
    let totalValue = cart.getItemsValue()
    if (this.addShippingRate(totalValue)) {
      return totalValue + this.mail.calculateShipping(cart.user.cep)
    }
    return totalValue
  }
}
