/**
 * Programação Funcional: 
 * Higher order functions: são as funções Filter, Map e Reduce que todos os arrays tem.
 */



function novoAluno(nome, idade){
    return {nome, idade};
}

let alunos = [
    novoAluno("Wes", 26),
    novoAluno("Beatriz", 24),
    novoAluno("Gael", 44),
    novoAluno("Fiona", 33)
]

console.log(alunos);

//Para realizar o Filter desse array, ou seja filtrar:

//Abaixo é feito de um modo mais "manual"
for (let aluno of alunos) {
    if (aluno.idade < 30) {
        console.log(aluno.nome);
    }    
}


//Usando o Filter
function temMenosDe30(aluno){
    return aluno.idade < 30;
}

let alunosMenoresDe30 = alunos.filter(temMenosDe30);

console.log(alunosMenoresDe30);