var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let x = parseInt(valores.shift());
let y = parseInt(valores.shift());


if (x < y) {
    for (i = (x+1); i <=(y-1); i++) {
        if (i % 5 == 2 || i % 5 == 3) {
            console.log(i);
        }
    }
}else{
    for(i=(y+1); i<=(x-1); i++){
        if(i % 5 == 2 || i % 5 == 3){
            console.log(i);
        }
    }
}