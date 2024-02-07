var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let cases = Number(lines.shift());
let i = 0;
let msg = '';
let number = Number(lines.shift());


while (i < cases) {
    if (number === 0) {
        msg += 'NULL';
    } else {
        if (number % 2 == 0) {
            msg += 'EVEN '
        } else {
            msg += 'ODD '
        }
        if (number > 0) {
            msg += 'POSITIVE'
        } else {
            msg += 'NEGATIVE'
        }
    }
    console.log(msg)
    msg = '';
    number = Number(lines.shift());
    i++;
}