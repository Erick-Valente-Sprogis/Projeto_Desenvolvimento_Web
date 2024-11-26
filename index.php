<?php include 'includes/header.php'; ?>
<?php include 'includes/head.php'; ?>

<div id="popupContainer"></div>

<div id="content">
    <section id="about" class="about">
        <div class="container">
            <h2>Quem Somos:</h2>
            <p>
                Na Joined Hands, acreditamos no poder da solidariedade e na capacidade de transformar vidas por meio da
                generosidade. Somos uma plataforma dedicada a conectar doadores e organizações sem fins lucrativos, facilitando o
                ato de doar e ampliando o impacto social. Nossa missão é criar um mundo onde cada gesto de bondade conte,
                incentivando a colaboração entre indivíduos e comunidades. Com um compromisso firme com a transparência e a
                responsabilidade, trabalhamos para garantir que cada contribuição seja utilizada de forma eficaz e significativa.
                Junte-se a nós e faça parte dessa corrente do bem!</p>
        </div>
    </section>

    <section id="goal" class="goal">
        <div class="container">
            <h2>Nosso Objetivo:</h2>
            <p>Na Joined Hands, nosso objetivo é transformar a generosidade em ação. Acreditamos que cada doação, por menor que
                seja, pode fazer uma diferença significativa na vida de quem precisa. Nossa missão é criar uma plataforma acessível
                e transparente que conecte doadores a causas significativas, promovendo um impacto positivo nas comunidades. Com
                compromisso e integridade, buscamos inspirar e facilitar a solidariedade, empoderando indivíduos a contribuírem para
                um mundo mais justo e igualitário. Juntos, podemos unir nossas mãos e corações para construir um futuro melhor para
                todos.</p>
        </div>
    </section>

    <section id="doacoes" class="doacoes">
        <div class="container">
            <h2>Doações</h2>
            <ul class="list-unstyled d-flex flex-wrap justify-content-center">
                <li class="m-2" style="background-color: #8D0808; border-radius: 10px; padding: 20px;">
                    <img src="imgs/sangue.png" alt="" class="img-fluid" style="width: 80px;">
                    <a href="sangue.php" class="text-white">Doação de <br>Sangue</a>
                </li>
                <li class="m-2" style="background-color: #0A6F94; border-radius: 10px; padding: 20px;">
                    <img src="imgs/alimentos.png" alt="" class="img-fluid" style="width: 80px;">
                    <a href="alimento.php" class="text-white">Doação de <br>Alimentos</a>
                </li>
                <li class="m-2" style="background-color: #E1C90D; border-radius: 10px; padding: 20px;">
                    <img src="imgs/monetaria.png" alt="" class="img-fluid" style="width: 80px;">
                    <a href="monetaria.php" class="text-dark">Doação <br>Monetária</a>
                </li>
            </ul>
        </div>
    </section>
</div>
<?php include 'includes/footer.php'; ?>
<script src="script/script.js"></script>
<script src="script/popup.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>