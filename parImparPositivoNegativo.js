var input = require('fs').readFileSync('stdin', 'utf8');
var value = input.split('\n');

var number = value.shift();
var i = 0;
var countEven = 0;
var countOdd = 0;
var countPositive = 0;
var countNegative = 0;


while(i < 5){
    if(number%2 == 0){
        countEven++;
    }else if(number%2 !== 0){  
        countOdd++;
    }
    if(number > 0){
        countPositive++;
    }else if(number < 0){
        countNegative++;
    }
    i++;
    number = value.shift();
}


console.log(countEven + " valor(es) par(es)" + "\n" + 
countOdd + " valor(es) impar(es)" + "\n" + 
countPositive + " valor(es) positivo(s)" + "\n" + 
countNegative + " valor(es) negativo(s)");
