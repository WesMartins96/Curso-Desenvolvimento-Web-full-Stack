const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type' :'text/html'}); 
    //podemos usar 'text-plain' para usarmos textos no response.end("texto aqui")
    
    //podemos usar 'application/json' para usarmos json no response.end({texto: "texto aqui"})
    //EXEMPLO: 
    //response.end(JSON.stringify({texto: "<h1>Hello World!</h1>"}));

    response.end("<h1>Hello World!</h1>");

}).listen(3000, (err) => {
    if (err) {
        console.log(err);
    }else{
        console.log("Servidor rodando na porta 3000");
    }
    
})

//Vemos nessa aula como criar um servidor local para utilizarmos com Node.js