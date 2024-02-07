var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());
let array = [];
let novoArray  = [];
let j = 0;

for(let i = 0; i <= 19; i++){
    array.push(x)
    x = Number(lines.shift());
}

for(let i = 19; i >= 0; i--){
    novoArray[j] = array[i];
    j++;
}


for( let i in novoArray){
    console.log("N[" + i + "] = "  + novoArray[i])
}