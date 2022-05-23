export class MailService {
  cep: string
  constructor(cep: string) {
    this.cep = cep
  }

  calculateShipping(cep: string) {
    return 10
  }
}
