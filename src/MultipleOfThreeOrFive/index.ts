export default class Multiples {
  sumOfThreeOrFive(limit: number) {
    let multipleOfThree = 0
    let multipleOfFive = 0

    for (let i = 0; i <= limit; i++) {
      if (i % 3 === 0) {
        multipleOfThree += i
      }
      if (i % 5 === 0) {
        multipleOfFive += i
      }
    }

    return multipleOfThree + multipleOfFive
  }

  sumOfThreeFiveOrSeven(limit: number) {
    let multipleOfThree = 0
    let multipleOfFive = 0
    let multipleOfSeven = 0

    for (let i = 0; i <= limit; i++) {
      if (i % 3 === 0) {
        multipleOfThree += i
      }
      if (i % 5 === 0) {
        multipleOfFive += i
      }
      if (i % 7 === 0) {
        multipleOfSeven += i
      }
    }

    return multipleOfThree + multipleOfFive + multipleOfSeven
  }
}
