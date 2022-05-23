import { User } from '../User'

let user: User

beforeEach(() => {
  user = new User('Artur', '123456')
})

describe('User test', () => {
  test('Should be able to return the name and cep of a new user', () => {
    expect('Artur').toEqual(user.getName())
    expect('123456').toEqual(user.getCep())
  })
})
