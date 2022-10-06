

//arrow functions são maneiras mais atuais de criar funções

//Exemplo normal de função

function dobro(x){
    console.log(2 * x);
}

dobro(5);


//Exemplo de função anonima

let triplo = function(x){
    console.log(3 * x);
}

triplo(5);


//Arrow function

let vezesQuatro = x => (4 * x);

console.log(vezesQuatro(20));

