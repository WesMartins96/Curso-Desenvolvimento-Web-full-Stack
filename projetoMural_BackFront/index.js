const PORT = 3000;

//usei express neste projeto para instalar npm install express --save,
// e precisa chama-lo usando require
const express = require('express');

const path = require('path');
const apiRoute = require('./routes/api')


const app = express();

//Para garantir que uma chamada a api não busque por uma pasta chamada api,
// devemos usar a chama das rotas conforme mostrado abaixo.


app.use('/', express.static(path.join(__dirname, "public")));
app.use('/api', apiRoute);// essa linha deve ser chamada primeiro






app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
