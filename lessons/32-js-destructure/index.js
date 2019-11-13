'use strict';

let fruits = prompt ("Enter the names of your top 5 favourite fruits separated by a comma", "Mango");

let favouriteFruits = fruits.split(',');

const [first, second, third, ...rest] = favouriteFruits;

alert (`Your first 3 favourite fruits are: ${first}, ${second} and ${third}.`);
alert (`Your next choice for the fruits are: ${rest}`);