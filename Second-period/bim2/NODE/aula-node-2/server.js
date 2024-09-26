const { readFile } = require("fs");
const http = require("http")

const requestListener = function (req, res){
    if(req.url === "/"){//Se o URL da solicitação for "/", retorna "Voce esta na pagina inicial"
    res.writeHead(200); //Define o código de status HTTP da resposta com 200(OK)
    res.end("Você está na página inicial!"); //Escreve a resposta HTTP de volta ao cliente
}else if (req.url ==="/sobre"){//Se o URL da solicitação for "/sobre", retorna "Voce esta na pagina sobre"
    readFile('./sobre.txt', 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data); // Send the file content as the response
    });
}else{//Para qualquer outro URL, retorna "Pagina não encontrada"
    res.writeHead(404);
    res.end("Pagina não encontrada")
}
};
const server = http.createServer(requestListener);//Cria um novo servidor

server.listen(8000, 'localhost', ()=>{//Vincula o servidor a uma porta e host, e define uma função de callback a ser chamada quando o servidor começa a escutar
    console.log("Servidor está rodando em http://localhost:8000");

});