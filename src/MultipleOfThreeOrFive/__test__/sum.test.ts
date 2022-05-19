import Multiples from '../index'

test('Should be able to return the sum of all multiples of 3 and 5 below 1000', () => {
  const expectedValue = 267333

  const multiples = new Multiples()

  const result = multiples.sumOfThreeOrFive(1000)

  expect(expectedValue).toEqual(result)
})

test('Should be able to return the sum of all multiples of 3, 5 and seven below 1000', () => {
  const expectedValue = 338404

  const multiples = new Multiples()

  const result = multiples.sumOfThreeFiveOrSeven(1000)

  expect(expectedValue).toEqual(result)
})
