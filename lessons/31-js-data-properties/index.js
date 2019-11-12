let str = prompt ("Enter the names of your 3 favourite movies separated by a comma", "Harry Potter");

let movieNames = str.split(',');

console.log ( `My favourite movies are: `);
for (let name of movieNames) {
    console.log ( `- ${name}` ); 
}


let sentence = prompt("Enter a sentence that you would like to be reversed", "Travelling is my passion."); 

function reverseString(sentence) {
    
    let splitString = sentence.split("");
 
    let reverseArray = splitString.reverse(); 
 
    let joinArray = reverseArray.join("");
    
    return joinArray; 
}
 
console.log (reverseString(sentence));