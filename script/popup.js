document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar dinamicamente o pop-up
    function carregarPopup(tipoPopup) {
        const arquivoPopup = tipoPopup === 'login' ? 'popupLogin.php' : 'popupCadastro.php';

        fetch(arquivoPopup)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar o pop-up: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const popupContainer = document.getElementById('popupContainer');
                popupContainer.innerHTML = data;

                const popup = popupContainer.querySelector('.popup');
                const closePopup = popup.querySelector('.close-btn');

                popup.style.display = 'flex';

                const firstInput = popup.querySelector('input');
                if (firstInput) firstInput.focus();

                closePopup.addEventListener('click', function () {
                    popup.style.display = 'none';
                });

                window.addEventListener('click', function fecharPopupExterno(event) {
                    if (event.target === popup) {
                        popup.style.display = 'none';
                        window.removeEventListener('click', fecharPopupExterno);
                    }
                });
            })
            .catch(error => {
                console.error('Erro ao carregar o pop-up:', error);
                alert('Erro ao carregar o pop-up. Tente novamente mais tarde.');
            });
    }

    // Adiciona o evento de clique para abrir o pop-up
    document.querySelectorAll('.openPopup').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Identifica qual pop-up abrir com base no texto do botão
            const linkText = event.target.textContent.trim().toLowerCase();
            if (linkText === 'login') {
                carregarPopup('login');
            } else if (linkText === 'cadastro') {
                carregarPopup('cadastro');
            }
        });
    });
});
