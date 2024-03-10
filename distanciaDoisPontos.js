const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [x1,y1] = valores.shift().split(" ");
let [x2,y2] = valores.shift().split(" ");

let distance = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));

console.log(distance.toFixed(4))