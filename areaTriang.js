var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var raio = parseFloat(valor);

var area =  3.14159 * (raio * raio);

console.log("A=" + area.toFixed(4));

