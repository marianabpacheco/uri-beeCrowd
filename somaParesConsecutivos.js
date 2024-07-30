var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());

while (x != 0) {
    let sumNumber = isEvenOrOdd(x);
    let sum = 0;

    for (let i = 0; i < 5; i++) {
        sum += sumNumber;
        sumNumber += 2;
    }


    console.log(sum)

    if (lines.length != 0) {  
       x = Number(lines.shift());
    }
}




function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return number;
    } else {
        return number +1;
    }
}