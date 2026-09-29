const loginForm = document.getElementById('loginForm');
const mensagem = document.getElementById('mensagem');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();

    mensagem.classList.remove('error', 'success');

    if (!usuario || !senha) {
        mensagem.textContent = 'Preencha todos os campos antes de entrar.';
        mensagem.classList.add('error');
        return;
    }

    mensagem.textContent = 'Login realizado com sucesso! Você pode conectar isso ao backend depois.';
    mensagem.classList.add('success');

    console.log('Dados digitados:', { usuario, senha });
});
