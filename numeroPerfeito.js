var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = Number(valores.shift());
let int = Number(valores.shift());
let j = 0;
let sumOfDivisors = 0;

while(j < number){
    for(let i = 1;i<int;i++){
        if(int % i === 0){
            sumOfDivisors += i;
        }
    }
    console.log(sumOfDivisors)
    if(sumOfDivisors === int) console.log(`${int} eh perfeito`)
    else console.log(`${int} nao eh perfeito`)
    j++;
    int = Number(valores.shift());
    sumOfDivisors = 0;
}