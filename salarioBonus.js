var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var salario= parseFloat(valores[1]);
var vendas = parseFloat(valores[2]);

var bonus = salario + (vendas * 0.15);

console.log(nome + "TOTAL = " + bonus.toFixed(2));


