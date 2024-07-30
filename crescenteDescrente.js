var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [x,y] = valores.shift().split(" ");
x = parseInt(x);
y = parseInt(y);


while(x!==y){
    if(x>y){
        console.log("Decrescente")
    }
    if(x<y){
        console.log("Crescente")
    }
    [x,y] = valores.shift().split(" ");
    x = parseInt(x);
    y = parseInt(y);
    if(x==y) break;
}

