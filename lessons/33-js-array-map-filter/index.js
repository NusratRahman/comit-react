'use strict';

const numbers = [ 1, 2, 3, 4, 5 ];

const squaredNumbers = numbers.map ( (num) => num * num );

console.log (numbers);
console.log (squaredNumbers);

const digits = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const evenNumbers = digits.filter ( (num) => num % 2 === 0 );

const oddNumbers = digits.filter ( (num) => num % 2 !== 0 );

console.log (digits);
console.log (evenNumbers);
console.log (oddNumbers);

const user = [
    { name: 'Nusrat', age: 35, city: 'Saskatoon' },
    { name: 'Sonia', age: 34, city: 'Sydney' },
    { name: 'Shiba', age: 26, city: 'Newyork' },
    { name: 'Neal', age: 13, city: 'Saskatoon' },
    { name: 'Ratna', age: 30, city: 'Dhaka' },
];

const overAge30 = user.filter ( (individual) => individual.age > 30 );
const ageUnder20 = user.filter ( (individual) => (individual.age < 20) && (individual.city === 'Saskatoon') );
const ages = user.map ( (individual) => individual.age );

console.log (overAge30);
console.log (ageUnder20);
console.log (ages);

// BONUS Exercise

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];

let stripVowels = function  (string) {
    
    let splitString = string.split('');

    let onlyConsonant = splitString.filter ( (letter) => {
        return vowels.indexOf(letter) === -1;
    })
    
    let returnedString = onlyConsonant.join ('');
    console.log (`The string without the vowels is : ${returnedString}`);
}

stripVowels ("nusrat");
stripVowels ("My name is Neal");
stripVowels ("abcdefghijklmnopqrstuvwxyz");