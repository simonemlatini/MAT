/* ============================
   DATOS DE PROYECTOS
   ============================ */
const PROJECTS = {
  vermuteria: {
    num: '01',
    name: 'La Vermutería\nPop Bar',
    category: { es: 'Identidad de Marca', pt: 'Identidade de Marca', en: 'Brand Identity' },
    year: '2024',
    colors: ['#8C2D55','#FFF5CD','#FFD782','#237D7D'],
    images: [
      'assets/img/vermuteria/slide-06.jpg',
      'assets/img/vermuteria/logo-04.jpg',
      'assets/img/vermuteria/pattern-11.jpg',
      'assets/img/vermuteria/mockup-12.jpg',
      'assets/img/vermuteria/colors-09.jpg',
    ],
    desc: {
      es: 'Identidad visual completa para una vermutería pop-up con carácter festivo y mediterráneo. Logotipo, paleta de colores, tipografía, pattern e iconografía propios.',
      pt: 'Identidade visual completa para uma vermuteria pop-up com caráter festivo e mediterrâneo. Logotipo, paleta de cores, tipografia, padrão e iconografia próprios.',
      en: 'Complete visual identity for a festive, Mediterranean-inspired pop-up vermut bar. Logo, color palette, typography, pattern and custom iconography.',
    },
  },
  simetria: {
    num: '02',
    name: 'Simetría\nLegal',
    category: { es: 'Identidad de Marca', pt: 'Identidade de Marca', en: 'Brand Identity' },
    year: '2024',
    colors: ['#2277C4','#FFC91D','#34AD23','#E880C3','#D02E26'],
    images: [
      'assets/img/simetria/slide-03.jpg',
      'assets/img/simetria/logo-04.jpg',
      'assets/img/simetria/editorial-11.jpg',
      'assets/img/simetria/mockup-12.jpg',
    ],
    desc: {
      es: 'Identidad moderna y elegante para un estudio legal que rompe los esquemas tradicionales del sector jurídico. Tipografía clásica con acentos de color vibrantes.',
      pt: 'Identidade moderna e elegante para um escritório jurídico que quebra os padrões tradicionais do setor. Tipografia clássica com acentos de cores vibrantes.',
      en: 'Modern and elegant brand identity for a law firm that breaks the traditional molds. Classic typography with vibrant color accents.',
    },
  },
  tasty: {
    num: '03',
    name: 'Tasty\nMilanezza',
    category: { es: 'Identidad de Marca', pt: 'Identidade de Marca', en: 'Brand Identity' },
    year: '2024',
    colors: ['#CC000F','#FFEECC','#FFE161','#E45B00'],
    images: [
      'assets/img/tasty/slide-11.jpg',
      'assets/img/tasty/logo-09.jpg',
      'assets/img/tasty/mockup-12.jpg',
      'assets/img/tasty/mockup2-13.jpg',
    ],
    desc: {
      es: 'Marca audaz y apetitosa para una cadena de comida urbana especializada en milanesas con coberturas de pizza. Gráfica retro con energía contemporánea.',
      pt: 'Marca ousada e apetitosa para uma rede de comida urbana especializada em milanesas com coberturas de pizza. Gráfico retrô com energia contemporânea.',
      en: 'Bold and appetizing brand for an urban food chain specializing in pizza-topped milanesas. Retro graphics with contemporary energy.',
    },
  },
};

/* ============================
   TRADUCCIONES
   ============================ */
const I18N = {
  es: {
    'hero-label':      'Studio de branding',
    'hero-sub':        'Creamos identidades que perduran.',
    'scroll':          'Scroll',
    'section-work':    'Trabajo',
    'branding':        'Branding',
    'contact-label':   '¿Hablamos?',
    'contact-title':   'Trabajemos<br>juntos.',
    'email-btn':       'Escribinos',
    'footer-made':     'Hecho con intención.',
  },
  pt: {
    'hero-label':      'Studio de branding',
    'hero-sub':        'Criamos identidades que perduram.',
    'scroll':          'Scroll',
    'section-work':    'Trabalho',
    'branding':        'Branding',
    'contact-label':   'Vamos conversar?',
    'contact-title':   'Trabalhemos<br>juntos.',
    'email-btn':       'Escreva-nos',
    'footer-made':     'Feito com intenção.',
  },
  en: {
    'hero-label':      'Branding studio',
    'hero-sub':        'We create identities that last.',
    'scroll':          'Scroll',
    'section-work':    'Work',
    'branding':        'Branding',
    'contact-label':   "Let's talk?",
    'contact-title':   "Let's work<br>together.",
    'email-btn':       'Write to us',
    'footer-made':     'Made with intention.',
  },
};

let lang = 'es';

function applyLang(l) {
  lang = l;
  const dict = I18N[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === l)
  );
  // Si el modal está abierto, actualizar descripción y categoría
  if (currentProject && modal.classList.contains('open')) {
    const p = PROJECTS[currentProject];
    document.getElementById('modal-cat').textContent = p.category[l];
    document.getElementById('modal-desc').textContent = p.desc[l];
  }
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => applyLang(btn.dataset.lang))
);

/* ============================
   CURSOR
   ============================ */
const dot  = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

(function tickCursor() {
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(tickCursor);
})();

document.querySelectorAll('a, button, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('is-hovering'));
});

/* ============================
   LOADER → INTRO
   ============================ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const loaderLogo = document.querySelector('.loader-logo');

  gsap.timeline()
    // Logo entra
    .to(loaderLogo, {
      scaleY: 1, duration: .9,
      ease: 'power4.out', transformOrigin: 'bottom center'
    })
    // Logo sale
    .to(loaderLogo, { y: -30, opacity: 0, duration: .5, ease: 'power2.in', delay: .4 })
    // Loader sube
    .to(loader, { yPercent: -100, duration: .85, ease: 'power4.inOut' }, '-=.25')
    // Hero content entra en cascada
    .from('.hero-label', { y: 24, opacity:0, duration:.7, ease:'power3.out' }, '-=.35')
    .from('.hero-title',  { y: 60, opacity:0, duration:.9, ease:'power4.out' }, '-=.6')
    .from('.hero-sub',    { y: 24, opacity:0, duration:.7, ease:'power3.out' }, '-=.55')
    .from('.marquee-wrap',{ opacity:0, duration:.6 }, '-=.4')
    .from('.scroll-cue',  { opacity:0, duration:.6 }, '-=.3');
});

/* ============================
   SCROLL ANIMATIONS
   ============================ */
gsap.registerPlugin(ScrollTrigger);

// Proyectos aparecen al scrollear
gsap.utils.toArray('.project-item').forEach((el, i) => {
  gsap.from(el, {
    y: 48, opacity: 0, duration: .85, ease: 'power3.out',
    delay: i * 0.08,
    scrollTrigger: { trigger: el, start: 'top 88%' }
  });
});

// Contacto
gsap.from('.contact-content', {
  y: 60, opacity:0, duration:1, ease:'power3.out',
  scrollTrigger: { trigger:'#contact', start:'top 72%' }
});

/* ============================
   MODAL — expansión in-situ
   ============================ */
const modal = document.getElementById('modal');
let currentProject = null;

function openModal(key) {
  const p = PROJECTS[key];
  if (!p) return;
  currentProject = key;

  // Rellenar datos
  document.getElementById('modal-num').textContent   = p.num;
  document.getElementById('modal-title').innerHTML   = p.name.replace(/\n/g,'<br>');
  document.getElementById('modal-cat').textContent   = p.category[lang];
  document.getElementById('modal-yr').textContent    = p.year;
  document.getElementById('modal-desc').textContent  = p.desc[lang];

  // Galería de imágenes
  const gallery = document.getElementById('modal-gallery');
  gallery.innerHTML = p.images.map(src =>
    `<img src="${src}" alt="${p.name.replace(/\n/,' ')}" class="gallery-img" loading="lazy">`
  ).join('');

  // Swatches de colores
  const swatches = document.getElementById('modal-colors');
  swatches.innerHTML = p.colors.map(c =>
    `<div class="swatch" style="background:${c}" title="${c}"></div>`
  ).join('');

  // Abrir
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.scrollTo(0, 0);

  // Animar contenido interno
  gsap.fromTo('.modal-intro',
    { y: 50, opacity:0 },
    { y: 0,  opacity:1, duration:.75, ease:'power3.out', delay:.25 }
  );
  gsap.fromTo('.modal-gallery',
    { y: 35, opacity:0 },
    { y: 0,  opacity:1, duration:.7,  ease:'power3.out', delay:.4 }
  );
  gsap.fromTo('.modal-bottom',
    { y: 30, opacity:0 },
    { y: 0,  opacity:1, duration:.7,  ease:'power3.out', delay:.52 }
  );
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  currentProject = null;
}

document.querySelectorAll('.project-item').forEach(item =>
  item.addEventListener('click', () => openModal(item.dataset.project))
);

document.getElementById('modal-close').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
