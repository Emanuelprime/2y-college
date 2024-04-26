document.getElementById("formulario").addEventListener('submit', function(evento){
    evento.preventDefault();

    let numero = parseInt(document.getElementById("numero").value);
    let resultado = 1;
    
    if (numero < 0) {
        alert("Não é possível calcular o fatorial de um número negativo.");
        return;}

    for (let i = 1; i <= numero; i++){
        resultado *= i;
    }

    alert("O fatorial de " + numero + " é: " + resultado);
});