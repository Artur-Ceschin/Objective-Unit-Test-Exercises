export class User {
  name: string
  cep: string

  constructor(name: string, cep: string) {
    this.name = name
    this.cep = cep
  }

  getName(): string {
    return this.name
  }

  getCep(): string {
    return this.cep
  }
}
