export class Product {
  name: string
  value: number

  constructor(name: string, value: number) {
    this.name = name
    this.value = value
  }

  getName(): string {
    return this.name
  }

  getValue(): number {
    return this.value
  }

  setValue(value: number): void {
    this.value += value
  }
}
