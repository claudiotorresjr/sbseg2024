const fs = require('fs');
const path = require('path');

// Diretório que você deseja listar
const directoryPath = "/app";

// Função para listar o conteúdo do diretório
// fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//         return console.error('Erro ao listar o diretório:', err);
//     }
    
//     console.log('Conteúdo do diretório:');
//     files.forEach(file => {
//         console.log(file);
//     });
// });

fs.readFile("/app/flag.txt", 'utf8', (err, data) => {
    if (err) {
        return console.error('Erro ao ler o arquivo:', err);
    }
    
    console.log('Conteúdo do arquivo:');
    console.log(data);
});
