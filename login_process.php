<?php
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];


if($usuario == "admin" && $senha == "1234"){
    echo "Login feito com sucesso!";
} else {
    echo "Usuário ou senha incorretos!";
}
?>
<br><a href="login.php">Voltar</a>
