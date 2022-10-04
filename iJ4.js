//erro no bee

var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

let i = 0;
let j = 1;
let loop = 0;


while(i<2){
    console.log("I=" + i.toFixed(1) + " J=" + (j + i));
    console.log("I=" + i.toFixed(1) + " J=" + ((j+=1) + i).toFixed(1));
    console.log("I=" + i.toFixed(1) + " J=" + ((j+=1) + i).toFixed(1));
    i+=0.2;
    j-=2;
    loop++;
}