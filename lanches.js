var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

var [codigo,qtdItem] = valores.shift().split(' ');

switch(codigo){
    case '1':
        console.log('Total: R$ ' + (qtdItem * 4.00).toFixed(2));
        break;
    case '2':
        console.log('Total: R$ ' + (qtdItem * 4.50).toFixed(2));
        break;
    case '3':
        console.log('Total: R$ ' + (qtdItem * 5.00).toFixed(2));
        break;
    case '4':
        console.log('Total: R$ ' + (qtdItem * 2.00).toFixed(2));
        break;
    case '5':
        console.log('Total: R$ ' + (qtdItem * 1.50).toFixed(2));
        break;
}






