var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let line = Number(lines.shift());
let operation = lines.shift().replace(/\r/g, "");


for (let i = 0; i <= 11; i++) {

    let array = [];

    for (let i = 0; i <= 11; i++) {
        let number = Number(lines.shift());
        array[i] = number;
    }

    matriz.push(array);
}

calc(line, operation);

function calc(line, operation) {

    if (operation == 'S') {

        let sum = 0;
        for (let i = 0; i <= 11; i++) {
            sum += matriz[line][i];
        }

        console.log(sum.toFixed(1));
    }

    if(operation == 'M'){
        let avg = 0;

        for (let i = 0; i <= 11; i++) {
            avg += matriz[line][i];
        }
        avg = avg / 12;

        console.log(avg.toFixed(1));
    }
}