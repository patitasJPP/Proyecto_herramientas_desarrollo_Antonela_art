// Reemplaza el setTimeout con algo así:
const res = await fetch('/api/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});
if (res.ok) window.location.href = '/dashboard';
else showError('Credenciales incorrectas.');

// ─── LOGIN HANDLER ───
const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');

function showError(msg) {
  errorMsg.textContent    = msg;
  errorMsg.style.display  = 'block';
}

function hideError() {
  errorMsg.style.display = 'none';
}

function setLoading(state) {
  loginBtn.classList.toggle('loading', state);
  loginBtn.disabled = state;
}

loginBtn.addEventListener('click', handleLogin);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleLogin();
});

function handleLogin() {
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  hideError();

  // Basic validation
  if (!email || !password) {
    showError('Por favor completa todos los campos.');
    return;
  }

  if (!isValidEmail(email)) {
    showError('Ingresa un correo electrónico válido.');
    return;
  }

  // Loading state
  setLoading(true);

  // ── Replace this block with your real API call ──
  setTimeout(() => {
    setLoading(false);
    showError('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    // On success: window.location.href = '/dashboard';
  }, 1800);
  // ────────────────────────────────────────────────
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
