<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-srIYreWPQG6l6oy0vr4Rsm0mDJbzYaeFZhD62h8VZ/xRxD8rCf7HGGjJhuEIQxmK" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-wEa6ROwDFHOkHu5wN/3BOuRNo9uMYH7V3Ifx26DE85ZSkAC/QJ6Z6VwvkwrIk49T" crossorigin="anonymous"></script>

<header>
    <nav class="navbar navbar-expand-lg" style="background-color: #9D9999;">
        <div class="container">
            <a class="navbar-brand" href="index.php">
                <h1>Joined Hands</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="index.php#doacoes">Doações</a></li>
                    <li class="nav-item group-separator"><a class="nav-link" href="contato.php">Contato</a></li>
                    <?php if (isset($_SESSION['user_id'])): ?>
                        <li class="nav-item">
                            <span class="nav-link">Bem-vindo, <?php echo htmlspecialchars($_SESSION['user_name']); ?>!</span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="process/logout.php">Logout</a>
                        </li>
                    <?php else: ?>
                        <li class="nav-item">
                            <a class="nav-link openPopup" href="#" data-popup="popupLogin">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link openPopup" href="#" data-popup="popupCadastro">Cadastro</a>
                        </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </nav>
    </div>
</header>
