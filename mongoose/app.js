const express = require('express');
const app = express()
const port = 3000

//Para instalar o Mongoose (npm install mongoose) e require para usar
const mongoose = require('mongoose');


//criar conexao com o banco usando mongoose
mongoose.connect('mongodb://localhost/links')

let db = mongoose.connection;

console.log(db);



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listener on port ${port}`));


