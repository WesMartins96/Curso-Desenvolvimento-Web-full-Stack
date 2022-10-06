/*this é sempre um objeto que depende do que fazemos*/

function speakGeneric(){
    console.log(this.sound);
}


let dog ={
    sound: "au au au",
    speak: speakGeneric
}


let cat ={
    sound: "miau miau",
    speak: speakGeneric
}



dog.speak();

cat.speak();


//bind é importante para utilizar frameworks
let bindedFunction = speakGeneric.bind(cat);
bindedFunction();