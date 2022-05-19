import WordInNumbers from '..'

test('Should be able to convert a sentence into number', () => {
  const expectedValue = [1, 2, 3, 26, 52, 27]

  const word = new WordInNumbers()

  const result = word.convertLettersToNumbers('abc-z-Z-A')

  expect(expectedValue).toEqual(result)
})

test('Should be able to return the sum of the numbers in array', () => {
  const expectedValue = 28

  const word = new WordInNumbers()

  const result = word.getTheSumOfNumbersInArray('a-A')

  expect(expectedValue).toEqual(result)
})

test('Should be able to return if the number is a prime number or not', () => {
  const expectedValue = [true, false, true]

  const word = new WordInNumbers()

  const result = word.verifyIfNumbersArePrimeOrNot('gab')

  expect(expectedValue).toEqual(result)
})

test('Should be able to verify if number is a happy number or not', () => {
  const expectedValue = true

  const word = new WordInNumbers()

  const result = word.verifyIfNumbersAreHappyOrNot('gab')

  expect(expectedValue).toEqual(result)
})

test('Should be able to return true if the sum of the given letters are divisible by 3 or 5', () => {
  const expectedValue = true

  const word = new WordInNumbers()

  const result = word.verifyIfNumberIsMultipleByThreeOrFive('gab')

  expect(expectedValue).toEqual(result)
})
