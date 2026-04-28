// ─── TOGGLE PASSWORD ───
function makeToggle(btnId, inputId, iconId) {
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  let visible = false;

  const EYE_OPEN = `
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>`;

  const EYE_CLOSED = `
    <line x1="1" y1="1" x2="23" y2="23"/>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 7 11 7a13.16 13.16 0 0 1-1.67 2.68"/>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 7 11 7a9.74 9.74 0 0 0 5.39-1.61"/>`;

  btn.addEventListener("click", () => {
    visible = !visible;
    input.type = visible ? "text" : "password";
    icon.innerHTML = visible ? EYE_CLOSED : EYE_OPEN;
  });
}

makeToggle("togglePwd", "password", "eyeIcon1");
makeToggle("toggleConfirm", "confirm", "eyeIcon2");

// ─── VALIDATION & SUBMIT ───
const registerBtn = document.getElementById("registerBtn");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.style.display = "block";
  successMsg.style.display = "none";
}

function showSuccess(msg) {
  successMsg.textContent = msg;
  successMsg.style.display = "block";
  errorMsg.style.display = "none";
}

function hideMessages() {
  errorMsg.style.display = "none";
  successMsg.style.display = "none";
}

function setLoading(state) {
  registerBtn.classList.toggle("loading", state);
  registerBtn.disabled = state;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^(\+51)?9\d{8}$/.test(phone);
}

registerBtn.addEventListener("click", handleRegister);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleRegister();
});

function handleRegister() {
  hideMessages();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const terms = document.getElementById("terms").checked;

  // Validaciones
  if (!nombre || !apellido)
    return showError("Por favor ingresa tu nombre y apellido.");
  if (!isValidEmail(email))
    return showError("Ingresa un correo electrónico válido.");
  if (telefono && !isValidPhone(telefono))
    return showError("Ingresa un número de teléfono válido.");
  if (password.length < 6)
    return showError("La contraseña debe tener al menos 6 caracteres.");
  if (password !== confirm) return showError("Las contraseñas no coinciden.");
  if (!terms) return showError("Debes aceptar los términos de servicio.");

  setLoading(true);

  // ── Reemplaza este bloque con tu llamada real a la API ──
  setTimeout(() => {
    setLoading(false);
    showSuccess("¡Cuenta creada con éxito! Redirigiendo...");
    window.location.href = "../index.html";
  }, 1800);
  // ────────────────────────────────────────────────────────
}
