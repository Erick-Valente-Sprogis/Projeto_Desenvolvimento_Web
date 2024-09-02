// Referências aos elementos
const openPopup = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Abre o pop-up
openPopup.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    popup.style.display = 'flex'; // Mostra o pop-up
});

// Fecha o pop-up
closePopup.addEventListener('click', function () {
    popup.style.display = 'none'; // Esconde o pop-up
});

// Fecha o pop-up quando clicar fora dele
window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Esconde o pop-up
    }
});
