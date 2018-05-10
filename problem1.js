let sumMultiples = n =>
  [...Array(n)]
    .map((_, ix) => ix)
    .filter(i => i % 3 === 0 || i % 5 === 0)
    .reduce((sum, i) => sum + i)
console.log(sumMultiples(1000))
