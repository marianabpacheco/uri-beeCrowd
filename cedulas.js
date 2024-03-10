var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var valorTotal = parseInt(valor);
var notas100 = parseInt(valorTotal / 100);
var notas50 = parseInt((valorTotal % 100) / 50);
var notas20 = parseInt(((valorTotal % 100) % 50) / 20);
var notas10 = parseInt((((valorTotal % 100) % 50) % 20) / 10);
var notas5 = parseInt(((((valorTotal % 100) % 50) % 20) % 10) / 5);
var notas2 = parseInt((((((valorTotal % 100) % 50) % 20) % 10) % 5) / 2);
var notas1 = parseInt(((((((valorTotal % 100) % 50) % 20) % 10) % 5) % 2) / 1);


console.log(valorTotal + '\n' + notas100 + ' nota(s) de R$ 100,00' + 
'\n' + notas50 + ' nota(s) de R$ 50,00' + '\n' + notas20 + 
' nota(s) de R$ 20,00' + '\n' + notas10 + ' nota(s) de R$ 10,00' + 
'\n' + notas5 + ' nota(s) de R$ 5,00' + '\n' + notas2 + 
' nota(s) de R$ 2,00' + '\n' + notas1 + ' nota(s) de R$ 1,00');




