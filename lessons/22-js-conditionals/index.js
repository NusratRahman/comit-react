alert("Enter two numbers to see if the first is greater than the second");

let firstNumber = prompt('Enter the first number: ', 0);
let secondNumber = prompt('Enter the second number: ', 0);

if(firstNumber > secondNumber) {
    alert("The first number is greater than the second number");
} else if(firstNumber < secondNumber) {
    alert("The second number is greater than the first number");
} else {
    alert("The two numbers are equal");
}