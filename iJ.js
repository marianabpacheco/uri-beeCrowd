var input = require('fs').readFileSync('stdin', 'utf8');
var valor = input.split('\n');

let i = 1;
let j = 60;
let loop = 0;

while(loop<13){
    console.log("I=" + i + " J=" + j);
    console.log("I=" + i + " J=" + j);
    i+=3;
    j-=5;
    loop++;
}

