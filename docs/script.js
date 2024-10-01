// Seleciona todos os elementos com a classe "openPopup"
const openPopups = document.querySelectorAll( '.openPopup' );
const popup = document.getElementById( 'popup' );
const closePopup = document.getElementById( 'closePopup' );

// Adiciona um evento de clique para cada elemento
openPopups.forEach( function ( openPopup ) {
    openPopup.addEventListener( 'click', function ( event ) {
        event.preventDefault(); // Previne o comportamento padrão do link
        popup.style.display = 'flex'; // Mostra o pop-up
    } );
} );

// Fecha o pop-up
closePopup.addEventListener( 'click', function () {
    popup.style.display = 'none'; // Esconde o pop-up
} );

// Fecha o pop-up quando clicar fora dele
window.addEventListener( 'click', function ( event ) {
    if ( event.target === popup ) {
        popup.style.display = 'none'; // Esconde o pop-up
    }
} );


