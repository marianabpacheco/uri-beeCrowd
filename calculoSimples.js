var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [codigoPeca1,qtdPeca1,valorPeca1] = valores.shift().split(" ");
let [codigoPeca2,qtdPeca2,valorPeca2] = valores.shift().split(" ");	


let valorTotal = (parseFloat(valorPeca1).toFixed(2)*parseInt(qtdPeca1)) + (parseFloat(valorPeca2).toFixed(2)*parseInt(qtdPeca2));

console.log("VALOR A PAGAR: R$ " + ((valorTotal * 100) / 100).toFixed(2));
