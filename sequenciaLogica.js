var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());



for(i=1; i<(number+1); i++){
    iAoQuadrado = Math.pow(i, 2);
    iAoQuadradoIncrement = iAoQuadrado + 1;
    iAoCubo = Math.pow(i,3);
    iAoCuboIncrement = iAoCubo + 1;
    console.log(i,iAoQuadrado,iAoCubo);
    console.log(i,iAoQuadradoIncrement,iAoCuboIncrement);
}