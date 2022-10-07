

/**
 * Spread Operator é os 3 pontinhos exemplo { ...alunos } assim fazendo parte do array
 */

var pessoa = {
    nome: "Wesley Martins",
    idade: 26
}

var contato = {
    telefone:  "(11) 93021 9826",
    email: "wesmartins@yahoo.com.br"
}

//Exemplo de como Spread Operator é usado

var copia = { ...pessoa }
copia.idade = 88;

console.log(pessoa);
console.log(copia);

//Com o Spread Operator pode-se juntar dois objetos em um só

//Exemplo 1
var dados1 = { ...pessoa, 
    cidade: "São Paulo", 
    telefone: contato.telefone, 
    email: contato.email 
}


//Exemplo 2, neste exemplo o Spread Operator pega todos os dados de pessoa e contato
var dados2 = { ...pessoa, ...contato}

console.log(dados1);
console.log(dados2);
