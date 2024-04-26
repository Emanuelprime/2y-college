document.getElementById("formulario").addEventListener('submit', function(evento){evento.preventDefault();
    let letraEscrita = document.getElementById("letra").value;



    if(letraEscrita === 'a')
    {
        alert('A');
    }

    else if(letraEscrita === 'b')
    {
        alert('B');
    }

   else
    {
        alert('Outra letra');
    }
});