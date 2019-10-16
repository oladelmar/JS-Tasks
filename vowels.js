//Return the number (count) of vowels in the given string.
//
//We will consider a, e, i, o, and u as vowels for this Kata.
//
//The input string will only consist of lower case letters and/or spaces.

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((totalVow, letter) => {
        return (vowels.includes(letter)) ? totalVow + 1 : totalVow
    }, 0)
}

console.log(countVowels('i dont know if it exists'));
console.log(countVowels('i am you'));