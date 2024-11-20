<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "joined_hands";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexão
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}
?>
