const read = require("readline-sync")

var nome = "Emanuel";
var idade = 18;
var chave_pix = 42988037573;
var valor_em_conta = 100
;

function mostrar_dados(){
    console.clear();
    console.log(".....................................");
    console.log("Nome:" + nome);
    console.log(".....................................");
    console.log("Idade: " + idade);
    console.log(".....................................");
    console.log("Chave pix: " + chave_pix);
    console.log(".....................................");
    console.log("Valor em conta: " + valor_em_conta);
    console.log(".....................................");
}

function add_valor(valor){
    console.clear();
    valor_em_conta += valor;
    console.log("Valor em conta: " + valor_em_conta);
}

function sub_valor(valor){
    console.clear();
    valor_em_conta -= valor;
    console.log("Valor em conta: " + valor_em_conta);
}

function mudar_chave(chave){
    console.clear();
    chave_pix = chave;
    console.log("Nova chave pix: " + chave_pix);
}

var loop = true;
while (loop){
    console.log("---------------------------------------------");
    console.log("Bem vindo ao nosso banco.");
    console.log("O que deseja fazer?");
    console.log("1 - Mostrar seus dados");
    console.log("2 - Fazer um deposito");
    console.log("3 - Fazer um pix");
    console.log("4 - Alterar minha chave pix");

    var escolha = read.question("Escolha um numero: ");
    

    if(escolha === "1"){
        
        mostrar_dados();
    }
    else if(escolha === "2"){
        
        var valor = read.question("Digite um valor: ");
        add_valor(parseInt(valor));
    }
    else if(escolha === "3"){
        
        var valor = read.question("Digite um valor: ");
        var pix = read.question("Digite uma chave pix: ");
        sub_valor(parseInt(valor));
        console.log("Você realizou um pix para " + pix);
    }
    else if(escolha === "4"){
        
        var chave = read.question("Digite uma chave pix: ");
        mudar_chave(chave);
    }
    else{
        
        console.log("------------------------");
        console.log("Opção invalida!");
        console.log("------------------------");
    }
}