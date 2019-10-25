alert("Enter two numbers to see if the first is greater than the second");

let firstNumber = prompt('Enter the first number: ', 0);
let secondNumber = prompt('Enter the second number: ', 0);

// Compare the first number to the second and show a confirm with the result
let result;
if(firstNumber > secondNumber) {
    result = confirm("The first number is greater than the second number");
} else if(firstNumber < secondNumber) {
    result = confirm("The second number is greater than the first number");
} else {
    result = confirm("The two numbers are equal");
}
alert(result);