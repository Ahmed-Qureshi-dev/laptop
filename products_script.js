document.addEventListener('DOMContentLoaded', () => {
    // Using global products and WA_NUMBER from products_data.js

    window.orderNow = function(name, spec, price) {
      const msg = `Hello Alfa Biz! I want to ORDER NOW:

Product: ${name}
Specs: ${spec}
Price: ${price}

Please confirm and share payment details.`;
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg), '_blank');
    };

    window.toggleDrawer = function() {
      document.getElementById('drawer').classList.toggle('active');
      document.getElementById('overlay').classList.toggle('active');
    };

    window.openProductModalById = function(id) {
      const p = products.find(prod => prod.id === id);
      if (!p) return;
      window.openProductModal(p.name, p.spec, p.price, p.img, p.old, p.cat);
    };

    window.renderProducts = function(data) {
      const grid = document.getElementById('productsGrid');
      grid.innerHTML = data.map(p => `
        <div class="pcard reveal" onclick="openProductModalById(${p.id})">
          ${p.badge ? `<span class="pbadge ${p.badge === 'Hot' ? 'b-hot' : 'b-new'}">${p.badge}</span>` : ''}
          <div class="pimg"><img src="${p.img}" alt="${p.name}"></div>
          <h3 class="pname">${p.name}</h3>
          <div class="pcard-footer">
            <div class="price-wrap">
              ${p.old ? `<span class="old-price">${p.old}</span>` : ''}
              <div class="pprice">${p.price}</div>
            </div>
            <button class="pcard-btn-order" onclick="event.stopPropagation(); orderNow('${p.name.replace(/'/g, "\\'")}', '${p.spec.replace(/'/g, "\\'")}', '${p.price}')">
              <i class="fab fa-whatsapp"></i> Order Now
            </button>
          </div>
        </div>
      `).join('');
      initReveal(); // Trigger reveal check for new items
    };

    window.filterProducts = function() {
      const search = document.getElementById('searchInput').value.toLowerCase();
      const cat = document.getElementById('catFilter').value;
      const brand = document.getElementById('brandFilter').value;
      const filtered = products.filter(p => {
        return (p.name.toLowerCase().includes(search) || p.spec.toLowerCase().includes(search)) && (cat === 'all' || p.cat === cat) && (brand === 'all' || p.brand === brand);
      });
      renderProducts(filtered);
    };

    // LENIS SMOOTH SCROLL
    const lScript = document.createElement('script');
    lScript.src = "https://unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js";
    lScript.onload = () => {
      const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    };
    document.head.appendChild(lScript);

    renderProducts(products);

    // REVEAL LOGIC
    function initReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }
    initReveal();

    // PRELOADER REMOVAL
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        setTimeout(() => {
          preloader.classList.add('loaded');
          initReveal(); // Re-trigger reveal after preloader is gone
        }, 2800);
      }
    });

    // Floating capsule navbar scroll effect
    const navbar = document.querySelector('nav');
    if (navbar) {
      const handleScroll = () => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    // ── PRODUCT DETAIL MODAL CONTROLS ──
    window.openProductModal = function(name, spec, price, img, oldPrice, category) {
      document.getElementById('modal-img').src = img;
      document.getElementById('modal-img').alt = name;
      document.getElementById('modal-title').textContent = name;
      document.getElementById('modal-price-left').textContent = price;
      document.getElementById('modal-price-right').textContent = price;
      
      const badgeRight = document.getElementById('modal-badge-right');
      badgeRight.textContent = (category || 'Laptop').toUpperCase();
      
      const specsUl = document.getElementById('modal-specs');
      specsUl.innerHTML = '';
      
      if (spec) {
        const specItems = spec.split(/·|•|\||\n/);
        specItems.forEach(item => {
          const trimmed = item.trim();
          if (trimmed) {
            const li = document.createElement('li');
            li.textContent = trimmed;
            specsUl.appendChild(li);
          }
        });
      } else {
        const li = document.createElement('li');
        li.textContent = "High-performance tech specifications";
        specsUl.appendChild(li);
      }
      
      const orderBtn = document.getElementById('modal-order-btn');
      orderBtn.onclick = function() {
        window.orderNow(name, spec, price);
      };
      
      const inquireBtn = document.getElementById('modal-inquire-btn');
      inquireBtn.onclick = function() {
        const msg = encodeURIComponent(`Hello Alfa Biz! I'm interested in inquiring about:\n\n📦 *${name}*\n🔧 ${spec}\n💰 ${price}\n\nIs this available?`);
        window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank');
      };
      
      const modal = document.getElementById('product-modal');
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    window.closeModal = function(event, forceClose = false) {
      const modal = document.getElementById('product-modal');
      if (forceClose || event.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('product-modal');
        if (modal && modal.classList.contains('open')) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      }
    });
});
