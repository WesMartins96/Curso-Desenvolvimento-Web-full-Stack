

let image = document.getElementById("like");


// ao clicar na imagem ela muda para outra
image.addEventListener("click", function () {

    let lastImage = image.getAttribute("src");
    image.setAttribute("src", "./images/deslike.jpg")

    console.log(lastImage);

})