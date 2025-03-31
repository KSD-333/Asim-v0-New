// Cart functionality
let cart = [];

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (error) {
      console.error('Failed to parse cart from localStorage:', error);
      cart = [];
    }
  }
  updateCartCount();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Add product to cart
function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  saveCart();
}

// Remove product from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

// Update product quantity in cart
function updateQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      renderCart();
    }
  }
}

// Clear cart
function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

// Update cart count in navbar
function updateCartCount() {
  const cartCountElements = document.querySelectorAll('#cartCount');
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  cartCountElements.forEach(element => {
    element.textContent = totalItems;
    
    if (totalItems > 0) {
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  });
}

// Format price to currency
function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}

// Calculate cart subtotal
function calculateSubtotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Render cart items
function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const emptyCartElement = document.getElementById('emptyCart');
  const cartContentElement = document.getElementById('cartContent');
  const subtotalElement = document.getElementById('subtotal');
  const totalElement = document.getElementById('total');
  
  if (!cartItemsContainer) return;
  
  if (cart.length === 0) {
    if (emptyCartElement) emptyCartElement.style.display = 'block';
    if (cartContentElement) cartContentElement.style.display = 'none';
    return;
  }
  
  if (emptyCartElement) emptyCartElement.style.display = 'none';
  if (cartContentElement) cartContentElement.style.display = 'grid';
  
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-name">${item.name}</h3>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <div class="cart-item-actions">
        <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
        <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
        <button class="remove-btn" data-id="${item.id}">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
  
  const subtotal = calculateSubtotal();
  if (subtotalElement) subtotalElement.textContent = formatPrice(subtotal);
  if (totalElement) totalElement.textContent = formatPrice(subtotal);
  
  // Add event listeners to cart item buttons
  addCartItemListeners();
}

// Add event listeners to cart item buttons
function addCartItemListeners() {
  // Decrease quantity buttons
  const decreaseButtons = document.querySelectorAll('.decrease-btn');
  decreaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      const item = cart.find(item => item.id === productId);
      if (item) {
        updateQuantity(productId, item.quantity - 1);
      }
    });
  });
  
  // Increase quantity buttons
  const increaseButtons = document.querySelectorAll('.increase-btn');
  increaseButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      const item = cart.find(item => item.id === productId);
      if (item) {
        updateQuantity(productId, item.quantity + 1);
      }
    });
  });
  
  // Quantity input fields
  const quantityInputs = document.querySelectorAll('.quantity-input');
  quantityInputs.forEach(input => {
    input.addEventListener('change', () => {
      const productId = parseInt(input.getAttribute('data-id'));
      const quantity = parseInt(input.value);
      if (!isNaN(quantity) && quantity > 0) {
        updateQuantity(productId, quantity);
      } else {
        renderCart(); // Reset invalid input
      }
    });
  });
  
  // Remove buttons
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      removeFromCart(productId);
    });
  });
  
  // Clear cart button
  const clearCartButton = document.getElementById('clearCart');
  if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
  }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderCart();
});