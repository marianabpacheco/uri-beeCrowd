var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let x = parseInt(valores.shift());
let y = parseInt(valores.shift());
let count = 0;


for (let i = (y + 1); i < x; i++){
    if (i % 2 != 0) {
        count+= i;
    }
  }
  console.log(count);



