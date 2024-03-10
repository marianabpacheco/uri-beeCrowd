//erro no bee

var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let vertOuInvert = valores.shift().trim();
let filo= valores.shift().trim();
let dieta = valores.shift().trim();





if(vertOuInvert === 'vertebrado'){
    if(filo === 'ave'){
        if(dieta === 'carnivoro'){
            console.log('aguia')
        }
        if(dieta === 'onivoro'){
            console.log('pomba')
        }
    }
    if(filo === 'mamifero'){
        if(dieta === 'onivoro'){
            console.log('homem')
        }
        if(dieta === 'herbivoro'){
            console.log('vaca')
        }
    }
}

if(vertOuInvert === 'invertebrado'){
    if(filo === 'inseto'){
        if(dieta === 'hematofogo'){
            console.log('pulga')
        }
        if(dieta === 'herbivoro'){
            console.log('lagarta')
        }
    }
    if(filo === 'anelideo'){
        if(dieta === 'hematofogo'){
            console.log('sanguessuga')
        }
        if(dieta === 'onivoro'){
            console.log('minhoca')
        }
    }
}

