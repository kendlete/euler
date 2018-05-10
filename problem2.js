function* fib () {
  let f1 = 0, f2 = 1, val
  while (true) {
    val = f1 + f2, f1 = f2, f2 = val
    yield val
  }
}
const it = fib()
let sum = 0
for (var v of it) {
  if (v > 4000000) break
  if (v % 2 === 0) sum += v
}
console.log(sum)
