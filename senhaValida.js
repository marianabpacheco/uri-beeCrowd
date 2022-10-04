var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');


let senha = parseInt(valores.shift());
let senhaValida = [];

while(senhaValida.length < 1){
    if(senha != 2002){
        console.log("Senha Invalida");
    }else{
        senhaValida.push(senha);
        console.log("Acesso Permitido");
    }
    senha = parseInt(valores.shift());
}
