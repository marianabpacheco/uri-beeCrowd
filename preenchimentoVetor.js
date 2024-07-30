var input = require('fs').readFileSync('stdin', 'utf8');
var value = input.split('\n');


let number = Number(value.shift());
let arr = [];

arr.push(number);

while(arr.length <= 10){
    number = number * 2;
    arr.push(number)
   
}


for(let i = 0; i < 10; i++){
    console.log(`N[${i}] = ${arr[i]}`)
}

