let getLargestPrime = n => {
  let i = 2
  while (n > 1) {
    n % i === 0 ? n = n / i : i = i + 1
  }
  return i
}
console.log(getLargestPrime(600851475143))
