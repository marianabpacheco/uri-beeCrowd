var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let cases = Number(lines.shift());
let i = 0;
let [number, total] = lines.shift().split(" ").map(Number);


while (i < cases) {
    let sumNumber = isEvenOrOdd(number);
    let sum = 0;

    for (let i = 0; i < total; i++) {
        sum += sumNumber;
        sumNumber += 2;

    }


    console.log(sum)

    if (lines.length != 0) {  
        [number, total] = lines.shift().split(" ").map(Number);
    }
    i++;
}




function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return number + 1;
    } else {
        return number;
    }
}