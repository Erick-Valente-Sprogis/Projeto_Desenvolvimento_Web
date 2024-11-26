<?php
session_start();
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="imgs/Joined Hands_Logo.png" sizes="32x32" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <title>Joined Hands - Faça sua doação HOJE!</title>
</head>

<header>
    <div class="header-container">
        <a class="navbar-brand" href="index.php" data-page="home">
            <h1>Joined Hands</h1>
        </a>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
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
                                <a class="nav-link openPopup" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link openPopup" href="#">Cadastro</a>
                            </li>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>