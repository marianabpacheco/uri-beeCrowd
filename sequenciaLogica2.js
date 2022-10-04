var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [x,y] = valores.shift().split(' ');

x = parseInt(x);
y = parseInt(y)
let number = 1;
let linhas = ``

