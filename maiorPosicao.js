var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = valores.shift();
number = parseInt(number)
let i = 1;
let aux = 0;
let posicao = 0;

while(i<=100){
   if(number>aux){
    aux = number
    posicao = i
   }

   number = valores.shift();
   number = parseInt(number);
  
   i++;
}

console.log(`${aux}\n${posicao}`)


