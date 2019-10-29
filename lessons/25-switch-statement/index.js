let weekdayNumber = 5;

if (weekdayNumber === 1) {
    console.log ("Today is Monday");
} else if (weekdayNumber === 2) {
    console.log("Today is Tuesday");
} else if (weekdayNumber === 3) {
    console.log("Today is Wednesday");
} else if (weekdayNumber === 4) {
    console.log("Today is Thursday");
} else if (weekdayNumber === 5) {
    console.log("Today is Friday");
} else if (weekdayNumber === 6) {
    console.log("Today is Saturday");
} else if (weekdayNumber === 7) {
    console.log("Today is Sunday");
} else {
    console.log ("Error: Number not between 1-7");
}

switch (weekdayNumber) {
    case 1: 
        console.log ("Today is Monday");
        break;
    case 2: 
        console.log ("Today is Tuesday");
        break;
    case 3: 
        console.log ("Today is Wednesday");
        break;
    case 4: 
        console.log ("Today is Thursday");
        break;
    case 5: 
        console.log ("Today is Friday");
        break;
    case 6: 
        console.log ("Today is Saturday");
        break;
    case 7: 
        console.log ("Today is Sunday");
        break;
    default:
        console.log ("Error: Number not between 1-7");
}

let nameOfTheDay;

switch (weekdayNumber) {
    case 1: 
        nameOfTheDay = "Today is Monday";
        break;
    case 2: 
        nameOfTheDay = "Today is Tuesday";
        break;
    case 3: 
        nameOfTheDay = "Today is Wednesday";
        break;
    case 4: 
        nameOfTheDay = "Today is Thursday";
        break;
    case 5: 
        nameOfTheDay = "Today is Friday";
        break;
    case 6: 
        nameOfTheDay = "Today is Saturday";
        break;
    case 7: 
        nameOfTheDay = "Today is Sunday";
        break;
    default:
        nameOfTheDay = "Error: Number not between 1-7";
}

console.log(nameOfTheDay);