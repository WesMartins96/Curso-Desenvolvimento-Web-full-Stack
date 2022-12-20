//Terceiro tem que importar o sharp para poder usa-lo
const sharp = require('sharp');

//Importar o compress
const compress_images = require('compress-images');

//Pra usar fs precisamos importar com o require
let fs = require('fs');

//Primeiro criar Pacote Cmder (npm init) assim criará um package.json

let path = process.argv[2]
let width = Number(process.argv[3]);

//Segundo entrar no site https://sharp.pixelplumbing.com/install e realizar
//a instalação do sharp, para resize das imagens.
//Usa-se o Cmder (npm install sharp), criando assim uma pasta node_modules
function resize(inputpath, outputPath ,width){

    sharp(inputpath).resize({
        width: width
    }).toFile(outputPath, (err) =>{
        if(err){
            console.log(err);
        }else{
            console.log('Imagem redimensionada com sucesso!');
            compress(outputPath, "./compressed/")
        }
    })
}

// realizando toda essa ação de resize usando Cmder (node app.js nomeDaImagem.png tamanho)
// vemos o resultado do resize dentro da pasta temp



//Para começar a usar o compressed = Cmder (npm install compress-images --save-dev)
// o tamanho fica comprimido, gerando um arquivo mais leve
function compress(pathInput, outputPath) { 
    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
                    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
                    { svg: { engine: "svgo", command: "--multipass" } },
                    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");


        //após fazer o resize o ideal é apagar o aquivo dentro da pasta
        // temp(temporario)
        fs.unlink(pathInput, (err) => {
            if (err) {
                console.log(err);
            }else{
                console.log(pathInput, " Apagado");
            }
        })
    });
 }

resize(path, './temp/output_resize.png' ,width);

