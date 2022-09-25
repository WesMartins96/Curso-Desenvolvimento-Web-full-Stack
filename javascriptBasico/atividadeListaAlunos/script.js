// Criar uma lista com nome - nota1 - nota2 - media - se foi aprovado ou reprovado;


//1. Criei um array de nomes
var nomes = [
    "Wesley Martins",
    "Beatriz Cristina",
    "Gael"
];

//2. Criei um array de notas1
var notasA = [
    7.0,
    6.5,
    9.5
];

//3.Criei um array de notas2
var notasB = [
    8.0,
    7.0,
    8.5
];

//4. função para calcular a media das notas
function media(n1, n2){
    return (n1 + n2) / 2;
}

//5. função pra verificação se o aluno foi aprovado ou não
function passou(media){

    if (media > 7.0) {
        return "Aprovado";
    }else{
        return "Reprovado";
    }

}

//6. Com o For fiz a listagem do conteudo dos arrays
for(var i in nomes){
    var nome = nomes[i];
    var nota1 = notasA[i];
    var nota2 = notasB[i];
    var m = media(nota1, nota2);

    console.log(nome + " - " + nota1 + " - " + nota2 + " - " + passou(m));
};

