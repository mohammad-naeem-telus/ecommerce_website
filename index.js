const productsEl = document.getElementById('products');
const cartEl = document.getElementById('cart');
const cartItemsEl = document.getElementById('cart-items');
const checkoutEl = document.getElementById('checkout-success');
const cartIcon = document.getElementById('cart-icon');

let cart = [];

// Fetch and display products
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';

      const img = document.createElement('img');
      img.src = product.image;

      const info = document.createElement('div');
      info.innerHTML = `<h3>${product.title}</h3><p>$${product.price}</p>`;

      const btn = document.createElement('button');
      btn.textContent = 'Add to Cart';
      btn.addEventListener('click', () => addToCart(product));

      div.appendChild(img);
      div.appendChild(info);
      div.appendChild(btn);

      productsEl.appendChild(div);
    });
  });

// Add to cart
function addToCart(product) {
  cart.push(product);
  alert('Added to cart!');
}

// Show cart
cartIcon.addEventListener('click', () => {
  productsEl.classList.add('hidden');
  checkoutEl.classList.add('hidden');
  cartEl.classList.remove('hidden');
  renderCart();
});

// Render cart items
function renderCart() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div>
        <h4>${item.title}</h4>
        <p>$${item.price}</p>
      </div>
    `;
    cartItemsEl.appendChild(div);
  });
}

// Checkout
function checkout() {
  cart = [];
  cartEl.classList.add('hidden');
  checkoutEl.classList.remove('hidden');
}

// Show home
function showHome() {
  productsEl.classList.remove('hidden');
  cartEl.classList.add('hidden');
  checkoutEl.classList.add('hidden');
}
