//Descending Order
//Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function makeMaxNumber(num) {
    return +String(num).split('').sort((a,b) => (a < b) ? 1 : -1).join('');
}

