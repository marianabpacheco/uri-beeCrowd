var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let x= parseInt(valores.shift());
let y= parseInt(valores.shift());
let soma = 0;

if(y>x){
    for(i=x;i<=y;i++){
        if(i%13 !== 0){
           soma += i;   
           
        }
    }
    console.log(soma)  
}else{
    for(i=y;i<=x;i++){
        if(i%13 !== 0){
            soma+=i;
        }
    }
    console.log(soma)  
}
