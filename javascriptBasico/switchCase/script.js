var nota1 = 8.0;
var nota2 = 1.0;

var media = (nota1 + nota2) / 2;

var conceito = "";

//primeiro uma condição é realizada para assim então ser feita um switch/case
if (media >= 8) {
    conceito = "Ótimo";

}else if (media >= 6.5) {
    conceito = "Bom"

}else{
    conceito = "Regular"

}

console.log(media);
console.log(conceito);

//usando switch/case para criar varias opções de escolhas

//Assim é uma estrutura de switch/case em javascript
switch (conceito) {
    case "Ótimo":
        console.log("Parabêns, você é um ótimo aluno");
        break;

    case "Bom":  
        console.log("Você está no caminho certo");
        break;

    case "Regular":
        console.log("Estude mais!")         
        break;

    default:
        console.log("Error 404!")
        break;
}