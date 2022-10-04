var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [a, b, c] = valores.shift().split(" ");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let numeros = [a, b, c];
numeros.sort((a, b) => b - a);

a = numeros.shift();
b = numeros.shift();
c = numeros.shift();

function verificarTriangulo(){
    if(a <= b + c){
        return "NAO FORMA TRIANGULO";
    }else
    return true;
}


switch(verificarTriangulo()){
    case (a*a) == (b*b) + (c*c):
        console.log("Triangulo Retangulo");
        break;
    case (a*a) > (b*b) + (c*c):
        console.log("Triangulo Obtusangulo");
        break;
    case (a*a) < (b*b) + (c*c):
        console.log("Triangulo Acutangulo");
        break;
   
}



if (a === b && b === c) {
    console.log("Triangulo Equilatero");
}else if(a === b || b === c || a === c){
    console.log("Triangulo Isosceles");
}