var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let column = Number(lines.shift());
let operation = lines.shift().replace(/\r/g, "");


for (let i = 0; i <= 11; i++) {

    let array = [];

    for (let i = 0; i <= 11; i++) {
        let number = Number(lines.shift());
        array[i] = number;
    }

    matriz.push(array);
}

calc(column, operation);

function calc(column, operation) {

    if (operation == 'S') {

        let sum = 0;
        for (let i = 0; i <= 11; i++) {
            sum += matriz[i][column];
        }

        console.log(sum.toFixed(1));
    }

    if(operation == 'M'){
        let avg = 0;

        for (let i = 0; i <= 11; i++) {
            avg += matriz[i][column];
        }
        avg = avg / 12;

        console.log(avg.toFixed(1));
    }
}