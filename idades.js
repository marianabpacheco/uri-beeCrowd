var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let age = Number(valores.shift());
let ages = [];
let median = 0;


while(age>0){
    ages.push(age);
    age = Number(valores.shift());
}



const calculateMedianAge = () => {
    ages.forEach(function(age) {
        median += age;
    })
    median = median/ages.length;

    return median.toFixed(2);
}


console.log(calculateMedianAge(median))

