document.getElementById("matriz").addEventListener('submit', function(evento){evento.preventDefault();
    var Elementomatriz = document.getElementById("Elementomatriz").value;

    var matriz = Elementomatriz.split(",").map(num => Number(num));

    var soma =0;

    for (var i = 0; i < matriz.length; i++){
        soma += matriz[i];
    }

    alert("A soma dos elementos da matriz é: " + soma);

});