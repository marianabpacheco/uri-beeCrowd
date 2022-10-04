var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let totalNumeros = parseInt(valores.shift());



for(i=0; i<totalNumeros; i++){
    let [a,b,c] = valores[i].split(" ");
    let media = ((parseFloat(a) * 2) + (parseFloat(b) * 3) + (parseFloat(c) * 5))/10;
    console.log(media.toFixed(1))
    }





