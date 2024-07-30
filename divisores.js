var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = Number(valores.shift());

for(let i=1;i<=6;i++){
    if(number%i==0){
        console.log(i)
    }
    
}