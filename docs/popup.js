
// Lógica de exibição do pop-up
const popup = document.getElementById('popup');
const openCadastroButton = document.getElementById('openCadastro');
const closePopup = document.getElementById('closePopup');

// Abre o pop-up quando o botão "Cadastro" é clicado
openCadastroButton.addEventListener('click', function () {
    popup.style.display = 'flex';
});

// Fecha o pop-up quando o botão de fechar é clicado
closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
});

// Fecha o pop-up quando clicar fora da janela do pop-up
window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});