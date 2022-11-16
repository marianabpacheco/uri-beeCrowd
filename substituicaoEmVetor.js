var input = require('fs').readFileSync('stdin', 'utf8');
var value = input.split('\n');


let arr = value.map(Number)



for(i = 0; i < arr.length; i++){
    if(arr[i] < 1){
        arr[i] = 1; 
    }

    console.log(`X[${i}] = ${arr[i]}`)
}

