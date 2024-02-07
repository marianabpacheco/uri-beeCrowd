var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');


let x = parseInt(lines.shift());
let string = '';


while(x != 0){
    for(let i = 1; i <= x; i++){
        if(i == x ){
            string += i;
        }else{
            string += i + ' ';
        }
    }
    console.log(string)

    string = ''

    x = lines.shift()
}

