
//Importar modulo fs para trabalhar com arquivos
let fs = require('fs');

    // Assim se cria um arquivo de texto com writeFile
    // fs.writeFile('teste.txt', 'Hello World', function(error){
    //     if (error) {
    //         throw error
    //     };


    // console.log("Arquivo criado com sucesso!");
    // })


    //Podemos usar o appendFile para concatenar o conteudo do arquivo
    // fs.appendFile('teste.txt', '- olá mundo', function(error){
    //     if (error) {
    //         throw error
    //     };
    //     console.log("Arquivo Atualizado com sucesso!");
    // })


    //Podemos usar o unlink para Apagar o arquivo
    // fs.unlink('teste.txt', 'Hello World', function(error){
    //     if (error) {
    //         throw error
    //     };
    //     console.log("Arquivo Apagado com sucesso!");
    // })

    
    //Podemos usar o rename para Renomear o arquivo
    // fs.rename('teste.txt', 'NovoArquivo.txt', function(error){
    //     if (error) {
    //         throw error
    //     };
    //     console.log("Arquivo renomeado com sucesso!");
    // })

    //para lermos um arquivo usamos o readFile
    fs.readFile('teste.txt', 'UTF8', function(error, data){
        if (error) {
            throw error
        };


    console.log(data);
    })