const express = require('express');
const router = express.Router();

//Usei body-parser para instalar npm install body-parser
// e precisa chama-lo usando require
const bodyParser = require('body-parser');
const posts = require('../model/posts')

//Instalar CORS npm install cors
const cors = require('cors');

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options));

//Rotas          //request    //response
router.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll))
})
                                //requisição  //resposta
router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado com sucesso!")
})


module.exports = router;