import { Item } from './Item'
import { Product } from './Product'
import { User } from './User'

export class Cart {
  items: Item[]
  user: User

  constructor(user: User) {
    this.items = []
    this.user = user
  }

  addItemToCart(product: Product, quantity: number): void {
    const indexItem = this.items.findIndex(
      (item) => item.product.name === product.name
    )

    if (indexItem !== -1) {
      this.items[indexItem].quantity += quantity
      return
    }

    this.items.push(new Item(product, quantity))
    return
  }

  getItemsValue(): number {
    let result: number = 0

    result = this.items.reduce(
      (totalValue: number, item: Item) =>
        totalValue + item.quantity * item.product.value,
      0
    )

    return result
  }

  getTotalQuantityOfProducts() {
    let result: number = 0

    result = this.items.reduce(
      (total: number, item: Item) => total + item.quantity,
      0
    )

    return result
  }

  removeItemToCart(product: Product): void {
    const indexItem = this.items.findIndex(
      (item) => item.product.name === product.name
    )

    if (indexItem !== -1) {
      if (this.items[indexItem].quantity === 1) {
        this.items.slice(indexItem, 1)
        return
      }
      this.items[indexItem].quantity -= 1
      return
    }

    return
  }

  removeAllItems(): void {
    this.items = []
    return
  }
}
