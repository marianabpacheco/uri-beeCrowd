var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var tempo = parseInt(valores.shift());
var velocidade = parseInt(valores.shift());
var distancia = tempo * velocidade;
var litros = distancia / 12;

console.log(litros.toFixed(3));