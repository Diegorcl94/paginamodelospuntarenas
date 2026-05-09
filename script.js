// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== PARTICLES =====
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(201,168,76,${Math.random() * 0.5 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatParticle ${Math.random() * 8 + 6}s ease-in-out infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(p);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      33% { transform: translateY(-30px) translateX(15px); opacity: 0.8; }
      66% { transform: translateY(-15px) translateX(-10px); opacity: 0.5; }
    }
  `;
  document.head.appendChild(style);
})();

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.cat-card, .model-card, .price-card, .contact-card, .register-form-wrap, .register-text, .hotel-card').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== HOTEL TABS =====
function switchTab(tab, btn) {
  document.querySelectorAll('.hotel-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-hoteles').classList.toggle('hidden', tab !== 'hoteles');
  document.getElementById('tab-moteles').classList.toggle('hidden', tab !== 'moteles');
}

// ===== FILTER MODELS =====
function filterModels(category) {
  const cards = document.querySelectorAll('.model-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
      card.style.animation = 'none';
      card.offsetHeight; // reflow
      card.style.animation = 'fadeUp 0.5s ease forwards';
    } else {
      card.classList.add('hidden');
    }
  });

  // Highlight active category
  document.querySelectorAll('.cat-card').forEach(c => c.style.borderColor = '');
  const active = document.querySelector(`.cat-card[data-filter="${category}"]`);
  if (active) active.style.borderColor = 'var(--gold)';

  // Scroll to models
  document.getElementById('modelos').scrollIntoView({ behavior: 'smooth' });
}

// ===== MODAL DATA =====
const modelData = {
  valentina: {
    name: 'Valentina R.',
    category: 'Gold',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=650&fit=crop',
    desc: 'Modelo con 6 años de experiencia en fotografía editorial y publicidad. Ha trabajado con marcas nacionales de moda, cosmética y retail. Disponible para sesiones en estudio y exteriores.',
    altura: '1.74 m',
    ojos: 'Verdes',
    cabello: 'Castaño',
    experiencia: '6 años',
    precio: '$120.000',
    wsp: '56900000001'
  },
  sofia: {
    name: 'Sofia M.',
    category: 'Internacional',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=650&fit=crop',
    desc: 'Modelo colombiana radicada en Chile. Especialista en pasarela y eventos corporativos. Ha desfilado en semanas de la moda en Bogotá y Santiago.',
    altura: '1.78 m',
    ojos: 'Cafés',
    cabello: 'Negro',
    experiencia: '4 años',
    precio: '$150.000',
    wsp: '56900000002'
  },
  carmen: {
    name: 'Carmen L.',
    category: 'Senior',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=650&fit=crop',
    desc: 'Modelo senior con amplia trayectoria en comerciales de televisión y campañas publicitarias. Su presencia y carisma la hacen ideal para marcas que buscan elegancia y madurez.',
    altura: '1.70 m',
    ojos: 'Azules',
    cabello: 'Rubio',
    experiencia: '12 años',
    precio: '$130.000',
    wsp: '56900000003'
  },
  isadora: {
    name: 'Isadora P.',
    category: 'Nueva Cara',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&h=650&fit=crop',
    desc: 'Talento emergente con gran proyección. Recién egresada de academia de modelaje, con energía fresca y versatilidad para distintos estilos fotográficos y editoriales.',
    altura: '1.76 m',
    ojos: 'Verdes',
    cabello: 'Castaño claro',
    experiencia: '1 año',
    precio: '$80.000',
    wsp: '56900000004'
  },
  alexia: {
    name: 'Alexia V.',
    category: 'Diversidad',
    img: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&h=650&fit=crop',
    desc: 'Modelo trans con fuerte presencia en campañas de inclusión y diversidad. Referente en la industria local, ha participado en eventos de moda y campañas de marcas comprometidas con la representación.',
    altura: '1.75 m',
    ojos: 'Cafés',
    cabello: 'Negro',
    experiencia: '3 años',
    precio: '$110.000',
    wsp: '56900000005'
  },
  renata: {
    name: 'Renata C.',
    category: 'Gold',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=650&fit=crop',
    desc: 'Una de las modelos más solicitadas de la agencia. Especialista en publicidad de lujo, joyería y moda de alta gama. Su versatilidad le permite adaptarse a cualquier concepto creativo.',
    altura: '1.77 m',
    ojos: 'Miel',
    cabello: 'Rubio',
    experiencia: '8 años',
    precio: '$180.000',
    wsp: '56900000006'
  },
  natasha: {
    name: 'Natasha K.',
    category: 'Internacional',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=650&fit=crop',
    desc: 'Modelo rusa con experiencia internacional en Europa y Latinoamérica. Especialista en fotografía editorial de alto nivel y campañas de moda. Habla español, inglés y ruso.',
    altura: '1.80 m',
    ojos: 'Azules',
    cabello: 'Rubio',
    experiencia: '7 años',
    precio: '$200.000',
    wsp: '56900000007'
  },
  camila: {
    name: 'Camila F.',
    category: 'Nueva Cara',
    img: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=500&h=650&fit=crop',
    desc: 'Joven modelo con gran potencial. Actualmente construyendo su book profesional. Disponible para lookbooks, fotografía de producto y eventos de menor escala.',
    altura: '1.72 m',
    ojos: 'Cafés',
    cabello: 'Castaño',
    experiencia: '6 meses',
    precio: '$70.000',
    wsp: '56900000008'
  }
};

// ===== OPEN MODAL =====
function openModal(id) {
  const data = modelData[id];
  if (!data) return;

  const content = `
    <div class="modal-profile">
      <div class="modal-img">
        <img src="${data.img}" alt="${data.name}" />
      </div>
      <div class="modal-details">
        <div>
          <h2>${data.name}</h2>
          <p class="modal-cat">${data.category}</p>
          <p class="modal-desc">${data.desc}</p>
          <ul class="modal-specs">
            <li><span>Altura</span><span>${data.altura}</span></li>
            <li><span>Ojos</span><span>${data.ojos}</span></li>
            <li><span>Cabello</span><span>${data.cabello}</span></li>
            <li><span>Experiencia</span><span>${data.experiencia}</span></li>
          </ul>
        </div>
        <div>
          <div class="modal-price">
            <p>Tarifa por hora</p>
            <strong>${data.precio}</strong> <span>/ hora</span>
          </div>
          <a href="https://wa.me/${data.wsp}?text=Hola,%20me%20interesa%20contratar%20a%20${encodeURIComponent(data.name)}%20para%20un%20proyecto." 
             target="_blank" class="btn-wsp-modal">
            <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('modal-content').innerHTML = content;
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== FORM SUBMIT =====
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '¡Solicitud enviada!';
  btn.style.background = '#27ae60';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar Solicitud';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
  });
});
