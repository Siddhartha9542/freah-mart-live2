// script.js - Fresh Mart Grocery Logic

// 1. COMMON HELPERS
function showToast(msg, ms=900){
  const t = document.createElement('div'); t.className='toast'; t.textContent = msg; document.body.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('show'));
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=> t.remove(),300); }, ms+300);
}

// 2. STORE LOGIC
const productsEl = document.getElementById('products');

// Only run store logic if we are on the homepage
if(productsEl){

    // --- GROCERY DATA ---
    const PRODUCTS = [
      {
        id: 1, 
        title: 'Veg & Fruits', 
        desc: 'Farm fresh daily', 
        img: 'images/cat-veg.jpg', 
        children: [
            {id:'1-1', title:'Onion (1kg)', price:40, icon:'images/icons/onion.png'},
            {id:'1-2', title:'Tomato (1kg)', price:35, icon:'images/icons/tomato.png'},
            {id:'1-3', title:'Potato (1kg)', price:30, icon:'images/icons/potato.png'},
            {id:'1-4', title:'Green Chilli (250g)', price:20, icon:'images/icons/chilli.png'},
            {id:'1-5', title:'Lemon (6pcs)', price:25, icon:'images/icons/lemon.png'},
            {id:'1-6', title:'Coriander', price:15, icon:'images/icons/coriander.png'},
            {id:'1-7', title:'Banana (Dozen)', price:60, icon:'images/icons/banana.png'},
            {id:'1-8', title:'Apple (500g)', price:120, icon:'images/icons/apple.png'}
      ]},
      {
        id: 2, 
        title: 'Atta & Rice', 
        desc: 'Daily staples', 
        img: 'images/cat-staples.jpg', 
        children: [
            {id:'2-1', title:'Atta (5kg)', price:260, icon:'images/icons/atta.png'},
            {id:'2-2', title:'Basmati Rice', price:110, icon:'images/icons/rice.png'},
            {id:'2-3', title:'Toor Dal', price:145, icon:'images/icons/toor.png'},
            {id:'2-4', title:'Moong Dal', price:130, icon:'images/icons/moong.png'},
            {id:'2-5', title:'Sugar (1kg)', price:45, icon:'images/icons/sugar.png'},
            {id:'2-6', title:'Salt (1kg)', price:22, icon:'images/icons/salt.png'},
            {id:'2-7', title:'Sun Oil (1L)', price:160, icon:'images/icons/oil.png'}
      ]},
      {
        id: 3, 
        title: 'Dairy & Bread', 
        desc: 'Milk, curd & eggs', 
        img: 'images/cat-dairy.jpg', 
        children: [
            {id:'3-1', title:'Fresh Milk', price:28, icon:'images/icons/milk.png'},
            {id:'3-2', title:'Curd (400g)', price:35, icon:'images/icons/curd.png'},
            {id:'3-3', title:'Paneer (200g)', price:95, icon:'images/icons/paneer.png'},
            {id:'3-4', title:'Butter (100g)', price:58, icon:'images/icons/butter.png'},
            {id:'3-5', title:'Eggs (6pcs)', price:42, icon:'images/icons/eggs.png'},
            {id:'3-6', title:'Bread', price:40, icon:'images/icons/bread.png'},
            {id:'3-7', title:'Cheese', price:120, icon:'images/icons/cheese.png'}
      ]},
      {
        id: 4, 
        title: 'Masalas', 
        desc: 'Spices & dry fruits', 
        img: 'images/cat-spices.jpg', 
        children: [
            {id:'4-1', title:'Turmeric', price:35, icon:'images/icons/turmeric.png'},
            {id:'4-2', title:'Chilli Powder', price:45, icon:'images/icons/redchilli.png'},
            {id:'4-3', title:'Garam Masala', price:80, icon:'images/icons/garam.png'},
            {id:'4-4', title:'Jeera', price:60, icon:'images/icons/jeera.png'},
            {id:'4-5', title:'Mustard', price:20, icon:'images/icons/mustard.png'},
            {id:'4-6', title:'Ginger Paste', price:30, icon:'images/icons/gingergarlic.png'},
            {id:'4-7', title:'Almonds', price:110, icon:'images/icons/almonds.png'}
      ]},
      {
        id: 5, 
        title: 'Snacks', 
        desc: 'Biscuits & chips', 
        img: 'images/cat-snacks.jpg', 
        children: [
            {id:'5-1', title:'Lays Classic', price:20, icon:'images/icons/lays.png'},
            {id:'5-2', title:'Kurkure', price:20, icon:'images/icons/kurkure.png'},
            {id:'5-3', title:'Oreo', price:35, icon:'images/icons/oreo.png'},
            {id:'5-4', title:'Maggi', price:14, icon:'images/icons/maggi.png'},
            {id:'5-5', title:'Cookies', price:25, icon:'images/icons/goodday.png'},
            {id:'5-6', title:'Chocolate', price:60, icon:'images/icons/chocolate.png'},
            {id:'5-7', title:'Peanut Butter', price:180, icon:'images/icons/peanut.png'}
      ]},
      {
        id: 6, 
        title: 'Beverages', 
        desc: 'Cold drinks & tea', 
        img: 'images/cat-beverages.jpg', 
        children: [
            {id:'6-1', title:'Coke', price:45, icon:'images/icons/coke.png'},
            {id:'6-2', title:'Sprite', price:45, icon:'images/icons/sprite.png'},
            {id:'6-3', title:'Maaza', price:42, icon:'images/icons/maaza.png'},
            {id:'6-4', title:'Red Label', price:140, icon:'images/icons/tea.png'},
            {id:'6-5', title:'Nescafe', price:180, icon:'images/icons/coffee.png'},
            {id:'6-6', title:'Water', price:20, icon:'images/icons/water.png'},
            {id:'6-7', title:'Real Juice', price:110, icon:'images/icons/juice.png'}
      ]},
      {
        id: 7, 
        title: 'Personal Care', 
        desc: 'Soaps & hygiene', 
        img: 'images/cat-personal.jpg', 
        children: [
            {id:'7-1', title:'Lux Soap', price:38, icon:'images/icons/soap.png'},
            {id:'7-2', title:'Handwash', price:90, icon:'images/icons/handwash.png'},
            {id:'7-3', title:'Colgate', price:65, icon:'images/icons/colgate.png'},
            {id:'7-4', title:'Shampoo', price:180, icon:'images/icons/shampoo.png'},
            {id:'7-5', title:'Face Wash', price:120, icon:'images/icons/facewash.png'},
            {id:'7-6', title:'Hair Oil', price:110, icon:'images/icons/hairoil.png'}
      ]},
      {
        id: 8, 
        title: 'Cleaning', 
        desc: 'Household needs', 
        img: 'images/cat-cleaning.jpg', 
        children: [
            {id:'8-1', title:'Surf Excel', price:130, icon:'images/icons/surf.png'},
            {id:'8-2', title:'Vim Bar', price:20, icon:'images/icons/vim.png'},
            {id:'8-3', title:'Lizol', price:110, icon:'images/icons/lizol.png'},
            {id:'8-4', title:'Harpic', price:95, icon:'images/icons/harpic.png'},
            {id:'8-5', title:'Garbage Bags', price:70, icon:'images/icons/bags.png'},
            {id:'8-6', title:'Wipes', price:40, icon:'images/icons/sponge.png'}
      ]},
      {
        id: 9, 
        title: 'Baby Care', 
        desc: 'Diapers & food', 
        img: 'images/cat-baby.jpg', 
        children: [
            {id:'9-1', title:'Pampers', price:12, icon:'images/icons/pampers.png'},
            {id:'9-2', title:'Cerelac', price:240, icon:'images/icons/cerelac.png'},
            {id:'9-3', title:'Baby Lotion', price:180, icon:'images/icons/lotion.png'},
            {id:'9-4', title:'Baby Soap', price:65, icon:'images/icons/babysoap.png'},
            {id:'9-5', title:'Wipes Pack', price:90, icon:'images/icons/wipes.png'}
      ]}
    ];

    // DOM refs
    const cartList = document.getElementById('cartList');
    const totalEl = document.getElementById('total');
    const countEl = document.getElementById('count');
    const subPanel = document.getElementById('subPanel');
    const subList = document.getElementById('subList');
    const subTitle = document.getElementById('subTitle');
    const footerInner = document.querySelector('.footer-inner');

    let CART = JSON.parse(localStorage.getItem('rl_cart') || '{}');
    let currentTotalValue = 0;

    // Helper: Animated Title
    function makeAnimatedTitle(text){
      const wrap = document.createElement('div'); wrap.className = 'animated-title';
      [...text].forEach((ch,i)=>{
        const s = document.createElement('span'); s.className = 'char'; s.textContent = ch; s.style.setProperty('--i', String(i));
        wrap.appendChild(s);
      });
      return wrap;
    }

    // RENDER: Grid of Categories
    function renderProducts(list){
      if(!productsEl) return;
      productsEl.innerHTML = '';
      
      list.forEach((p, idx)=>{
        const card = document.createElement('div'); card.className='card';
        
        // Title
        const titleWrap = document.createElement('div'); titleWrap.className='title-wrap';
        const animated = makeAnimatedTitle(p.title);
        setTimeout(()=> animated.classList.add('play'), 40 + idx*50);
        const subtitle = document.createElement('div'); subtitle.className='subtitle'; subtitle.textContent = p.desc;
        titleWrap.appendChild(animated); titleWrap.appendChild(subtitle);

        // Image
        const media = document.createElement('div'); media.className='media'; media.dataset.id = p.id;
        const img = document.createElement('img'); img.alt = p.title; img.src = p.img || '';
        
        // Image Error Handler (Shows Text if image missing)
        img.onerror = ()=> { 
            img.style.display='none'; 
            const ph = document.createElement('div'); 
            ph.className='placeholder'; 
            ph.textContent=p.title.charAt(0); 
            media.appendChild(ph); 
        };
        media.appendChild(img);

        const label = document.createElement('div'); label.className='tile-label'; label.textContent = p.title;

        card.appendChild(titleWrap); card.appendChild(media); card.appendChild(label);
        productsEl.appendChild(card);
      });
    }

    // RENDER: Cart Sidebar
    function saveCart(){ localStorage.setItem('rl_cart', JSON.stringify(CART)); }

    function renderCart(){
      if(!cartList) return;
      cartList.innerHTML = '';
      let total = 0, items = 0;
      
      Object.values(CART).forEach((ci, idx)=>{
        const el = document.createElement('div'); el.className='cart-item';
        el.innerHTML = `
          <div style="width:40px;height:40px;border-radius:8px;background:#f0fdf4;display:flex;align-items:center;justify-content:center;font-weight:700;color:#15803d">${ci.title.charAt(0)}</div>
          <div style="flex:1"><div style="font-weight:700;font-size:13px">${ci.title}</div><div class="muted" style="font-size:11px">₹${ci.price}</div></div>
          <div style="text-align:right"><div class="qty"><button class="ghost" data-action="dec" data-id="${ci.id}">-</button><div>${ci.qty}</div><button class="ghost" data-action="inc" data-id="${ci.id}">+</button></div><div style="font-weight:800;font-size:13px;margin-top:4px">₹${ci.price*ci.qty}</div></div>
        `;
        cartList.appendChild(el);
        total += Number(ci.price) * ci.qty; items += ci.qty;
      });
      currentTotalValue = total;
      if(totalEl) totalEl.textContent = '₹' + total;
      if(countEl) countEl.textContent = items + (items===1 ? ' item' : ' items');
      
      if(items===0) cartList.innerHTML = '<div class="muted" style="text-align:center; padding:10px;">Your basket is empty.</div>';
    }

    // Add To Cart Logic
    function addToCart(id, qty=1, title=null, price=null){
      const key = String(id);
      if(!CART[key]) CART[key] = {id:key, qty, title: title || ('Item '+key), price: price || 0};
      else CART[key].qty += qty;
      saveCart(); renderCart();
    }

    // Sub-Panel Logic (Opening a Category)
    function openCategory(id){
      const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
      
      // Close if already open
      if(subPanel.dataset.active === String(id)){ clearPanel(); return; }
      
      clearPanel(); 
      subPanel.dataset.active = String(id); 
      subTitle.textContent = p.title; 
      subList.innerHTML = '';
      
      p.children.forEach(ch=>{
        const row = document.createElement('div'); row.className='sub-item';
        // Icon
        const icon = document.createElement('img'); 
        icon.src = ch.icon || ''; 
        icon.onerror = ()=> { icon.src='https://placehold.co/40x40?text='+ch.title.charAt(0); };
        
        const meta = document.createElement('div'); meta.className='meta'; 
        meta.innerHTML = `<div class="name">${ch.title}</div>`;
        
        const price = document.createElement('div'); price.className='price'; price.textContent = '₹' + ch.price;
        
        row.appendChild(icon); row.appendChild(meta); row.appendChild(price);
        row.addEventListener('click', ()=>{ 
            addToCart(ch.id, 1, ch.title, ch.price); 
            showToast(`${ch.title} added`); 
        });
        subList.appendChild(row);
      });

      // Dim background
      document.querySelectorAll('.card').forEach(c=>c.classList.add('dim'));
      const active = document.querySelector(`.card .media[data-id="${id}"]`); 
      if(active) active.closest('.card').classList.remove('dim');

      // Show panel
      subPanel.style.display='block'; 
      setTimeout(()=> subPanel.classList.add('open'), 10);
      subPanel.setAttribute('aria-hidden','false');
    }

    function clearPanel(){ 
        subPanel.classList.remove('open'); 
        setTimeout(()=> { 
            if(!subPanel.classList.contains('open')) subPanel.style.display='none'; 
        }, 300);
        subPanel.setAttribute('aria-hidden','true'); 
        subPanel.dataset.active=''; 
        document.querySelectorAll('.card').forEach(c=>c.classList.remove('dim')); 
    }
    
    if(document.getElementById('closeSub')) {
        document.getElementById('closeSub').addEventListener('click', clearPanel);
    }

    // Global Click Listener
    document.body.addEventListener('click', e=>{
      const media = e.target.closest('.media');
      if(media && media.dataset.id){ openCategory(Number(media.dataset.id)); return; }
      
      const action = e.target.dataset.action || e.target.closest('[data-action]')?.dataset.action;
      const idAttr = e.target.dataset.id || e.target.closest('[data-id]')?.dataset.id;
      
      if(action && idAttr) handleCartAction(action, String(idAttr));
    });

    function handleCartAction(action, id){
      if(!CART[id]) return;
      if(action==='inc') CART[id].qty += 1;
      if(action==='dec'){ CART[id].qty -= 1; if(CART[id].qty <= 0) delete CART[id]; }
      if(action==='rem') delete CART[id];
      saveCart(); renderCart();
    }

    // SEARCH
    const searchInput = document.getElementById('q');
    if(searchInput) {
        searchInput.addEventListener('input', e=>{
            const q = e.target.value.toLowerCase().trim();
            const filtered = PRODUCTS.filter(p => {
                const mainMatch = p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
                const childMatch = p.children.some(c => c.title.toLowerCase().includes(q));
                return mainMatch || childMatch;
            });
            renderProducts(filtered);
        });
    }

    // INIT
    if(footerInner) footerInner.classList.add('show');
    if(document.getElementById('year')) document.getElementById('year').textContent = new Date().getFullYear();
    
    // Pay Button
    const payBtn = document.getElementById('directPayBtn');
    if(payBtn) {
        payBtn.addEventListener('click', () => {
            if(currentTotalValue <= 0) { showToast('Basket is empty!'); return; }
            window.location.href = `payment.html?amount=${currentTotalValue}`;
        });
    }

    // Start everything
    renderProducts(PRODUCTS);
    renderCart();
    clearPanel();
}


// 3. PAYMENT PAGE SPECIFIC LOGIC
const paymentPage = document.getElementById('paymentPageIdentifier');
if(paymentPage){
    const params = new URLSearchParams(window.location.search);
    const amount = params.get('amount') || '0';
    const disp = document.getElementById('payAmountDisplay');
    if(disp) disp.innerText = amount;

    const utrBtn = document.getElementById('submitUtrBtn');
    const utrInput = document.getElementById('utrInput');
    
    if(utrBtn && utrInput){
        utrBtn.addEventListener('click', () => {
            const val = utrInput.value.trim();
            if(!val || val.length < 4){
                alert("Please enter a valid 12-digit UTR Number.");
                return;
            }

            const rawCart = localStorage.getItem('rl_cart');
            const cartObj = rawCart ? JSON.parse(rawCart) : {};
            let itemNames = [];
            for (let key in cartObj) {
                const item = cartObj[key];
                itemNames.push(`${item.title} (${item.qty})`);
            }
            const itemsString = itemNames.length > 0 ? itemNames.join(', ') : "Item Purchase";

            const record = {
                amount: amount,
                items: itemsString,
                txId: val,
                status: "Processing",
                date: new Date().toLocaleDateString()
            };

            const history = JSON.parse(localStorage.getItem('rl_payment_history') || "[]");
            history.push(record);
            localStorage.setItem('rl_payment_history', JSON.stringify(history));

            utrBtn.innerText = 'Submitted';
            utrBtn.style.background = '#16a34a'; 
            
            setTimeout(() => {
                localStorage.removeItem('rl_cart');
                alert("Payment Submitted! Redirecting to profile...");
                window.location.href = "userprofile.html"; 
            }, 1000);
        });
    }
}
