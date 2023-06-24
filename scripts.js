"use strict"

// рисунок елочка
let result = "";
const lenght = 7;

for (i = 1; i < lenght; i++) {
    for (j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);



for (i = 5; i < 11; i++) {
    console.log(i);
}

for (i = 20; i > 9; i--) {
    if (i === 13) break;
    console.log(i);
}

for (i = 2; i < 11; i++) {
    if (i % 2 > 0) continue;
    console.log(i);
}

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

// let start = 5;
// const end = 11;

// for (let i = 0; i < 6; i++) {
//     for (let j = start; j < end; j++) {
//         start++;
//         arrayOfNumbers[i] = j;
//         i++;
//         if (j > start) {
//             continue;
//         }
//     }
// }
console.log(arrayOfNumbers);

// Не трогаем
return arrayOfNumbers;