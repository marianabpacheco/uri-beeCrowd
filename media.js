var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');



var A =parseFloat(valores.shift());
var B =parseFloat(valores.shift());
var C =parseFloat(valores.shift());


var media = ((A*2) + (B*3) + (C*5))/10;

console.log("MEDIA = " + media.toFixed(1));


// var input = require('fs').readFileSync('stdin', 'utf8');
// var [a,b,c] = input.split('\n').map(item => parseFloat(item));

// var media = ((a*2) + (b*3) + (c*5))/10;


// console.log("MEDIA = " + media.toFixed(1));
