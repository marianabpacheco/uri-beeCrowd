var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let S = 1;


for(i = 2; i <= 100; i++){
    S += 1/i;

}

console.log(S.toFixed(2))