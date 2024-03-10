var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = parseInt(valores);
let i = 1;

while(i<=10){
    if(number > 2 && number < 1000){
        console.log(i + " x " + number + " = " + (i * number));
    }
    i++;
}


