export default class HappyNumber {
  isHappy(value: number): boolean {
    let sum = 0

    while (value > 0) {
      let e = value % 10
      value = Math.floor(value / 10)
      sum += e * e
    }
    if (sum === 1) {
      return true
    } else if (sum > 1 && sum <= 4) {
      return false
    }

    return this.isHappy(sum)
  }
}
