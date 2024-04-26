document.getElementById("formulario").addEventListener('submit', function(evento){
    evento.preventDefault();
    const numerosString = document.getElementById("numeros").value;
    const numerosArray = numerosString.split(",").map(num => Number(num));
    const maiorNumero = Math.max(...numerosArray);

    if (numerosArray.length === 0) {
        alert("Vetor vazio");
        return;
    }

    alert("O maior número do vetor é: " + maiorNumero);



});