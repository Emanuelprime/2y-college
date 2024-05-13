document.getElementById("formulario").addEventListener('submit', function(evento){
    evento.preventDefault();

    var opcaoSelecionada = document.getElementById("opcoes").value;

    switch (opcaoSelecionada) {
        case "op1":
          alert("Opção 1 escolhida");
          break;
        case "op2":
          alert("Opção 2 escolhida");
          break;
        case "op3":
          alert("Opção 3 escolhida");
          break;
        default:
          alert("Opção inválida");
      }

});