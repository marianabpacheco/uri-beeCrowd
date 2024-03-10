var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var valorTotal = parseFloat(valor);
var notas100 = parseInt(valorTotal / 100);
var notas50 = parseInt((valorTotal % 100) / 50);
var notas20 = parseInt(((valorTotal % 100) % 50) / 20);
var notas10 = parseInt((((valorTotal % 100) % 50) % 20) / 10);
var notas5 = parseInt(((((valorTotal % 100) % 50) % 20) % 10) / 5);
var notas2 = parseInt((((((valorTotal % 100) % 50) % 20) % 10) % 5) / 2);
var moedas1 = parseInt(((((((valorTotal % 100) % 50) % 20) % 10) % 5) % 2) / 1);
var moedas50 = parseInt((((((((valorTotal % 100) % 50) % 20) % 10) % 5) % 2) % 1)/0.50);
var moedas25 = parseInt(((((((((valorTotal % 100) % 50) % 20) % 10) % 5) % 2) % 1)%50)/0.25);
var moedas10 = parseInt((((((((((valorTotal % 100) % 50) % 20) % 10) % 5) % 2) % 1)%50)%25)/0.10);
var moedas5 = parseInt(((((((((((valorTotal % 100) % 50) % 20) % 10) % 5) % 2) % 1)%50)%25)%10)/0.5);
var moedas01 = parseInt((((((((((((valorTotal % 100) % 50) % 20) % 10) % 5) % 2) % 1)%50)%25)%10)%5)/0.01);


console.log(valorTotal + '\n' + notas100 + ' nota(s) de R$ 100,00' + 
'\n' + notas50 + ' nota(s) de R$ 50,00' + '\n' + notas20 + 
' nota(s) de R$ 20,00' + '\n' + notas10 + ' nota(s) de R$ 10,00' + 
'\n' + notas5 + ' nota(s) de R$ 5,00' + '\n' + notas2 + 
' nota(s) de R$ 2,00' + '\n' + moedas1 + ' moedas(s) de R$ 1,00' + '\n' + moedas50 + ' moedas(s) de R$ 0,50' + '\n' + moedas25 + ' moedas(s) de R$ 0,25' + '\n' + moedas10 + ' moedas(s) de R$ 0,10' + '\n' + moedas5 + ' moedas(s) de R$ 0,05' + '\n' + moedas01 + ' moedas(s) de R$ 0,01');




