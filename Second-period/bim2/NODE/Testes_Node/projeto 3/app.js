const fs =  require("fs");
const prompt = require("readline-sync");

var lista_de_usuarios = [];

lista_de_usuarios =  JSON.parse(fs.readFileSync("bd.json"));

var loop = true;
var loged = false;


function login(){
    console.log("LOGIN:");
    console.log("Insira seu usuario e senha:");

    var usuario = prompt.question("Usuario:");
    var senha = prompt.question("Senha:");


    for (let index = 0; index < lista_de_usuarios.length; index++) {

        if(usuario === lista_de_usuarios[index].login && senha === lista_de_usuarios[index].senha){
            console.clear();
            loged = true;
            console.log("BEM VINDO")
        }
        else{
            console.clear();
            console.log("Login ou senha invalidos.")
        }
        
    }
}

while (loop){
    if(loged === false){
        login();
    }
}