
// Este exemplo é criando um array de turma e uma função para calcular media;
var calcMedia = function(){
    return (this.nota1 + this.nota2) / 2;
}

var turma = [
    {nome: "Wesley", nota1: 9.0, nota2: 7.0, media: calcMedia},
    {nome: "Beatriz", nota1: 5.0, nota2: 4.5, media: calcMedia}

]

var alunoW = turma[0];

console.log(alunoW);
console.log(alunoW.media());


var alunoB = turma[1];
console.log(alunoB);
console.log(alunoB.media());



//Um exemplo usando construtores em javascript
function criarAluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1 + this.nota2) / 2;
        }
    }
}

//Aqui chamamos o construtor dentro de uma variavel passando todos os parametros.
var aluno = criarAluno("Gael", 7.5, 6.0);

console.log(aluno);
console.log(aluno.media());

