
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (username === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    
    if (username === "admin" && password === "1234") {
        alert("Login bem-sucedido!");
        
        if (rememberMe) {
            localStorage.setItem("username", username);
        }
        window.location.href = "dashboard.html"; 
    } else {
        alert("Usuário ou senha incorretos.");
    }
});
