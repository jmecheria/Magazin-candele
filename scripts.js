function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ro',
    autoDisplay: false
  }, 'google_translate_element');
}

window.addEventListener('load', function () {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.split('-')[0];
  const availableLangs = ['en', 'fr', 'de', 'es', 'it', 'hu', 'bg']; // add more languages if needed

  if (langCode !== 'ro' && availableLangs.includes(langCode)) {
    const interval = setInterval(() => {
      const select = document.querySelector('select.goog-te-combo');
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
        clearInterval(interval);
      }
    }, 500);
  }
});

const produse = [
  {nume: 'Candelă mică', pret: 10, img: 'candela-mica.jpg'},
  {nume: 'Candelă mare', pret: 20, img: 'candela-mare.jpg'},
  {nume: 'Lumanare înviere', pret: 50, img: 'lumânare.jpg'},
  {nume: 'Psaltire', pret: 40, img: 'psaltire.jpg'},
  {nume: 'Ceaslov', pret: 70, img: 'Ceaslov.jpg'},
  {nume: 'Pomelnic anual', pret: 100, img: 'pomelnic.jpg'},
  {nume: 'Tămâie naturală', pret: 10, img: 'tămâie.jpg'},
  {nume: 'Icoană mică', pret: 40, img: 'icoană1.jpg'},
  {nume: 'Icoană mare', pret: 100, img: 'icoană2.jpg'},
  {nume: 'Mir', pret: 20, img: 'mir.jpg'}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
  const discountCode = document.getElementById('discount-code')?.value.trim().toLowerCase();
  const lista = document.getElementById('cart-items');
  let total = 0;

  lista.innerHTML = cart.map((p, i) => {
    let pretFinal = p.pret;
    let reducere = false;

    if (discountCode === 'candela10' && p.nume.toLowerCase().includes('candelă')) {
      pretFinal = (p.pret * 0.9).toFixed(2); // 10% reducere
      reducere = true;
    }

    const subtotal = pretFinal * p.cantitate;
    total += subtotal;
    const discountMessage = document.getElementById('discount-message');
    if (discountCode === 'candela10' && cart.some(p => p.nume.toLowerCase().includes('candelă'))) {
      discountMessage?.classList.remove('d-none');
    } else {
      discountMessage?.classList.add('d-none');
    }

    return `
      <li class="list-group-item">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <strong>${p.nume}</strong><br>
            <small>${reducere ? `<s>${p.pret} RON</s> ${pretFinal} RON` : `${p.pret} RON`} x </small>
            <input type="number" min="1" class="form-control d-inline-block" style="width: 60px;" value="${p.cantitate}" onchange="changeQty(${i}, this.value)">
            <small> = ${(subtotal).toFixed(2)} RON</small>
          </div>
          <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${i})">Șterge</button>
        </div>
      </li>`;
  }).join('');

  document.getElementById('cart-total').textContent = `${total.toFixed(2)} RON`;
  document.getElementById('produse-input').value = cart.map(p => `${p.nume} x${p.cantitate} (${p.pret} RON/buc)`).join(', ');
  document.getElementById('total-input').value = `${total.toFixed(2)} RON`;
  document.getElementById('cart-count-badge').textContent = cart.reduce((acc, p) => acc + p.cantitate, 0);
}

function addToCart(index) {
  const qty = parseInt(document.getElementById(`qty-${index}`).value) || 1;
  const produs = produse[index];

  const existingIndex = cart.findIndex(p => p.nume === produs.nume);
  if (existingIndex !== -1) {
    cart[existingIndex].cantitate += qty;
  } else {
    cart.push({ ...produs, cantitate: qty });
  }

  saveCart();
  updateCart();
  document.getElementById('toast-msg').style.display = 'block';
  setTimeout(() => {
    document.getElementById('toast-msg').style.display = 'none';
  }, 3000);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCart();
}

function filtreazaProduse() {
  const query = document.getElementById('filtru-produse').value.toLowerCase();
  const filteredProducts = produse.filter(p => p.nume.toLowerCase().includes(query));
  displayProducts(filteredProducts);
}

function displayProducts(products) {
  const list = document.getElementById('product-list');
  list.innerHTML = products.map(p => {
    const produsIndex = produse.findIndex(item => item.nume === p.nume); // find index from the original list
    return `
      <div class="col">
        <div class="product-card d-flex flex-column justify-content-between">
          <img src="${p.img}" alt="${p.nume}" loading="lazy">
          <h5 class="mt-2">${p.nume}</h5>
          <p>${p.pret} RON</p>
          <input type="number" id="qty-${produsIndex}" class="form-control mb-2" value="1" min="1" max="99">
          <button class="btn btn-danger w-100 mt-auto" onclick="addToCart(${produsIndex})">🛒 Adaugă în coș</button>
        </div>
      </div>
    `;
  }).join('');
}

function sorteazaProduse() {
  const sort = document.getElementById('sortare-produse').value;
  let products = produse.slice(); // make a copy

  if (sort === 'pret-asc') {
    products.sort((a, b) => a.pret - b.pret);
  } else if (sort === 'pret-desc') {
    products.sort((a, b) => b.pret - a.pret);
  }

  displayProducts(products);
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id === 'cart-page') updateCart();
  if(id === 'produse') updateCart(); 
}

document.getElementById('order-form').addEventListener('submit', function() {
  clearCart();
});

function changeQty(index, newQty) {
  const q = parseInt(newQty);
  if (q < 1) return;
  cart[index].cantitate = q;
  saveCart();
  updateCart();
}

const discountInput = document.getElementById('discount-code');
if (discountInput) {
  discountInput.addEventListener('input', updateCart);
}

function clearFormData() {
  document.getElementById('order-form').reset();
}

window.addEventListener('DOMContentLoaded', () => {
  displayProducts(produse);
  updateCart();
});
