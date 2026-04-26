// ─── LOGIN HANDLER ───
const loginBtn = document.getElementById('loginBtn');
const errorMsg = document.getElementById('errorMsg');

function showError(msg) {
  errorMsg.textContent   = msg;
  errorMsg.style.display = 'block';
}

function hideError() {
  errorMsg.style.display = 'none';
}

function setLoading(state) {
  loginBtn.classList.toggle('loading', state);
  loginBtn.disabled = state;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

loginBtn.addEventListener('click', handleLogin);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleLogin();
});

async function handleLogin() {
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  hideError();

  if (!email || !password) {
    showError('Por favor completa todos los campos.');
    return;
  }

  if (!isValidEmail(email)) {
    showError('Ingresa un correo electrónico válido.');
    return;
  }

  setLoading(true);

  // ── Reemplaza este bloque con tu llamada real a la API ──
  try {
    // const res = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // });
    // if (res.ok) {
    //   window.location.href = '/dashboard';
    // } else {
    //   showError('Credenciales incorrectas.');
    // }

    // Simulación temporal — eliminar cuando conectes la API
    await new Promise(resolve => setTimeout(resolve, 1800));
    setLoading(false);
    showError('Correo o contraseña incorrectos. Inténtalo de nuevo.');

  } catch (err) {
    setLoading(false);
    showError('Error de conexión. Intenta de nuevo.');
  }
  // ────────────────────────────────────────────────────────
}

// ─── TOGGLE PASSWORD ───
const togglePwd = document.getElementById('togglePwd');
const eyeIcon   = document.getElementById('eyeIcon');

const EYE_OPEN = `
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
  <circle cx="12" cy="12" r="3"/>`;

const EYE_CLOSED = `
  <line x1="1" y1="1" x2="23" y2="23"/>
  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 11 7 11 7a13.16 13.16 0 0 1-1.67 2.68"/>
  <path d="M6.61 6.61A13.526 13.526 0 0 0 1 12s4 7 11 7a9.74 9.74 0 0 0 5.39-1.61"/>`;

let pwdVisible = false;

if (togglePwd) {
  togglePwd.addEventListener('click', () => {
    pwdVisible = !pwdVisible;
    document.getElementById('password').type = pwdVisible ? 'text' : 'password';
    eyeIcon.innerHTML = pwdVisible ? EYE_CLOSED : EYE_OPEN;
  });
}