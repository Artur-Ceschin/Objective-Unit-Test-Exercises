import HappyNumber from '..'

test('Should be able to return true if the given number is a happy number', () => {
  const expectedValue = [true]

  const happy = new HappyNumber()

  const result = happy.isHappy(7)

  expect(expectedValue).toEqual(result)
})

test('Should be able to return false if the given number is a happy number', () => {
  const expectedValue = false

  const happy = new HappyNumber()

  const result = happy.isHappy(4)

  console.log(result)

  expect(expectedValue).toEqual(result)
})
