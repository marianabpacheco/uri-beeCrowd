
var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');
let [horaInicial,horaFinal] = valores.shift().split(" ");
horaInicial = parseInt(horaInicial);
horaFinal = parseInt(horaFinal);
let horasDias = 24;


if(horaInicial<horaFinal){
    console.log("O JOGO DUROU " + (horaFinal - horaInicial) + " HORA(S)");
}else if(horaInicial>horaFinal){
    console.log("O JOGO DUROU " + (horasDias - horaInicial + horaFinal) + " HORA(S)");
}else{
    console.log("O JOGO DUROU 24 HORA(S)");
}
