var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');
let array2 = valores.slice(0, valores.length - 1);

let numero = parseInt(valores.shift());
let i = 0;
let countAlcool = 0;
let countGasolina = 0;
let countDiesel = 0;


while (i < array2.length) {
    if (numero != 1 && numero != 2 && numero != 3) {
        numero = parseInt(valores.shift());
        switch(true){
            case numero == 1:
                countAlcool++;
                break;
            case numero == 2:
                countGasolina++;
                break;
            case numero == 3:
                countDiesel++;
                break;
            case numero == 4:
                break;
        }
    } else if (numero == 1) {
        countAlcool++;
    } else if (numero === 2) {
        countGasolina++;
    } else if (numero == 3) {
        countDiesel++;
    } else if (numero == 4) {
        break;
    }

    i++;
    numero = parseInt(valores.shift());

}

console.log(`MUITO OBRIGADO\nAlcool: ${countAlcool}\nGasolina: ${countGasolina}\nDiesel: ${countDiesel}`);



