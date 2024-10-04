//atividade 1 
const {readFile} = require("fs");
const http = require ("http");
const numero = require('./utils.js')

const requestListener = function (req,res){
    if(req.url === "/"){
        res.writeHead(200); //OK
        res.end("Bem Vindo!");
    }else if (req.url === "/sobre"){
        res.writeHead(200);
        res.end("Está pagina é sobre o site"); //Atividade 02
    }else if (req.url === "/contato"){
        res.writeHead(200);
        res.end("Está pagina contem os contatos");
    }else if (req.url === "/numero"){
        res.writeHead(200);
        res.end(`Seu aleatorio e:${numero.randomico()}`); // Atividade 03
    }else if (req.url.startsWith ("/saudacao/")){
        const nome = req.url.split("/")[2];
        const primeiraLetra = nome.charAt(0);
        res.writeHead(200);
        res.end(`Olá, ${primeiraLetra + nome.slice(1)}!`); //Atividade 04
    }else{
        res.writeHead(404); //Error
        res.end("Pagina não Encontrada!")
    }
};

const server = http.createServer(requestListener); //Cria servidor

server.listen(1337, 'localhost', ()=>{
    console.log("Servidor está rodando em http://localhost:1337");
});