import { User } from '../User'

test('Should be able to return the user name', () => {
  const expectedValue = 'Artur'
  const user = new User('Artur', 12345678)

  const result = user.getName()

  expect(expectedValue).toEqual(result)
})
test('Should be able to return the user cep', () => {
  const expectedValue = 12345678
  const user = new User('Artur', 12345678)

  const result = user.getCep()

  expect(expectedValue).toEqual(result)
})
