var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var distanciaTotal = parseInt(valores[0]);
var totalComb= parseFloat(valores[1]);

var media = distanciaTotal / totalComb;

console.log(media.toFixed(3) + " km/l");


