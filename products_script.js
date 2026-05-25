const WA_NUMBER = '923212765705';

// ── REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.08 });
reveals.forEach(r => observer.observe(r));

// ── DRAWER ──
function toggleDrawer() {
  document.getElementById('drawer').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

// ── RENDER PRODUCTS ──
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  if (!list || list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-laptop"></i>
        No products found. Try a different search.
      </div>`;
    return;
  }

  grid.innerHTML = list.map((p, idx) => {
    let badgeHtml = '';
    if (p.badge) {
      const lc = p.badge.toLowerCase();
      const bc = lc === 'hot' ? 'b-hot' : lc === 'sale' ? 'b-sale' : 'b-new';
      badgeHtml = `<span class="sbadge ${bc}">${p.badge}</span>`;
    }

    const specArr = p.spec
      ? p.spec.split(/·|•|\||\n/).map(s => s.trim()).filter(Boolean).slice(0, 3)
      : [];
    const specTags = specArr.map(s => `<span class="scard-spec-tag">${s}</span>`).join('');
    const oldPrice = p.old ? `<span class="scard-old">${p.old}</span>` : '';

    return `
      <div class="scard" style="animation-delay:${(idx % 8) * 0.06}s" onclick="openProductModal('${escStr(p.name)}','${escStr(p.spec||'')}','${escStr(p.price)}','${escStr(p.img||'')}','${escStr(p.old||'')}','${escStr(p.cat||'')}')">
        <div class="scard-top-accent"></div>
        ${badgeHtml}
        <div class="scard-img">
          <img src="${p.img || ''}" alt="${p.name}" onerror="this.style.opacity='0.3'" />
        </div>
        <div class="scard-body">
          <div class="scard-cat">${p.cat || 'laptop'}</div>
          <div class="scard-name">${p.name}</div>
          <div class="scard-specs">${specTags}</div>
          <div class="scard-divider"></div>
          <div class="scard-footer">
            <div class="scard-price-wrap">
              ${oldPrice}
              <span class="scard-price">${p.price}</span>
            </div>
            <button class="scard-btn" onclick="event.stopPropagation(); orderNow('${escStr(p.name)}','${escStr(p.spec||'')}','${escStr(p.price)}')">
              <i class="fab fa-whatsapp"></i> Order
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function escStr(s) {
  return String(s).replace(/'/g, "\\'").replace(/\n/g, ' ');
}

// ── FILTER ──
function filterProducts() {
  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const cat = document.getElementById('catFilter')?.value || 'all';
  const brand = document.getElementById('brandFilter')?.value || 'all';

  const filtered = (typeof products !== 'undefined' ? products : []).filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || (p.spec && p.spec.toLowerCase().includes(search));
    const matchCat = cat === 'all' || p.cat === cat;
    const matchBrand = brand === 'all' || p.name.toLowerCase().includes(brand);
    return matchSearch && matchCat && matchBrand;
  });

  renderProducts(filtered);
}

// ── ORDER ──
function orderNow(name, spec, price) {
  const msg = encodeURIComponent(`Hello Alfa Biz! I want to order:\n\n📦 *${name}*\n🔧 ${spec}\n💰 ${price}\n\nPlease confirm availability.`);
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

// ── MODAL ──
function openProductModal(name, spec, price, img, oldPrice, category) {
  document.getElementById('modal-img').src = img;
  document.getElementById('modal-img').alt = name;
  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-price-left').textContent = price;
  document.getElementById('modal-price-right').textContent = price;
  document.getElementById('modal-badge-right').textContent = (category || 'Laptop').toUpperCase();

  const specsUl = document.getElementById('modal-specs');
  specsUl.innerHTML = '';
  if (spec) {
    spec.split(/·|•|\||\n/).forEach(item => {
      const trimmed = item.trim();
      if (trimmed) {
        const li = document.createElement('li');
        li.textContent = trimmed;
        specsUl.appendChild(li);
      }
    });
  }

  document.getElementById('modal-order-btn').onclick = () => orderNow(name, spec, price);
  document.getElementById('modal-inquire-btn').onclick = () => {
    const msg = encodeURIComponent(`Hello Alfa Biz! I'm interested in:\n\n📦 *${name}*\n🔧 ${spec}\n💰 ${price}\n\nIs this available?`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  };

  const modal = document.getElementById('product-modal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(event, force = false) {
  const modal = document.getElementById('product-modal');
  if (force || event.target === modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const m = document.getElementById('product-modal');
    if (m?.classList.contains('open')) { m.classList.remove('open'); document.body.style.overflow = ''; }
  }
});

// ── INIT ──
if (typeof products !== 'undefined') {
  renderProducts(products);
}

if (document.getElementById('searchInput')) {
  document.getElementById('searchInput').addEventListener('input', filterProducts);
}
if (document.getElementById('catFilter')) {
  document.getElementById('catFilter').addEventListener('change', filterProducts);
}