const loginForm = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  mensagem.classList.remove("error", "success", "info");

  if (!usuario || !senha) {
    mensagem.textContent = "Preencha todos os campos antes de entrar.";
    mensagem.classList.add("error");
    return;
  }

  mensagem.textContent =
    "A tela está funcionando, mas a autenticação ainda precisa ser conectada ao backend.";
  mensagem.classList.add("info");
});
