//Questao 5

const express = require('express')
const app = express()
const port = 1337

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Página Inicial</title>
            </head>
            <body>
                <h1>Bem-vindo à Minha Página Inicial!</h1>
                <p>Aqui você verá as principais informacoes do nosso site.</p>
            </body>
        </html>
    `);
});

app.get('/api/data', (req, res) => {
    const data = {
        nome: 'Emanuel',
        idade: 19,
        profissao: 'Garoto de programa',
        hobbies: ['basquete', 'jogar']
    };
    res.json(data); 
});

app.listen(port, () =>{
    console.log(`Server Listening at http://localhost:${port}`)
})