<div id="popupLogin" class="popup">
    <div class="popup-content">
        <span class="close-btn">&times;</span>
        <form method="POST" action="process/login_usuario.php" id="login" class="login">
            <h2>Login</h2>

            <label for="input_mail">Endereço de Email:</label>
            <input id="email" name="email" type="email" class="input-mail" maxlength="100" required>
            <span class="text-danger"> *</span><br><br>

            <label for="senha">Senha:</label>
            <input type="password" name="senha" id="senha" class="input_senha" required>
            <span class="text-danger"> *</span><br><br>

            <input name="button" type="submit" class="btn btn-custom" value="LOGIN">
            <p>Ainda não possui uma conta? Então clique <a href="#" class="openPopup" data-popup="popupCadastro">AQUI</a>!
            </p>
        </form>
    </div>
</div>