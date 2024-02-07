var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

let array = lines.shift();

let number = array.split(" ")
let smallestValue = parseInt(number[0]);
let position = 0;

for (let i = 1; i < n; i++){
    let nextOne = parseInt(number[i]);

    if(smallestValue > nextOne){
        smallestValue = nextOne;
        position = i
    }    
}


console.log('Menor valor: ' + smallestValue + "\n" + 
'Posicao: ' + position)