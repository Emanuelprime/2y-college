document.getElementById("vetor")
formulario.addEventListener('submit', function(evento){evento.preventDefault();

    let entrada = document.getElementById('numeros').value;
    let numeros = entrada.split(',').map(Number);
    let soma = numeros.reduce((total, numero) => total + numero, 0);
    let media = soma/numeros;

    alert("A média dos numeros é: " + media);


    });