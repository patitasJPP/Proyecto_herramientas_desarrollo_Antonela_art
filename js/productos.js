
        const products = [
            {
                id: 1, name: "Golden Elixir Face Oil",
                category: "Protección de la piel", tag: "piel",
                desc: "Enriquecido con nopales de oro de 24 quilates y extractos botánicos.",
                price: "S/85.00", badge: "BESTSELLER",
                bg: "bg-pink", emoji: "🧴"
            },
            {
                id: 2, name: "Silk Recovery Serum",
                category: "Cuidado del cabello", tag: "cabello",
                desc: "Tratamiento intensivo para puntas abiertas y un brillo radiante.",
                price: "S/62.00", badge: null,
                bg: "bg-dark", emoji: "✨"
            },
            {
                id: 3, name: "Morning Ritual Set",
                category: "Collections", tag: "piel",
                desc: "Un sistema completo de 5 piezas para un inicio brillante.",
                price: "S/145.00", badge: null,
                bg: "bg-sage", emoji: "🌿"
            },
            {
                id: 4, name: "Rose Quartz Clay Mask",
                category: "Protección de la piel", tag: "piel",
                desc: "Arcilla rosa purificante con extracto botánico de rosa mosqueta.",
                price: "S/48.00", badge: null,
                bg: "bg-clay", emoji: "🌸"
            },
            {
                id: 5, name: "Botanical Mist",
                category: "Cuidado del cabello", tag: "cabello",
                desc: "Hidratación ligera para todo tipo de cabello.",
                price: "S/34.00", badge: null,
                bg: "bg-cream", emoji: "💧"
            },
            {
                id: 6, name: "Jade Sculpting Tool",
                category: "Accesorios", tag: "accesorios",
                desc: "Técnica tradicional Gua Sha para el rejuvenecimiento facial.",
                price: "S/25.00", badge: null,
                bg: "bg-forest", emoji: "🪨"
            },
            {
                id: 7, name: "Luminous Vitamin C",
                category: "Protección de la piel", tag: "piel",
                desc: "Sérum iluminador para un tono de piel más uniforme.",
                price: "S/74.00", badge: null,
                bg: "bg-orange", emoji: "🍊"
            },
            {
                id: 8, name: "Velvet Hand Therapy",
                category: "Protección de la piel", tag: "piel",
                desc: "Manteca profundamente nutritiva con karité y almendras.",
                price: "S/28.00", badge: null,
                bg: "bg-teal", emoji: "🤍"
            }
        ];

        let activeFilter = 'all';

        function renderCards() {
            const grid = document.getElementById('grid');
            const filtered = activeFilter === 'all'
                ? products
                : products.filter(p => p.tag === activeFilter);

            grid.innerHTML = filtered.map(p => `
    <div class="card" data-tag="${p.tag}">
      <div class="card-img ${p.bg}">
        <div class="img-placeholder">${p.emoji}</div>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-category">${p.category}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <span class="price">${p.price}</span>
          <button class="add-btn" onclick="addToCart('${p.name}')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

            // stagger animation
            grid.querySelectorAll('.card').forEach((card, i) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(18px)';
                setTimeout(() => {
                    card.style.transition = 'opacity .35s ease, transform .35s ease, box-shadow .28s, transform .28s cubic-bezier(.25,.8,.25,1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, i * 60);
            });
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.dataset.filter;
                renderCards();
            });
        });

        let toastTimer;
        function addToCart(name) {
            const toast = document.getElementById('toast');
            toast.textContent = `✓ "${name}" añadido`;
            toast.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
        }

        renderCards();
