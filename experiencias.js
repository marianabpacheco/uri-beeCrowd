var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let number = parseInt(valores.shift());
let [qtdCobaias,tipo] = valores.shift().trim().split(" ");
qtdCobaias = parseInt(qtdCobaias);
let totalCobaias = 0;
let ratos = 0;
let sapos = 0;
let coelhos = 0;
let i = 0;


while(i<number){
   
    if(tipo == "C"){
        coelhos += qtdCobaias;
       
    }
    else if(tipo == "S"){
        sapos += qtdCobaias;
        
    }
    else if(tipo == "R"){
        ratos += qtdCobaias;
      
    }
    i++;
    totalCobaias += qtdCobaias;
    if(i<number){
    [qtdCobaias,tipo] = valores.shift().trim().split(" ");
    qtdCobaias= parseInt(qtdCobaias);
    }
}

const porcentagemAnimal = (animal) => {
    return ((animal * 100) / totalCobaias).toFixed(2);
}



console.log(`Total: ${totalCobaias}\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}\nPercentual de coelhos: ${porcentagemAnimal(coelhos)} %\nPercentual de ratos: ${porcentagemAnimal(ratos)} %\nPercentual de sapos: ${porcentagemAnimal(sapos)} %`);





