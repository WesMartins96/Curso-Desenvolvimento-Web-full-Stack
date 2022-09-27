


//script para mudar um elemento após carregar a pagina

function loaded(){
    let t = document.getElementById("titulo");
    t.innerHTML = "Recarregado"

    //chamando a função de mudar texto ao clicar
    t.onclick = mudarTexto;
}

//evento realizado ao clicar
function mudarTexto(){
    this.innerHTML = "Recarregado ao clicar"
}