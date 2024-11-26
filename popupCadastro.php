<div id="popupCadastro" class="popup">
    <div class="popup-content">
        <span class="close-btn">&times;</span>
        <form method="post" action="process/cadastrar_usuario.php">
            <h2>Cadastro</h2>
            <!-- Campos do formulário -->
            <label for="input_name">Nome Completo:</label>
            <input type="text" name="nome_completo" id="input_name" class="input_name" maxlength="100" required>
            <span class="text-danger"> *</span><br><br>

            <label for="input_mail">Endereço de Email:</label>
            <input type="email" class="input-mail" maxlength="100" required>
            <span class="text-danger"> *</span><br><br>

            <label for="senha">Senha:</label>
            <input type="password" name="num_senha" id="input_senha" class="input_senha" required>
            <span class="text-danger"> *</span><br><br>

            <label for="input_phone">Número de Telefone:</label>
            <input type="tel" name="num_phone" id="input_phone" class="input_phone" required>
            <span class="text-danger"> *</span><br><br>

            <label for="input_cep">Código Postal (CEP):</label>
            <input type="text" id="input_cep" class="input_cep" maxlength="9" required>
            <span class="text-danger"> *</span><br><br>

            <label for="input_log">Logradouro:</label>
            <input type="text" id="input_log" class="input_log" maxlength="100" required>
            <span class="text-danger"> *</span><br><br>

            <input name="button" type="submit" class="btn btn-custom" value="CADASTRAR">
            <p>Já possui uma conta? Então clique <a href="popupLogin.html" class="openPopup" data-popup="popupLogin">AQUI</a>!</p>
            </p>
        </form>
    </div>
</div>