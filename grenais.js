var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [golsInter,golsGremio] = valores.shift().split(" ");
golsInter = parseInt(golsInter);
golsGremio = parseInt(golsGremio);
let opcao = 0;
let grenais = 0;
let gremio = 0;
let inter = 0;
let empate = 0;


while (opcao != 2) {
    grenais++;
    if(golsGremio > golsInter){
       gremio++;
    }else if(golsGremio < golsInter){
        inter++;
    }else{
        empate++;
    }
    console.log("Novo grenal (1-sim 2-nao)");
    opcao = parseInt(valores.shift());
    if(opcao == 2){
        break;
    }
    [golsInter,golsGremio] = valores.shift().split(" ");
    golsInter = parseInt(golsInter);
    golsGremio = parseInt(golsGremio);
   
}

console.log(`${grenais} grenais\nInter: ${inter}\nGremio: ${gremio}\nEmpates: ${empate}`);
if(inter>gremio){
    console.log("Inter venceu mais");
}else if(inter<gremio){
    console.log("Gremio venceu mais");
}

