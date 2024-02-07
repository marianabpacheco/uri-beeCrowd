var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let initialDay =  Number(lines.shift().split(' ')[1])
let [hour, minutes, seconds] = lines.shift().split(' : ')

console.log(hour, minutes, seconds)
