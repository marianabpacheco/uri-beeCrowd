var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = Number(valores.shift());
let numbers = [0,1];
let fib = 0;  
let last = numbers[numbers.length - 1];
let lastButOne = numbers[numbers.length -2];
let msg = ''



while(numbers.length != number){
    fib = last + lastButOne;
    numbers.push(fib);
    last = numbers[numbers.length - 1];
    lastButOne = numbers[numbers.length -2];
}

numbers.map((n)=>{
    n.toString();
    msg += `${n} `
})

console.log(msg.trim())