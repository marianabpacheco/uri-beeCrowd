var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');
let loop = valores.slice(0,valores.length-1);

let number = parseInt(valores.shift());
let [x,y] = valores.shift().split(" ");
x = parseInt(x);
y = parseInt(y);
let i = 0;

while(i<(loop.length-1)){
    if(x!=0 && y !=0){
        console.log(x/y)
    }
    else if(x!= 0 && y == 0){
        console.log("divisao impossivel")
    }else if(x == 0 && y != 0){
        console.log("0.0")
    }
    [x,y] = valores.shift().split(" ");
    x = parseInt(x);
    y = parseInt(y);
    i++;
    i++;
    
}

