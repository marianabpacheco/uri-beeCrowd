var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

let i = 1;
let j = 7;
let loop = 0;


while(loop<5){
    console.log("I=" + i + " J=" + j);
    console.log("I=" + i + " J=" + (j-=1));
    console.log("I=" + i + " J=" + (j-=1));
    i+=2;
    j+=2;
    loop++;
}