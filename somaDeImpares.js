var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let totalNumeros = parseInt(valores.shift());
let soma = 0;
let j = 0;
let [x, y] = valores.shift().split(" ");
let i = 0;

while (j < totalNumeros) {
    let [x, y] = valores.shift().split(" ");
    console.log(x, y);
    if (x < y) {
        for(i = x; i <= y; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
        console.log(soma)
    }else if (x > y) {
        for (i = (y+1); i > x; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
        console.log(soma)
    }
    j++;
    [x,y] = valores.shift().split(" "); 
}



