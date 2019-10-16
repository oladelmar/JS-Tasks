const fibonacci = function (index) {
    if (index < 0) index = -index;
    if (index === 0) return 0;
    if (index === 1) return 1;
    return fibonacci(index-1) + fibonacci(index-2);
}

const fibonacciArray = [];

for (let i = 0; i < 30; i++) {
    fibonacciArray.push(fibonacci(i));
}

console.log(fibonacciArray);