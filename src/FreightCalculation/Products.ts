export class Products {
  private name: string
  private price: number
  private quantity: number

  constructor(name: string, price: number, quantity: number) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  getName(): string {
    return this.name
  }

  getPrice(): number {
    return this.price
  }

  setPrice(price: number): void {
    this.price += price
  }

  getQuantity(): number {
    return this.quantity
  }

  setQuantity(quantity: number): void {
    this.quantity += quantity
  }

  getTotal(): number {
    return this.price * this.quantity
  }
}
