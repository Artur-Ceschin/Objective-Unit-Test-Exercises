export class User {
  private name: string
  private cep: number

  constructor(name: string, cep: number) {
    this.name = name
    this.cep = cep
  }

  getName(): string {
    return this.name
  }

  getCep(): number {
    return this.cep
  }
}
