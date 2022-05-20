import { Products } from './Products'
import { User } from './User'

export class ShoppingCart {
  private productList: Products[]
  user: User

  constructor(user: User) {
    this.productList = []
    this.user = user
  }

  add(product: Products): void {
    const emptyCar = this.productList.length === 0
    if (emptyCar) {
      this.productList.push(product)
      return
    }

    const index = this.productList.indexOf(product)
    if (index === -1) {
      this.productList.push(product)
      return
    }

    this.productList[index].setQuantity(product.getQuantity())
    return
  }

  getProductList(): Products[] {
    return this.productList
  }

  getTotalValue(): number {
    return this.productList.reduce(
      (acc, valor) => acc + valor.getPrice() * valor.getQuantity(),
      0
    )
  }

  remove(product: Products): string {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].getName() === product.getName()) {
        this.productList.splice(i, 1)
      }
    }

    return `Product removed`
  }
}
