import IServiceCalculateFreight from './IServiceCalculateFreight'
import { ShoppingCart } from './ShoppingCart'

export default class ServiceFreightCalculation
  implements IServiceCalculateFreight
{
  private static instance: ServiceFreightCalculation
  private minValueToChargeFreight: number = 99
  private freightValue: number = 30

  private constructor() {}
  register(cep: number): number {
    throw new Error('Method not implemented.')
  }

  static getInstancia(): ServiceFreightCalculation {
    if (!ServiceFreightCalculation.instance) {
      ServiceFreightCalculation.instance = new ServiceFreightCalculation()
    }
    return this.instance
  }

  registered(cep: number): number {
    return this.freightValue // fake Value
  }

  totalValue(car: ShoppingCart): number {
    const totalValueOfProductList = car.getTotalValue()
    const hasFreight = totalValueOfProductList <= this.minValueToChargeFreight

    if (hasFreight) {
      const freightValue = this.registered(car.getTotalValue())
      return totalValueOfProductList + freightValue
    }

    return totalValueOfProductList
  }
}
