var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var diasTotal = parseInt(valor);
var anos = parseInt(diasTotal / 365);
var meses = parseInt((diasTotal % 365) / 30);
var dias  = parseInt((diasTotal % 365) % 30);



console.log(anos + " ano(s)" + "\n" + meses + " mes(es)" + "\n" + dias + " dia(s)");



