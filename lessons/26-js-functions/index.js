"use strict";

function showEvenNumbers (lowerLimit, upperLimit) {
    for (let i=lowerLimit; i<=upperLimit; i++){
        if (i%2 === 0) {
            console.log (i);
        }
    }
}

showEvenNumbers (0, 100);

function showUser (name, age, phoneNumber, street, postalCode, isMarried) {
    console.log (` Name: ${name} \n Age: ${age} \n Phone Number: ${phoneNumber} \n Street: ${street} \n Postal Code: ${postalCode}`);

    if (isMarried === "married") 
        console.log (` Is Married: Yes`);
    else
        console.log (` Is Married: No`);        
}

showUser ("Nim", 16, 1234567, "Disney", "K9L0H6", "unmarried");

let evenNumbers = function (lowerLimit, upperLimit) {
    for (let k=lowerLimit+1; k<upperLimit; k++){
        if (k%2 === 0) {
            console.log (k);
        }
    }
};

evenNumbers (0, 100);
evenNumbers (0, 100);
evenNumbers (0, 100);
evenNumbers (0, 100);
evenNumbers (0, 100);

let fibonacci = function (numberOfCalculations) {
    let firstTerm = 0;
    let currentTerm = 1;
    console.log (firstTerm);
    console.log (currentTerm);
    for (let j=1; j<=numberOfCalculations; j++) {
        let nextTerm = firstTerm + currentTerm;
        console.log (nextTerm);
        firstTerm = currentTerm;
        currentTerm = nextTerm;
    }
};

fibonacci(10);

let showName = function (name) {
    let nameLength = name.length;
    let sign = "=";
    console.log (sign.repeat(nameLength+6));
    console.log (sign + ' ' + ' ' + name + ' ' + ' ' + sign);
    console.log (sign.repeat(nameLength+6));
};

showName("Nusrat");
showName("Nusrat");