'use strict';

let user = {};

console.log (user);
console.log (typeof user);

user.username = 'batman';
user.password = 'hunter2';

console.log (user);

if (user.username === 'batman' && user.password === '*******') {
    console.log ("Access Granted");
} else {
    console.log ("Access Denied");
}

let userTwo = {
    username: 'wonderwoman',
    password: '123123',
    greet () {
        console.log (`Hello, I am ${this.username}`);
    },
    update (newUserName) {
        this.username = newUserName;
    }
};

userTwo.greet();
userTwo.update('Nusrat');
userTwo.greet();