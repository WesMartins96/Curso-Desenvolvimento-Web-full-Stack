//Funções são blocos de códigos, onde pode ser chamado pelo nome da função

// bloco de códigos(function)
function media(){
    var nota1 = 10;
    var nota2 = 8;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

// assim é chamado uma function;
media();



//Funções com argumentos
function numero(num1, num2){
    var soma = num1 + num2;
    console.log("o valor é: " + soma);
}

// aqui é um exemplo de como são criados os valores quando criamos uma função com argumentos
numero(96,4);
numero(200, 150);



//Função pode retornar um valor
function poder(pow1, pow2){
    var nvPoder = pow1 * pow2;

    return nvPoder;
}

//e assim chama a funcao com return
var rpg = poder(12, 50);
console.log("Seu nivel de vida é: " + rpg);

rpg = poder(20, 2);
console.log("Seu nivel de Magia é: " + rpg);

console.log("1" + 2 + 4);
console.log(5 + 4 + "3");