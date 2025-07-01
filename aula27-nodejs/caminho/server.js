const { readFileSync, readFile } = require('fs');
const { join } = require('path');

//const path = './olaMundo.txt';

const path = join(__dirname,'./olaMundo.txt');

const data = readFileSync(path,'utf-8');

console.log('Arquivo lido com sucesso no endereço: ',__dirname);

//console.log('conteúdo do arquivo: ',data);

readFile(path, 'utf-8', (err, data)=>{

    if(err){
        console.log('erro ao tentar ler o arquivo ',err);
        return;
    }

    console.log('conteúdo do arquivo: ',data);
});