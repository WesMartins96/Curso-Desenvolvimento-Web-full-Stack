

const express = require('express');
const path = require('path');

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'get')))

app.get("/", (req, res) => {

    // Valores possíveis para o Type de uma resposta no express

    // res.type('.html') => 'text/html'
    // res.type('html') => 'text/html'
    // res.type('txt') => 'text/plain'
    // res.type('json') => 'application/json'
    // res.type('application/json') => 'application/json'
    // res.type('png') => 'image/png'
    res.type("html");
    res.send("<button>Hello World from GET</button>");

})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server runing on Port: ${PORT}`);
})