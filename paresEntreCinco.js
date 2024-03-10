var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var numero = valores.shift();
var i = 0;
var contador = 0;


while(i < 5){
    if(numero%2 == 0){
        contador++;
    }
    i++;
    numero = valores.shift();
}


console.log(contador + " valores pares");
