// 1. Add function
function add(x, y){
    return x + y
}
console.log(add(2, 4))

// 2. Multiply
function multiply(x, y){
    let n = 0
    for (let i = 0; i < y; i += 1){
        n = add(x, n)
    }
    return n
}
console.log(multiply(6, 4))

//  3. Power/Exponentiation
function nth (x, y){
    let n = 1
    for (let i = 0; i < y; i += 1){
        n = multiply(x, n)
    }
    return n
}
console.log(nth(2, 8))

// 4. Factorial
  function fact(x) {
    let n = 1
    for (let i = x; i > 1; i -= 1) {
        n = multiply(n, i);
    }
    return n
}
console.log(fact(5))

// 5. Fibonacci
function fib (x){
  let a = 0
  let b = 1
  let n = 1
    for (let i = 2; i < x; i += 1){
    n = a + b;
    a = b;
    b = n; 
    }
   return n
  }
 console.log(fib(8))