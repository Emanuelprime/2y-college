document.getElementById("vetor").addEventListener('submit', function(evento){evento.preventDefault();
const numerosString = document.getElementById("numeros").value;
const numerosArray = numerosString.split(",").map(num => Number(num));
const media = calcularMedia(numerosArray);
    

    alert("A média dos numeros é: " + media);


    });

function calcularMedia(numeros){

    if(numeros.length === 0){
        return 0;
    }

    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
}