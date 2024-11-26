document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar dinamicamente o pop-up
    function carregarPopup(tipoPopup) {
        // Define o caminho correto para o arquivo HTML do pop-up
        const arquivoPopup = tipoPopup === 'popupCadastro' ? 'popupCadastro.php' : 'popupLogin.php';

        // Tenta carregar o arquivo com fetch usando GET
        fetch(arquivoPopup)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o pop-up: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                // Insere o conteúdo HTML do pop-up no contêiner do pop-up
                const popupContainer = document.getElementById('popupContainer');
                popupContainer.innerHTML = data;

                const popup = document.getElementById(tipoPopup);
                const closePopup = popup.querySelector('.close-btn');

                // Exibe o pop-up
                popup.style.display = 'flex';

                // Move o foco para o primeiro campo do pop-up
                const firstInput = popup.querySelector('input');
                if (firstInput) firstInput.focus();

                // Configura o evento de fechamento do botão 'X'
                closePopup.addEventListener('click', function () {
                    popup.style.display = 'none';
                });

                // Fecha o pop-up se clicar fora dele
                window.addEventListener('click', function fecharPopupExterno(event) {
                    if (event.target === popup) {
                        popup.style.display = 'none';
                        // Remove o evento para evitar múltiplos listeners
                        window.removeEventListener('click', fecharPopupExterno);
                    }
                });

                // Configura validação em tempo real para o campo de e-mail
                const emailInputs = popup.querySelectorAll('.input_mail');
                emailInputs.forEach(input => {
                    input.addEventListener('input', () => {
                        if (!input.validity.valid) {
                            input.setCustomValidity('Por favor, insira um e-mail válido.');
                        } else {
                            input.setCustomValidity('');
                        }
                    });
                });
            })

    // Adiciona o evento de clique para abrir o pop-up
    document.querySelectorAll('.openPopup').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const tipoPopup = event.target.getAttribute('data-popup');
            carregarPopup(tipoPopup);
        });
    });
}})
