var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var segundosTotal = parseInt(valor);
var horas = parseInt(segundosTotal / 3600);
var minutos = parseInt((segundosTotal % 3600) / 60);
var segundos = parseInt((segundosTotal % 3600) % 60);

console.log(horas + ":" + minutos + ":" + segundos);



