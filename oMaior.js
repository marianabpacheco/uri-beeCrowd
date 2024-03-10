var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [a, b, c] = valores.shift().split(" ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);


let maiorAB = (a+b+Math.abs(a-b))/2;
let maior = (maiorAB+c+Math.abs(maiorAB-c))/2;

console.log(maior + " eh o maior");