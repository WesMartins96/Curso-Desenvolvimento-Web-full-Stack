//Terceiro tem que importar o sharp para poder usa-lo
let sharp = require('sharp');


//Primeiro criar Pacote Cmder (npm init) assim criará um package.json

let path = process.argv[2]
let width = Number(process.argv[3]);

//Segundo entrar no site https://sharp.pixelplumbing.com/install e realizar
//a instalação do sharp, para resize das imagens.
//Usa-se o Cmder (npm install sharp), criando assim uma pasta node_modules
function resize(path, width){

    sharp(path).resize({
        width: width
    }).toFile('./temp/output_resize.png', (err) =>{
        if(err){
            console.log(err);
        }else{
            console.log('Imagem redimensionada com sucesso!');
        }
    })
}

// realizando toda essa ação de resize usando Cmder (node app.js nomeDaImagem.png tamanho)
// vemos o resultado do resize dentro da pasta temp
resize(path, width);
