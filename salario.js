var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var numero = parseInt(valores[0]);
var horasTrab = parseInt(valores[1]);
var valorHora = parseFloat(valores[2]);

var salario = horasTrab * valorHora;

console.log("NUMBER = " + numero + "\n" + "SALARY = U$ " + salario.toFixed(2));


