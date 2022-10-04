var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [x, y] = valores.shift().split(" ");
x = parseInt(x);
y = parseInt(y);
let mensagem = ''
let soma = 0; 

while(x > 0 || y > 0){
    if(x>y){
        for(i=y;i<=x;i++){
            mensagem += `${i} `
            soma += i;
        }
        console.log(`${mensagem}Sum=${soma}`)
    }else{
        for(i=x;i<=y;i++){
            mensagem += `${i} `
            soma += i;
        }
        console.log(`${mensagem}Sum=${soma}`)
    }
    [x, y] = valores.shift().split(" ");
    x = parseInt(x);
    y = parseInt(y);
    soma = 0
    mensagem = ``
    if(x<=0 || y<=0) break;
}

