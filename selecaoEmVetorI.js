var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());

for(let i = 0; i <= 3; i++){
    if(x <= 10){
        console.log("A[" + i +"] = " + x.toFixed(1))
    }
    
    x = Number(lines.shift())
}
