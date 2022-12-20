
//Aqui chamamos os modulos soma.js e mult.js para usarmos no Cmder
let soma = require("./soma");
let mult = require("./mult")

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] == 's') {
    c = soma(a, b);
}else if (args[0] == 'm') {
    c = mult(a, b);
} else {
    c = "Opção Inválida"
}


console.log(c);


//Com esse código nós separamos soma e mult em modulos e chamamos usando require();
