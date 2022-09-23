/*arrays tambêm conhecidos como vetor ou vetores, é uma estrutura de dados 
que podem armazenar varios dados em sequencia.*/


//exemplo 1 de criação de array em javascript;
var alunos = new Array(
    "Wesley Martins",
    "Beatriz Cristina",
    "Gael"
);
//aqui você pega todos os elementos do array;
console.log(alunos);


//aqui você pega o primeiro valor de array
console.log(alunos[0]);



//exemplo 2 de criação de array em javascript;
var carros = [
    "Ford Fiesta 2005",
    "VW Golf 1998",
    "Fiat Uno 2012",
    "Chevrolet Camaro SS 1988",
    "Shelby Cobra 1995"
];
console.log(carros);

//para pegar um elemento expecifico do array, pega-se o indice;
console.log(carros[3]);


//para ver o tamanho do indice(quantidade de elementos) do array:
console.log(carros.length);


//usando o For para pegar os valores do array;
for(var i = 0; i < carros.length; i++){
    console.log(carros[i]);
}

//juntando for com array de outra maneira;
for(var i in carros){
    console.log(carros[i]);
}

//outro exemplo
for(var i of carros){
    console.log(i);
}