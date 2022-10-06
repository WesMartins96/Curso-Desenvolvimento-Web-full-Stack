/**
 * callback é pegar uma função e passar como argumento de uma função
 */

function ola(){
    console.log("olá");
}

function tchau(){
    console.log("tchau");
}

function saudacao(s, nome){
    //assim é apenas um exemplo de callback, chamando uma função dentro da função
    s();
    console.log(nome);
}

ola();
tchau();

saudacao(tchau, "Wesley");


let usuarios = [
    "Bia",
    "Gael",
    "Wes"
]

//assim é usado callback
function inserirUsuario(nome, callback){

    setTimeout(() => {
        usuarios.push(nome)
        callback;
    }, 1000);
    
}

function listarUsuarios(){
    console.log(usuarios);
}


inserirUsuario("Fiona", listarUsuarios);


