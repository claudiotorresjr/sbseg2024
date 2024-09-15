const fs = require('fs');
const path = require('path');

fs.readFile("/app/flag.txt", 'utf8', (err, data) => {
    if (err) {
        return console.error('Erro ao ler o arquivo:', err);
    }
    
    console.log('Conteúdo do arquivo:');
    console.log(data);
});