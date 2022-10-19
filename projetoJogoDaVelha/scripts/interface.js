document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})


function handleClick(event){

    console.log(event.target);

    let square = event.target;
    let positon = square.id;

    if (handleMove(positon)) {

        setTimeout(() => {
            alert("O JOGO ACABOU")
        }, 10);
        
    } ;
    updateSquares();
}


function updateSquares(){

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}