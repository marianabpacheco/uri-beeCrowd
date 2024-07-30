var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let matriz = [];
let operation = lines.shift().replace(/\r/g, "");


for (let i = 0; i <= 11; i++) {

    let array = [];

    for (let i = 0; i <= 11; i++) {
        let number = Number(lines.shift());
        array[i] = number;
    }

    matriz.push(array);
}

calc(operation);

function calc(operation) {

    if (operation == 'S') {

        let sum = 0;
        let x = 10;

        for(let i = 0; i <= 11; i++){
            // const diagonal = matriz[i][i];
            for(let j = x; j >= 0; j--){
                sum += matriz[i][j];
            }
            x -= 1;
        }

        console.log(sum.toFixed(1));
    }

    if(operation == 'M'){
        let avg = 0;
        let x = 10;

        for(let i = 0; i <= 11; i++){
            for(let j = x; j >= 0; j--){
                avg += matriz[i][j];
            }
            x -= 1;
        }

        avg = avg / 66.0;

        console.log(avg.toFixed(1));
    }
}