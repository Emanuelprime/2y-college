document.getElementById('calcular').addEventListener('click', function(event){event.preventDefault();
    
    let nota = parseFloat(document.getElementById('nota').value);

    if(nota<6){
        alert("Reprovado")
    }

    if(nota>=6 & nota<=8){
        alert("Aprovado")
    }

    if(nota>8){
        alert("Aprovado com Louvor")
    }
    


});