var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let numero = parseInt(valores.shift());
let soma = 0;
let j = 0;
let [x, y] = valores.shift().split(" ");
x = parseInt(x);
y = parseInt(y);



while (j < numero) {
    if (x < y) {
        for (i = (x+1); i <= (y - 1); i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    } else if (x > y) {
        for (i = (y+1); i <= (x-1) ; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    }
    console.log(soma)
    j++;
    if(j==numero)break;
    [x, y] = valores.shift().split(" ");
    x = parseInt(x);
    y = parseInt(y);
    soma = 0;
}



