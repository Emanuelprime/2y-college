document.getElementById('calcular').addEventListener('click', function(event){event.preventDefault();
    
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    
    let Maiornumero = Math.max(numero1,numero2,);
    let Menornumero =Math.min(numero1,numero2,);


    if (numero ===''){
        alert('Digite um numero');
        return false;
    }
    if(numero1 == numero2){
    alert('Números Iguais');
            return false;
    }
    alert("O maior numero é: " + Maiornumero ,"e o menor numero é: " + Menornumero);
    alert("E o menor numero é: " + Menornumero);
    });

    