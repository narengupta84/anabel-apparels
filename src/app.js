/* ================================================================
   ANABEL APPARELS — Shared App Logic (cart + nav)
   Requires data.js to be loaded first.
   ================================================================ */

/* -------- Cart State -------- */
var cart = JSON.parse(localStorage.getItem('anabel_cart') || '[]');

function saveCart() {
  localStorage.setItem('anabel_cart', JSON.stringify(cart));
}

function addToCart(productId, quantity) {
  quantity = quantity || 1;
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;
  var existing = cart.find(function(i) { return i.id === productId; });
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      img: product.mainImg,
      gender: product.gender,
      category: product.category,
      quantity: quantity
    });
  }
  saveCart();
  updateCartUI();
  var sidebar = document.getElementById('cart-sidebar');
  if (sidebar) sidebar.classList.add('active');
}

function removeFromCart(productId) {
  cart = cart.filter(function(i) { return i.id !== productId; });
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  var countEl = document.getElementById('cart-count');
  var containerEl = document.getElementById('cart-items-container');

  if (countEl) {
    var total = cart.reduce(function(s, i) { return s + i.quantity; }, 0);
    countEl.innerText = total;
  }

  if (!containerEl) return;

  if (cart.length === 0) {
    containerEl.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
    return;
  }

  containerEl.innerHTML = cart.map(function(item) {
    return '<div class="cart-item">' +
      '<img src="' + item.img + '" alt="' + item.name + '" class="cart-item-img">' +
      '<div class="cart-item-details">' +
        '<h4>' + item.name + '</h4>' +
        '<p>' + (item.gender === 'male' ? "Men's" : "Women's") + ' | Qty: ' + item.quantity + '</p>' +
      '</div>' +
      '<i class="fas fa-trash-alt remove-item" onclick="removeFromCart(' + item.id + ')"></i>' +
    '</div>';
  }).join('');
}

function sendWhatsAppOrder() {
  if (cart.length === 0) { alert('Your cart is empty!'); return; }
  var phone = '919883204737';
  var msg = 'Hello ANABEL APPARELS,%0A%0APrice quote request for the following items:%0A%0A';
  cart.forEach(function(item, i) {
    var genderLabel = item.gender === 'male' ? "Men's" : "Women's";
    msg += (i + 1) + '. *' + item.name + '* (' + genderLabel + ') - Qty: ' + item.quantity + '%0A';
  });
  msg += '%0APlease share pricing and availability. Thank you.';
  window.open('https://wa.me/' + phone + '?text=' + msg, '_blank');
}

/* -------- Nav + Page Init -------- */
document.addEventListener('DOMContentLoaded', function() {
  updateCartUI();

  var header = document.querySelector('header');
  var navMenu = document.querySelector('.nav-menu');
  var hamburger = document.querySelector('.hamburger');
  var cartIcon = document.getElementById('cart-icon');
  var closeCartBtn = document.querySelector('.close-cart');
  var cartSidebar = document.getElementById('cart-sidebar');

  /* Sticky header + section reveal + card stagger */
  function checkReveal() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);

    /* Section fade-in */
    document.querySelectorAll('section').forEach(function(section) {
      if (section.getBoundingClientRect().top < window.innerHeight - 80) {
        section.classList.add('visible');
      }
    });

    /* Staggered card reveal */
    document.querySelectorAll('.reveal').forEach(function(el) {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkReveal);

  /* Hamburger */
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      var icon = hamburger.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  /* Mobile dropdown toggles — click to open/close */
  document.querySelectorAll('.nav-item.dropdown > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        var parent = this.parentElement;
        /* Close all other open dropdowns */
        document.querySelectorAll('.nav-item.dropdown.open').forEach(function(el) {
          if (el !== parent) el.classList.remove('open');
        });
        parent.classList.toggle('open');
      }
    });
  });

  /* Close mobile menu when a dropdown item link is clicked */
  document.querySelectorAll('.dropdown-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (navMenu) navMenu.classList.remove('active');
      if (hamburger) {
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
      }
    });
  });

  /* Cart sidebar */
  if (cartIcon) {
    cartIcon.addEventListener('click', function(e) {
      e.preventDefault();
      if (cartSidebar) {
        cartSidebar.classList.add('active', 'open');
      }
    });
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', function() {
      if (cartSidebar) cartSidebar.classList.remove('active', 'open');
    });
  }

  /* Trigger once to reveal above-fold sections + cards */
  window.dispatchEvent(new Event('scroll'));
  /* Second pass after JS-rendered cards are in DOM */
  setTimeout(checkReveal, 80);
});
