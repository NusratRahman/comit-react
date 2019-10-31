'use strict';

let nameOfSiblings = ['Nabi', 'Tasi', 'Liyana', 'Arshi'];
let nameOfParents = ['Mansur', 'Nahar'];

let familyMembers = nameOfSiblings.concat(nameOfParents);

familyMembers.push('Jasper');

console.log (familyMembers.reverse());

console.log (familyMembers.indexOf ('Nahar'));

familyMembers.splice (2, 1, 'Rahman');

for (let i = 0; i < familyMembers.length; i++) {
    console.log (familyMembers[i]);
}

for (let individuals of familyMembers) {
    console.log (individuals);
}