var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');



var A =parseFloat(valores.shift());
var B =parseFloat(valores.shift());



var media = ((A*3.5) + (B*7.5))/11;

console.log("MEDIA = " + media.toFixed(5));


// var input = require('fs').readFileSync('stdin', 'utf8');
// var [a,b,c] = input.split('\n').map(item => parseFloat(item));

// var media = ((a*2) + (b*3) + (c*5))/10;


// console.log("MEDIA = " + media.toFixed(1));
