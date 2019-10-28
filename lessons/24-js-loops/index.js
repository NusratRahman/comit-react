let result=0;

for (let i=1; i<1000; i++) {
    result += i;
    if (result>400) {
        console.log(`Output: ${result}`);
        break;
    }
}

// FOR LOOP

for (let j=0; j<=10; j++) {
    console.log(j);
}

for (let k=100; k>=0; k--) {
    console.log(k);
}

for (let m=1; m<100; m++) {
    if (m % 2 === 0) {
        console.log(m);
    }
}

let output = "";
for (let n=1; n<=13; n++) {
    for (let p=1; p<=n; p++) {
        output += '*';
    }
    console.log(output);
    output = "";
}

// WHILE LOOP

j=0;
while (j<=10) {
    console.log(j);
    j++;
}

k=100;
while (k>=0) {
    console.log(k);
    k--;
}

m=1;
while (m<100) {
    if (m % 2 === 0) {
        console.log(m);
    }
    m++;
}

output = "";
n=1;
while (n<=13) {
    p=1;
    while (p<=n) {
        output += '*';
        p++;
    }
    console.log(output);
    output = "";
    n++;
}

// DO ... WHILE LOOP

j=0;
do {
    console.log(j);
    j++;
} while (j<=10);

k=100;
do {
    console.log(k);
    k--;
} while (k>=0);

m=1;
do {
    if (m % 2 === 0) {
        console.log(m);
    }
    m++;
} while (m<100);

output = "";
n=1;
do {
    p=1;
    do {
        output += '*';
        p++;
    } while (p<=n);
    console.log(output);
    output = "";
    n++;
} while (n<=13);