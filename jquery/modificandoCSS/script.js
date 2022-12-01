//adicionar uma classe css ao elemento html usando jquery.
$("h1").addClass("bg-blue");

//remover o a classe css bg-blue depois de 2 segundos.
 setTimeout(() => {
    $("h1").removeClass("bg-blue");
 }, 2000)


 //podemos modificar css com jquery desta forma.
$("h1").css({
    "font-size": "80px",
    "font-family" : "fira code",
    "color": "aqua"
}) 