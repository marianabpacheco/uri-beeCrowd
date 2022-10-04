var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [a, b, c] = valores.shift().split(" ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

let numeros = [a, b, c];
numeros.sort((a, b) => a - b);


console.log(numeros.shift() + '\n' + numeros.shift() + '\n' + numeros.shift() + '\n' + '\n' + a + '\n' + b + '\n' + c);