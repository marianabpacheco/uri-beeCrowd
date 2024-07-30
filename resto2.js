var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = parseInt(valores);
let i = 1;


while(i<10000){
    if(i%number == 2){
        console.log(i);
    }
    i++;
}



