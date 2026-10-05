const loginForm = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");
const passwordInput = document.getElementById("senha");
const passwordToggle = document.getElementById("passwordToggle");

function showMessage(text, type = "info") {
  mensagem.textContent = text;
  mensagem.className = `message ${type}`;
}

passwordToggle.addEventListener("click", function () {
  const shouldShowPassword = passwordInput.type === "password";
  passwordInput.type = shouldShowPassword ? "text" : "password";
  passwordToggle.setAttribute("aria-pressed", String(shouldShowPassword));
  passwordToggle.setAttribute(
    "aria-label",
    shouldShowPassword ? "Ocultar senha" : "Mostrar senha",
  );
});

document.querySelectorAll("[data-message]").forEach(function (action) {
  action.addEventListener("click", function () {
    showMessage(action.dataset.message);
  });
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!usuario || !senha) {
    showMessage("Preencha todos os campos antes de entrar.", "error");
    return;
  }

  showMessage(
    "A tela está funcionando, mas a autenticação ainda precisa ser conectada ao backend.",
  );
});
