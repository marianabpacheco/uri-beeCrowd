var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var a = 1;

while(a<=100){
    if(a%2==0){
        console.log(a);
    }
    a = a + 1;
}


