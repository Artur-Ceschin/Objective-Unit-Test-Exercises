export default class WordInNumbers {
  convertLettersToNumbers(value: string): number[] {
    //convert strings to array
    const arrayOfLetters = value.split('')

    let convertedNumbers: number[] = []

    arrayOfLetters.map((letter) => {
      const result = letter.charCodeAt(0)
      if (result >= 97 && result <= 122) {
        const lowercase = result - 96
        return convertedNumbers.push(lowercase)
      } else if (result >= 65 && result <= 90) {
        const uppercase = result - 38
        return convertedNumbers.push(uppercase)
      }
    })

    return convertedNumbers
  }

  getTheSumOfNumbersInArray(value: string): number {
    const arrayOfNumbers = this.convertLettersToNumbers(value)
    const totalOfNumbers = arrayOfNumbers.reduce((sum, i) => {
      return sum + i
    })

    return totalOfNumbers
  }

  verifyIfNumbersArePrimeOrNot(value: string) {
    const arrayOfNumbers = this.convertLettersToNumbers(value)

    //verify if is prime number
    const isPrime = arrayOfNumbers.map((number) => {
      if (number === 1) return false

      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false
        }
      }
      return true
    })

    return isPrime
  }

  verifyIfNumbersAreHappyOrNot(value: string): boolean {
    let total = this.getTheSumOfNumbersInArray(value)

    //verify if is happy number

    let sum = 0
    while (total > 0) {
      let e = total % 10
      total = Math.floor(total / 10)
      sum += e * e
    }
    if (sum === 1) {
      return true
    } else if (sum > 1 && sum <= 4) {
      return false
    }

    console.log('result', total)

    return this.verifyIfNumbersAreHappyOrNot(sum.toString())
  }

  verifyIfNumberIsMultipleByThreeOrFive(word: string): boolean {
    let value = this.getTheSumOfNumbersInArray(word)
    if (value % 3 === 0 || value % 5 === 0) {
      return true
    }
    return false
  }
}
