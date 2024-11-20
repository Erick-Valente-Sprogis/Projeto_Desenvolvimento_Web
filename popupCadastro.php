<?php include 'includes/header.php'; ?>
<div id="popupCadastro" class="popup">
    <div class="popup-content">
        <span class="close-btn">&times;</span>
        <form method="post" action="process/cadastro.php">
            <h2>Cadastro</h2>
            <!-- Campos do formulário -->
            <input type="text" name="nome_completo" required>
            <input type="email" name="email" required>
            <input type="password" name="senha" required>
            <input name="button" type="submit" class="btn btn-custom" value="CADASTRAR">
        </form>
    </div>
</div>
