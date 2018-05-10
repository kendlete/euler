// 11 12 13 14 15 16 17 18 19 20

let isEvenlyDivisible = n => {
  for (let j = 11; j < 21; j++) {
    if (n % j !== 0) return false
  }
  return true
}

let getSmallest = () => {
  for (let i = 20; i < 300000000; i++) {
    if (isEvenlyDivisible(i)) return i
  }
}

console.log(getSmallest())
