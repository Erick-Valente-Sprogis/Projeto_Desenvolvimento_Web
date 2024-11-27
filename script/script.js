document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar dinamicamente o pop-up
    async function carregarPopup(tipoPopup) {
        const arquivoPopup = tipoPopup === 'popupCadastro' ? 'popupCadastro.php' : 'popupLogin.php';

        try {
            const response = await fetch(arquivoPopup);
            if (!response.ok) throw new Error(`Erro ao carregar o pop-up: ${response.status}`);
            
            const data = await response.text();
            const popupContainer = document.getElementById('popupContainer');
            popupContainer.innerHTML = data;

            const popup = document.getElementById(tipoPopup);
            const closePopup = popup.querySelector('.close-btn');
            popup.style.display = 'flex';

            const firstInput = popup.querySelector('input');
            if (firstInput) firstInput.focus();

            closePopup.addEventListener('click', () => popup.style.display = 'none');
        } catch (error) {
            console.error("Erro ao carregar o pop-up:", error);
        }
    }

    document.querySelectorAll('.openPopup').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const tipoPopup = event.target.getAttribute('data-popup');
            carregarPopup(tipoPopup);
        });
    });

    // Envio do formulário de cadastro
document.querySelector("#cadastroForm").addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        nome_completo: document.querySelector("#input_name").value,
        email: document.querySelector("#input_mail").value,
        senha: document.querySelector("#input_senha").value,
        telefone: document.querySelector("#input_phone").value,
        cep: document.querySelector("#input_cep").value,
        logradouro: document.querySelector("#input_log").value,
    };

    try {
        const response = await fetch("http://localhost:8000/process/cadastrar_usuario.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.message); // Mensagem de sucesso
            document.getElementById('popupCadastro').style.display = 'none';
            // Redireciona para a página de login após o cadastro
            window.location.href = "popupLogin.php";  // Substitua pelo caminho correto para sua página de login
        } else {
            alert(result.message); // Mensagem de erro
        }
    } catch (error) {
        console.error("Erro ao realizar cadastro:", error);
    }
});


    // Envio do formulário de login
    document.querySelector("#loginForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.querySelector("#email").value;
        const senha = document.querySelector("#senha").value;

        try {
            const response = await fetch("http://localhost:8000/process/login_usuario.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, senha }),
            });

            const result = await response.json();

            if (result.status === "success") {
                alert(result.message);
                // Atualiza a interface para refletir o login (por exemplo, mostrando o nome do usuário)
                document.querySelector("#welcomeMessage").textContent = `Bem-vindo, ${result.user_name}`;
                // Aqui, você pode esconder o pop-up ou redirecionar para outra página
                document.getElementById('popupLogin').style.display = 'none';
            } else {
                alert(result.message); // Exibe mensagens de erro
            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
        }
    });
});
