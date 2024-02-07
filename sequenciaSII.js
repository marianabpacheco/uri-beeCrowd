var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let S = 1;
let j = 3;

for(let i = 2; j <= 39; i*=2){
   S += j/i;

   j += 2;
}

console.log(S.toFixed(2));