// ── Reservar Cita buttons ──────────────────────────────────
document.querySelectorAll(".btn-gold").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Only trigger alert if not wrapped in an <a> tag pointing elsewhere
    const parent = btn.closest("a");
    if (!parent || parent.getAttribute("href") === "#") {
      e.preventDefault();
      alert("Reserva realizada (simulación)");
    }
  });
});

// ── Navbar: mark active link based on current page ─────────
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ── Card hover: subtle lift already handled by CSS ─────────
// Extra: clicking a service card navigates to servicios page
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = "servicios.html";
  });
});

// ── Newsletter form ─────────────────────────────────────────
const newsletterBtn = document.querySelector(".newsletter-btn");
const newsletterInput = document.querySelector(".newsletter-input");

if (newsletterBtn && newsletterInput) {
  newsletterBtn.addEventListener("click", () => {
    const email = newsletterInput.value.trim();
    if (!email || !email.includes("@")) {
      alert("Por favor ingresa un email válido.");
      return;
    }
    alert(`¡Gracias! Te has suscrito con: ${email}`);
    newsletterInput.value = "";
  });
}
