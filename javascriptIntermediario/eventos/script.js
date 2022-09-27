

function cliqueAqui(){
    console.log("Executando a função")
}


//função para realizar a mudança, trabalhando junto com o onChange()
function changeAqui(input){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = input.value;
}

//função para esconder um elemento
function hideH1(){
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.display = "none";
}