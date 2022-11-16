var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = Number(valores.shift());
let int = Number(valores.shift());
let j = 0;
let count = 0;

while(j < number){
    for(let i = 1;i<=int;i++){
        if(int % i === 0){
            count++
        }
    }
    if(count == 2) console.log(`${int} eh primo`)
    else console.log(`${int} nao eh primo`)
    j++;
    int = Number(valores.shift());
    count = 0;
}