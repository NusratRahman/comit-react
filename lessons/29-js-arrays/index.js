'use strict';

let nameOfSiblings = ['Nabi', 'Tasi', 'Liyana', 'Arshi'];
let nameOfParents = ['Mansur', 'Nahar'];

let familyMembers = nameOfSiblings.concat(nameOfParents);

familyMembers.push('Jasper');

console.log (familyMembers.reverse());

console.log (familyMembers[familyMembers.indexOf('Mansur')]);

//familyMembers.splice (familyMembers.indexOf('Mansur'), 1, 'Rahman');

familyMembers [familyMembers.indexOf('Mansur')] = 'Rahman';

console.log (familyMembers);

for (let i = 0; i < familyMembers.length; i++) {
    console.log (familyMembers[i]);
}

for (let individuals of familyMembers) {
    console.log (individuals);
}


// Extra Exercises

// i) The Recipe Card :

let recipeCard = {
    title: "Pudding",
    servings: 6,
    ingredients: ['Eggs', 'Milk', 'Sugar', 'Essence'] 
}

console.log (recipeCard.title);
console.log (`Serves: ${recipeCard.servings}`);
console.log ('Ingredients: ');

for (let items of recipeCard.ingredients) {
    console.log (items);
}


// ii) The Reading List :

let readingList = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        alreadyRead: true
    },
    {
        title: 'Love With a Chance of Drowning',
        author: 'Torre DeRoche',
        alreadyRead: false
    },
    {
        title: 'On the Road',
        author: 'Jack Kerouac',
        alreadyRead: false
    }
];

for (let books of readingList) {
    console.log (`${books.title} by ${books.author}`);
}

for (let books of readingList) {
    if (books.alreadyRead) {
        console.log (`I already read "${books.title}" by ${books.author}`);
    } else {
        console.log (`I still need to read "${books.title}" by ${books.author}`);
    }    
}


// Recreate the array.map function :


function map(arr, func) {
    let newArray = [];
    for (let numbers of arr) {
        newArray = newArray.concat(func(numbers));
    }
    return newArray;
}
  
const result = map([1, 2, 3], function(item) {
    return item * 2;
});
  
console.log (result); // [2, 4, 6]