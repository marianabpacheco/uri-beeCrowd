var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let [nota1,nota2,nota3,nota4] = valores.shift().split(" ");

let mediaAluno = (parseFloat(nota1 * 2) + parseFloat(nota2 * 3) + parseFloat(nota3 * 4) + parseFloat(nota4 * 1))/10;


console.log("Media: " + mediaAluno.toFixed(1));
if(mediaAluno >= 7){
    console.log("Aluno aprovado");
}else if(mediaAluno < 5){
    console.log("Aluno reprovado");
}

if(mediaAluno >= 5 && mediaAluno < 7){
    console.log("Aluno em exame");
    let notaExame = parseFloat(valores.shift());
    console.log("Nota do exame: " + notaExame);
    const calcNotaExame = (media, notaExame) =>  (media + notaExame)/2;

    if(calcNotaExame(mediaAluno, notaExame) >= 5){
        console.log("Aluno aprovado");
    }else if(calcNotaExame(mediaAluno, notaExame) < 5){
        console.log("Aluno reprovado");
    }

    console.log("Media final: " + calcNotaExame(mediaAluno, notaExame).toFixed(1));
}