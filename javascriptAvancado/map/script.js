/**
 * Programação Funcional: 
 * Higher order functions: são as funções Filter, Map e Reduce que todos os arrays tem.
 */

function novoAluno(nome, idade){
    return { nome, idade };
}

let alunos = [
    novoAluno("Wes", 26),
    novoAluno("Beatriz", 24),
    novoAluno("Gael", 44),
    novoAluno("Fiona", 33)
]

function temMenosDe30(aluno){
    return aluno.idade <30;
}


/*
o Map diferente do Filter ele não trás o novo array com os elementos do array atual sendo
filtrados, ele trás um novo array que pode ser criado com os elementos do array atual(principal)
*/

function nomeIdade(aluno){
    return aluno.nome + ", tem " + aluno.idade + " anos";
}

//utiliza-se map desta forma
console.log(alunos.map(nomeIdade));