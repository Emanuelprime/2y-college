document.getElementById("matriz").addEventListener('submit', function(evento){
    evento.preventDefault();
    const ElementomatrizString = document.getElementById("Elementomatriz").value;
    const elementosMatrizArray = ElementomatrizString.split(',').map(num => parseFloat(num));
    const media = calcularMedia(elementosMatrizArray);

    function calcularMedia(matriz) {
        if (matriz.length === 0) return 0; 
        
        const soma = matriz.reduce((acc, num) => acc + num, 0);
        return soma / matriz.length;
      }

    alert("A média dos elementos da matriz é: " + media);
});
