var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var pi = 3.14159;
var raio = parseFloat(valor);
var volume = (4/3) * pi * Math.pow(raio, 3);

console.log("VOLUME = " + volume.toFixed(3));



