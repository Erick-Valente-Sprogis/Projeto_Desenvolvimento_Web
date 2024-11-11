// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar o pop-up dinamicamente
    function carregarPopup() {
        fetch('popup.html') // Carrega o conteúdo do arquivo popup.html
            .then(response => response.text())
            .then(data => {
                // Insere o conteúdo carregado na div #popupContainer
                document.getElementById('popupContainer').innerHTML = data;

                // Seleciona o elemento do pop-up e o botão de fechar
                const popup = document.getElementById('popup');
                const closePopup = document.getElementById('closePopup');

                // Exibe o pop-up
                popup.style.display = 'flex';

                // Adiciona evento para fechar o pop-up ao clicar no botão de fechar
                closePopup.addEventListener('click', function () {
                    popup.style.display = 'none';
                });

                // Fecha o pop-up ao clicar fora dele
                window.addEventListener('click', function (event) {
                    if (event.target === popup) {
                        popup.style.display = 'none';
                    }
                });
            })
            .catch(error => console.error('Erro ao carregar o pop-up:', error));
    }

    // Seleciona todos os elementos com a classe "openPopup"
    const openPopups = document.querySelectorAll('.openPopup');

    // Adiciona um evento de clique para cada elemento que abre o pop-up
    openPopups.forEach(function (openPopup) {
        openPopup.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o redirecionamento
            carregarPopup(); // Carrega e exibe o pop-up
        });
    });
});
