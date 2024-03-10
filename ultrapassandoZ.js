var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let x = Number(valores.shift());
let number = Number(valores.shift());
let z = 0;
let count = 1;

while(z == 0 ){
    if(x >= number){
        number = Number(valores.shift());
    }
    if(x < number){
        z = number;
    }
}

for(i=(x+1);i<z;i++){
    if(x < z){
        x += i;
        count++;
    }
}


console.log(count)
