var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var distancia = parseInt(valor);
var tempo = parseInt(distancia * 2);


console.log(tempo + ' minutos');



