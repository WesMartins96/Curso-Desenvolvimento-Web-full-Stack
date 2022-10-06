"use strict";
//use strict obriga a usabilidade do var para declarar uma variavel

/*
Toda variavel local pode ser acessada apenas no escopo que ela foi criada,
uma função, por exemplo. Toda variavel global, pode ser acessada de qualquer 
lugar do programa.
*/


function imprimir(){
    var x = 7;
    console.log(x);
}

imprimir();
console.log(window);