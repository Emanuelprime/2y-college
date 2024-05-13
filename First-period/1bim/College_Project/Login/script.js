/*Declara Constantes utilizando o ID da <div> do HTML*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

/*Acao Botao Ola*/
registerBtn.addEventListener('click', () => {
    container.classList.add('active')
})

/*Acao Botao Bem Vindo*/
loginBtn.addEventListener('click', () => {
    container.classList.remove('active')
})