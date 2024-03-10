var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [x,y] = valores.shift().split(" ");
x = parseInt(x);
y = parseInt(y);
let i = 0;


while (x != 0 && y != 0) {
    if(x>0 && y>0){
        console.log("primeiro");
    }else if(x<0 && y>0){
        console.log("segundo");
    }else if(x<0 && y<0){
        console.log("terceiro");
    }else if(x>0 && y<0){
        console.log("quarto");
    }
    i++;
    [x,y] = valores.shift().split(" ");
    x = parseInt(x);
    y = parseInt(y);
}


