let isPalindromic = n => String(n) === String(n).split('').reverse().join('')

let getLargestPalindromic = a => {
  let products = []
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= a; j++) {
      products.push(i * j)
    }
  }
  return products.filter(isPalindromic).sort((a, b) => b - a)[0]
}

console.log(getLargestPalindromic(99))
