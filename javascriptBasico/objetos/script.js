
//Criação de objetos em javascript


// Exemplo 1 da criação de um objeto
var aluno = {
    //propriedade
    nome: "Wesley Martins",
    nota: 9.5,
    
    notas: [
        7,
        8
    ],

    //Pode-se criar um metodo que nada mais é que uma função dentro do objeto
    //Exemplo de metodo
    media: function(n1, n2){
        return (n1 + n2) / 2;
    }

};

//para chamar o metodo media;
console.log("media: " + aluno.media(aluno.notas[0], aluno.notas[1]));


// Exemplo 1 de como chamar a propriedade do objeto
console.log(aluno.nome);
console.log(aluno.nota);

// Exemplo 2 de como chamar a propriedade do objeto
console.log(aluno["nome"]);
console.log(aluno["nota"]);




// Exemplo 2 da criação de um objeto
var carro = new Object();

carro.marca = "Ford";
carro.modelo = "Fiesta";
carro.cor = "Preto";
carro.ano = 2005;


//Basta chamar o objeto pra usar as propriedades dele
console.log(carro);