var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var [a,b] = valores.shift().split(" ");

if((b/a)%2 === 0 || (a/b)%2 === 0){
    console.log("Sao Multiplos");
}else if((b/a)%2 !== 0 || (a/b)%2 !== 0){
    console.log("Nao sao Multiplos");
}


