var input = require('fs').readFileSync('stdin', 'utf8');
var value = input.split('\n');


let number = Number(value.shift());
let arr = [];


while(arr.length <= 1000){
    for(let i = 0; i < number; i++){
        arr.push(i)
    }
   
}



for(let i = 0; i < 1000; i++){
    console.log(`N[${i}] = ${arr[i]}`)
}


