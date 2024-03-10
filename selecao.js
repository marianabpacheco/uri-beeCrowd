var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var [A,B,C,D] = valores.shift().split(" ");

if(B>C && D>A && C+D>A+B && C>0 && D>0 && A%2 == 0){
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
}