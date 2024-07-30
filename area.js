const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var [A,B,C] = valores.shift().split(" ");


var areaTriR = parseFloat((A*C))/2;
var areaCirculo = 3.14159 * (C*C);
var areaTrapezio = ((parseFloat(A)+parseFloat(B))*C)/2;
var areaQuadrado = parseFloat(B*B);
var areaRetangulo = parseFloat(A*B);

console.log("TRIANGULO: " + areaTriR.toFixed(3) + "\n" + "CIRCULO: " + areaCirculo.toFixed(3) + "\n" + "TRAPEZIO: " + areaTrapezio.toFixed(3) + "\n" + "QUADRADO: " + areaQuadrado.toFixed(3) + "\n" + "RETANGULO: " + areaRetangulo.toFixed(3));

