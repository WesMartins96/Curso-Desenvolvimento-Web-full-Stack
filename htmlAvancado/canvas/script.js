

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

//Linha em canvas
/*context.moveTo(0, 0);
context.lineTo(250, 250);

context.lineWidth = 5;
context.lineTo(500, 0);

context.strokeStyle = "#FF0000";
context.stroke();
*/


//retangulo em canvas
context.fillStyle = "white";
context.fillRect(10, 10, 100, 200); 

context.strokeStyle = "black";
context.strokeRect(10, 10, 100, 200);



//Realizar animações em canvas
let circle = {
    x: 250,
    y: 250,
    raio: 100,

    //radianos
    inicio: 0,
    fim: 0,
}

function drawCircle(c){

    
    //circulos em canvas
    context.beginPath();
    context.strokeStyle = "gray";
    context.fillStyle = "white";
    context.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    
    context.fill();
    context.stroke();
}

setInterval(function(){
    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);

}, 100);


