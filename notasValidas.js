var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');


let nota = parseFloat(valores.shift());
let notasValidas = [];


while (notasValidas.length < 2) {
    if (nota >= 0 && nota <= 10) {
        notasValidas.push(nota);
    } else {
        console.log("nota invalida");
    }
    
    nota = parseFloat(valores.shift());
}


if (notasValidas.length == 2) {
    console.log("media = " + ((notasValidas[0] + notasValidas[1]) / 2).toFixed(2));
}