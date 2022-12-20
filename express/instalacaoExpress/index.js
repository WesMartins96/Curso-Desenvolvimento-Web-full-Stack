// https://expressjs.com/pt-br/

// para realizarmos a instalação do ExpressJs usamos 
// Primeiro o Cmder (npm init) ou (npm init -y) automatiza a instalação
// Cmder (npm install express --save) 


const express = require('express');

const app = express();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server runing on Port: ${PORT}`);
})