//npm i express body-parser ejs

const express = require('express');
const app = express();
const porta = 8080;
const bodyParser = require('body-parser');

//Configurar EJA como mecânismo de visualização
app.set('view engine', 'ejs');
app.set('views',__dirname + 'views');

//Configurar os arquivos da pasta public
app.use(express.static('public'));

//Configurar o processamento de dados do forms
app.use(bodyParser.urlencoded({extended: true}));


//Dados
const post = [
    {
        id: 1,
        titulo: 'Primeira Postagem',
        conteudo: 'Esse é o conteúdo da primeira postagem'
    },
    {
        id: 2,
        titulo: 'Segunda Postagem',
        conteudo: 'Esse é o conteúdo da segunda postagem'
    }
];

//Rota principal
app.get('/', (req, res)=>{
    res.render('index',{ posts });
});


//Rota para exibir os detalhes de um post
app.get('/post/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    res.render('post', { post });
})

//Rota para exibir o formulario de add
app.get('/add', (req, res)=> {
    res.render('add');
});

//rota para processar os dados do forms de add
app.post('/add', (req, res) =>{
    const { titulo, conteudo } = req.body;
    const id = post.length + 1;

    post.push({id, titulo, conteudo});
    res.redirect('/');
});

//subir o servidor
app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
});
