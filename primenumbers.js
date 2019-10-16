//Preface
//A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
//A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number
//
//The Problem
//You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)
//
//isPrime(number)
//Should return boolean true if prime, otherwise false
//
//getPrimes(start, finish)
//Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.
//
//Sample Input:
//isPrime(number):
//
//isPrime(0); // === false
//isPrime(1); // === false
//isPrime(2); // === true
//isPrime(3); // === true
//isPrime(4); // === false
//isPrime(5); // === true 
//getPrimes(start, finish):
//
//getPrimes(0, 0); // === []
//getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
//getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]



function isPrime(num) {
    if (num <= 1) return false;
    if (((num % 2) === 0) && (num > 2)) return false;
    for (let i = 3; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false
    }
    return true
}

function getPrimes(num1, num2) {
    const arrPrimes = [];
    const start = (num1 <= num2) ? num1 : num2;
    const end = (num1 <= num2) ? num2 : num1;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            arrPrimes.push(i)
        }
    }
    return arrPrimes
}

console.log(Math.sqrt(3));
console.log(Math.sqrt(5));

console.log(isPrime(3));
console.log(isPrime(15));
console.log(isPrime(16));
console.log(isPrime(17));
console.log(isPrime(18));
console.log(isPrime(19));

console.log(getPrimes(0, 0)); // === []
console.log(getPrimes(70, 30)); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(getPrimes(30, 0));
