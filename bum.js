var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let numero = parseInt(valores.shift());
let i = 0;
let a = 1; 
let b = 2;
let c = 3;

console.log(a + " " + b + " " + c + " " + "PUM");
for(i=0;i<numero-1;i++){
    console.log((a= a+4) + " " + (b=b+4) + " " + (c=c+4) + " " + "PUM");
    
}

