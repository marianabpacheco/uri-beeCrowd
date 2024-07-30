var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift()).toFixed(4);
let array = [];
array.push(x);

let number = x/2;
array.push(number.toFixed(4));

for(let i = 0; i <= 98; i++){
    number = number/2;
    number = number.toFixed(4);

    array.push(number);
}

for(let i = 0; i <= 100; i++){
    console.log(`N[${i}] = ${array[i]}`)
}

