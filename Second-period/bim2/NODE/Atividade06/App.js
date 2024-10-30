
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'adminkey', //chave secreta para sessão
    resave: false, //evita gravar sessões sem alteração
    saveUninitialized: true 
}));

const users = [ //criando um usuário
    { id: 1, username: 'admin', password: 'senha123' }
];

//Middleware de autenticação
function autenticado(req, res, next) {
    if (!req.session.user) {
        return res.status(401).send('Você precisa fazer login primeiro');
    }
    next(); //usuário foi autenticado
}

//Rota do formulário de login
app.get('/login', (req, res) => {
    const form = `
    <form method="post" action="/login"> 
    <label for="username">Usuário:</label>
    <input type="text" name="username" id="username">
    <br>
    <label for="password">Senha:</label>
    <input type="password" name="password" id="password">
    <br>
    <button type="submit">Login</button>
    </form>  
    `;
    res.send(form);
});


//rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const foundUser = users.find(u => u.username === username && u.password === password);

    if (!foundUser) {
        return res.status(401).send('Usuário ou senha inválidos');
    }

    req.session.user = foundUser; //salvando o usuário na sessão
    res.cookie('userInfo', { username: foundUser.username }, { maxAge: 900000000000 });
    const successMessage = `
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e7ffe7;
            color: #4CAF50;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100rem;
            margin: 0;
        }
    </style>
    <div>
        <h1>Login bem-sucedido!</h1>
        <p>Bem-vindo, ${foundUser.username}.</p>
        <a href="/profile">Ir para o perfil</a>
    </div>
    `;
    res.send(successMessage);
});

// Rota de logout 
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json('Erro ao tentar fazer logout');
        }
        res.clearCookie('userInfo');
        res.send('Logout bem-sucedido! Você pode voltar ao <a href="/login">login</a>.');
    });
});

// Rota protegida
app.get('/profile', autenticado, (req, res) => {
    const userInfo = req.session.user;
    const profilePage = `
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e7ffe7;
            color: #4CAF50;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            margin: 0;
        }
    </style>
    <div>
        <h1>Bem-vindo, ${userInfo.username}</h1>
        <form method="post" action="/logout">
            <button type="submit">Logout</button>
        </form>
    </div>
    `;
    res.send(profilePage);
});

const port = 8080;
app.listen(port, () => console.log(`Server rodando em http://localhost:${port}/`));
