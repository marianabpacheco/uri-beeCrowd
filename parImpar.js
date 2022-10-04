const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let totalNumeros = valores.shift();
let numero = valores.shift();
let i = 0;
let mensagem = ''


while (i < totalNumeros) {
    if (numero != 0) {
        if (numero % 2 == 0) {
            mensagem += "EVEN "
        } else {
            mensagem += "ODD "
        }
        if (numero > 0) {
            mensagem += "POSITIVE"
        } else {
            mensagem += "NEGATIVE"
        }

    }else{
       mensagem += "NULL"
    }
    console.log(`${mensagem}`)
    mensagem = ``
    numero = valores.shift()
   i++;
}