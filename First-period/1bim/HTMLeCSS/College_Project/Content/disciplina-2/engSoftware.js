document.addEventListener('DOMContentLoaded', function() {
    /* Selecionando todos os elementos com a classe "subject-folder"*/
    const subjectFolders = document.querySelectorAll('.subject-folder');

    /* Iterando sobre cada elemento com a classe "subject-folder"*/
    subjectFolders.forEach(folder => {
        /* Adicionando um evento de clique ao elemento de controle (button.toggle)*/
        folder.querySelector('.toggle').addEventListener('click', function () {
            /* Selecionando o conteúdo dentro do folder*/
            const content = folder.querySelector('.content');
            /* Alternando a classe "expanded" no elemento pai ".subject-folder"*/
            folder.classList.toggle('expanded');
            /* Alternando a classe "show" para controlar a visibilidade do conteúdo*/
            content.classList.toggle('show');
        });
    });
});