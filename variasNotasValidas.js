
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');


let nota = parseFloat(valores.shift());
let notasValidas = [];
let opcao = 0;


const calcularMedia = (notasValidas) => {
    let media = 0;
    let soma = 0;
    notasValidas.forEach(nota => {
        soma += nota;
    });
    media = (soma / notasValidas.length).toFixed(2);
    console.log(`media = ${media}`);
}



while (opcao != 2) {
   while(notasValidas.length<2){

         if(nota >= 0 && nota <= 10){
              notasValidas.push(nota);
         }else{
                console.log('nota invalida');
         }
         if(notasValidas.length == 2) {
            calcularMedia(notasValidas);
            break;}
         nota= parseFloat(valores.shift());
         
         
   }
    if (notasValidas.length == 2 ) {
        console.log("novo calculo (1-sim 2-nao)");
        opcao = parseInt(valores.shift());
        if (opcao != 1 && opcao != 2) {
            console.log("novo calculo (1-sim 2-nao)");
            opcao = parseInt(valores.shift());
            switch(opcao){
                case 1:
                    notasValidas = [];
                    nota = parseFloat(valores.shift());
                    break;
                case 2:
                    break;
            }
        } else if (opcao == 1) {
            notasValidas = [];
            nota = parseFloat(valores.shift());
        } else if (opcao == 2) break;
    }
}


