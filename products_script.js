document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { id: 1, name: "Dell XPS 15 9530", cat: "business", brand: "dell", price: "Rs. 295,000", old: "Rs. 320,000", spec: "i7-13th Gen • 32GB RAM • 1TB SSD • RTX 4050 • 4K OLED", img: "assets/dell laptop.png", badge: "New" },
      { id: 2, name: "ROG Strix G16", cat: "gaming", brand: "asus", price: "Rs. 345,000", old: "Rs. 380,000", spec: "RTX 4060 • i7-13650HX • 16GB DDR5 • 1TB • 165Hz", img: "assets/laptop png.png", badge: "Hot" },
      { id: 3, name: "HP Spectre x360", cat: "creator", brand: "hp", price: "Rs. 275,000", old: "Rs. 290,000", spec: "i7-13th Gen • 16GB • 512GB • 4K Touch • Pen Included", img: "assets/hp-bg.png", badge: "" },
      { id: 4, name: "Lenovo Legion 5i Pro", cat: "gaming", brand: "lenovo", price: "Rs. 310,000", old: "Rs. 335,000", spec: "RTX 4050 • i7-13th Gen • 16GB • 1TB • QHD 165Hz", img: "assets/laptop lenovo.png", badge: "" },
      { id: 5, name: "MacBook Pro 14 M3", cat: "creator", brand: "apple", price: "Rs. 485,000", old: "Rs. 510,000", spec: "M3 Pro Chip • 18GB RAM • 512GB SSD • Space Black", img: "assets/premium laptop.png", badge: "New" },
      { id: 6, name: "ASUS Zenbook Duo 2024", cat: "creator", brand: "asus", price: "Rs. 395,000", old: "Rs. 420,000", spec: "Dual Screen • Ultra 9 • 32GB • 1TB • 3K 120Hz OLED", img: "assets/feature_product_no_bg.png", badge: "Hot" },
      { id: 7, name: "Dell Latitude 7440", cat: "business", brand: "dell", price: "Rs. 225,000", old: "Rs. 240,000", spec: "i5-13th Gen • 16GB • 512GB • vPro • Backlit KB", img: "assets/dell-bg.png", badge: "" },
      { id: 8, name: "HP Victus 15 2023", cat: "gaming", brand: "hp", price: "Rs. 195,000", old: "Rs. 215,000", spec: "RTX 3050 • i5-12th Gen • 16GB • 512GB • Performance Blue", img: "assets/hp-bg.png", badge: "Sale" },
      { id: 9, name: "Lenovo ThinkPad X1 Carbon", cat: "business", brand: "lenovo", price: "Rs. 380,000", old: "Rs. 410,000", spec: "i7-13th Gen • 16GB • 1TB • WUXGA • Carbon Fiber", img: "assets/lenovo-bg.png", badge: "" },
      { id: 10, name: "MacBook Air M2 13\"", cat: "student", brand: "apple", price: "Rs. 295,000", old: "Rs. 315,000", spec: "M2 Chip • 8GB RAM • 256GB SSD • Midnight Finish", img: "assets/premium-laptop.webp", badge: "" },
      { id: 11, name: "ASUS TUF Gaming F15", cat: "gaming", brand: "asus", price: "Rs. 245,000", old: "Rs. 260,000", spec: "RTX 4050 • i7-12th Gen • 16GB • 512GB • 144Hz", img: "assets/laptop png.png", badge: "" },
      { id: 12, name: "Dell Inspiron 16 5630", cat: "student", brand: "dell", price: "Rs. 185,000", old: "Rs. 195,000", spec: "i7-13th Gen • 16GB • 512GB • Platinum Silver", img: "assets/dell laptop.png", badge: "" },
      { id: 13, name: "HP Envy 13 x360", cat: "student", brand: "hp", price: "Rs. 165,000", old: "Rs. 180,000", spec: "i5-12th Gen • 8GB • 512GB • Touch • 2-in-1", img: "assets/hp-bg.png", badge: "" },
      { id: 14, name: "Lenovo IdeaPad Slim 3", cat: "student", brand: "lenovo", price: "Rs. 125,000", old: "Rs. 140,000", spec: "Ryzen 5 • 8GB • 512GB • FHD IPS • Abyss Blue", img: "assets/laptop lenovo.png", badge: "Value" },
      { id: 15, name: "Alienware x16 R1", cat: "gaming", brand: "dell", price: "Rs. 750,000", old: "Rs. 820,000", spec: "RTX 4080 • i9-13900HK • 32GB • 2TB • QHD+ 240Hz", img: "assets/dell-bg.png", badge: "Hot" },
      { id: 16, name: "HP Omen 16 2023", cat: "gaming", brand: "hp", price: "Rs. 325,000", old: "Rs. 350,000", spec: "RTX 4060 • Ryzen 7 7840HS • 16GB • 1TB • QHD", img: "assets/hp-bg.png", badge: "" },
      { id: 17, name: "Lenovo Yoga 9i Gen 8", cat: "creator", brand: "lenovo", price: "Rs. 365,000", old: "Rs. 390,000", spec: "i7-13th Gen • 16GB • 1TB • 4K OLED • Rotating Soundbar", img: "assets/lenovo-bg.png", badge: "" },
      { id: 18, name: "Dell Precision 5680", cat: "creator", brand: "dell", price: "Rs. 595,000", old: "Rs. 650,000", spec: "RTX 2000 Ada • i9-13th Gen • 64GB • 1TB • Workstation", img: "assets/dell-bg.png", badge: "" },
      { id: 19, name: "ROG Flow Z13 2023", cat: "gaming", brand: "asus", price: "Rs. 425,000", old: "Rs. 460,000", spec: "Tablet Mode • i9-13900H • RTX 4050 • 16GB • Nebula Display", img: "assets/laptop png.png", badge: "New" },
      { id: 20, name: "MacBook Pro 16 M3 Max", cat: "creator", brand: "apple", price: "Rs. 950,000", old: "Rs. 1,050,000", spec: "M3 Max (14-Core) • 64GB • 2TB • Liquid Retina XDR", img: "assets/premium laptop.png", badge: "Top Tier" }
    ];

    const WA_NUMBER = '923212765705';

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
