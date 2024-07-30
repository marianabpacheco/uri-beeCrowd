var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let number= Number(lines.shift())
let oddArray = [];
let evenArray = [];
let i = 0;

while(i <= 14){
    if(number % 2 == 0){
        evenArray.push(number);

        if(evenArray.length == 5){
            for( let i in evenArray){
                console.log(`par[${i}] = ${evenArray[i]}`);
            }

            evenArray = [];
        }
    }

    if(number % 2 != 0){
        oddArray.push(number);

        if(oddArray.length == 5){
            for( let i in oddArray){
                console.log(`impar[${i}] = ${oddArray[i]}`);
            }

            oddArray = [];
        }
    }

    number = Number(lines.shift())
    
    i++;
}

for( let i in oddArray){
    console.log(`impar[${i}] = ${oddArray[i]}`);
}

for( let i in evenArray){
    console.log(`par[${i}] = ${evenArray[i]}`);
}