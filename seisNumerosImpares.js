var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

var numero = parseInt(valor);
var i = 0;



while(i < 12){
    if(numero%2 !== 0){
        console.log(numero)
    }
    i++;
    numero = numero +1;
}



