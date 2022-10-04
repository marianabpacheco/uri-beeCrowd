var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var valor = valores.shift().split(" ");
let a = parseFloat(valor[0]);
let b = parseFloat(valor[1]);
let c = parseFloat(valor[2]);
let perimetro = a+b+c;
let areaTrap = ((a+b)*c)/2;

if ((a + b) > c && (a + c) > b && (b + c) > a) {
   console.log("Perimetro = " + perimetro.toFixed(1));
}else{
    console.log("AREA = " + areaTrap.toFixed(1));
}
