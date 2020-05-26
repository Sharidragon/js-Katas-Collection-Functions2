// 1. Add function
function add(x, y){
    return x + y
}
console.log(add(2, 4))

// 2. Multiply
function multiply(x, y){
    let w = 0
    for (let i = 0; i < y; i += 1){
        w = add(x, w)
    }
    return w
}
console.log(multiply(3, 4))

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
function fib (n){
  let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }
 console.log(fib(8))