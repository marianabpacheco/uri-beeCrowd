var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var a = parseInt(valores[0]);
var b = parseInt(valores[1]);
var c = parseInt(valores[2]);
var d = parseInt(valores[3]);

var diferenca = (a * b - c * d);

console.log(diferenca);