var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = Number(valores.shift());

for(let i = (number-1); i >= 1; i--){
    number = number * i;
}

console.log(number)