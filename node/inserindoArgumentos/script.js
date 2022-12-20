//Aqui usamos process.argv para pegarmos os numeros no proprio Cmder
let args = process.argv.slice(2);
console.log(args);

//Args transforma em string, por isso usamos o Number, para transformar em Number 
let a = Number(args[0]);
let b = Number(args[1]);
let c = soma(a, b);

function soma(x, y) {
    return x + y;
}

//Vemos o resultado da soma aqui
console.log("Resultado:", c);

// Script executado usando argumentos durante a execução no software Cmder

