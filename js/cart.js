// ---------- CART UTILITIES ----------
function getCart() {
  return JSON.parse(localStorage.getItem("asimAgroCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("asimAgroCart", JSON.stringify(cart));
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cartCount");
  if (cartCountElement) {
    const cart = getCart();
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
}

function updateOrderDetails(cart) {
  const orderDetailsElement = document.getElementById("orderDetails");
  if (orderDetailsElement) {
    orderDetailsElement.value = cart.map(item => 
      `${item.name} (${item.selectedSize}) - ${item.quantity} x ${formatPrice(item.price)}`
    ).join('\n');
  }
}

function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(price);
}

// ---------- CART DISPLAY ----------
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cartItems");
  const emptyCart = document.getElementById("emptyCart");
  const cartContent = document.getElementById("cartContent");
  
  if (!cartItemsContainer || !emptyCart || !cartContent) return;

  const cart = getCart();
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    emptyCart.style.display = "block";
    cartContent.style.display = "none";
    updateCartCount();
    return;
  }

  emptyCart.style.display = "none";
  cartContent.style.display = "flex";

  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-details">
        <h3>${item.name} (${item.selectedSize})</h3>
        <p>${formatPrice(item.price)}</p>
        <div class="quantity-control">
          <button class="quantity-btn decrease-btn" data-index="${index}">-</button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1">
          <button class="quantity-btn increase-btn" data-index="${index}">+</button>
        </div>
        <button class="remove-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  document.getElementById("subtotal").textContent = formatPrice(subtotal);
  document.getElementById("total").textContent = formatPrice(subtotal);
  updateCartCount();
  updateOrderDetails(cart);
}

// ---------- EVENT HANDLERS ----------
function handleCartActions(e) {
  const cart = getCart();
  const button = e.target.closest("button");
  
  if (!button) return;
  
  const index = parseInt(button.dataset.index);
  if (isNaN(index)) return;

  if (button.classList.contains("increase-btn")) {
    cart[index].quantity++;
  } else if (button.classList.contains("decrease-btn")) {
    cart[index].quantity > 1 ? cart[index].quantity-- : cart.splice(index, 1);
  } else if (button.classList.contains("remove-btn")) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  updateCartDisplay();
}

function initializeCart() {
  // Update cart count on all pages
  updateCartCount();

  // Only initialize cart page features if on cart page
  const cartItemsContainer = document.getElementById("cartItems");
  if (cartItemsContainer) {
    updateCartDisplay();
    
    // Cart items container events
    document.getElementById("cartItems").addEventListener("click", handleCartActions);
    
    // Clear cart button
    document.getElementById("clearCart")?.addEventListener("click", () => {
      localStorage.removeItem("asimAgroCart");
      updateCartDisplay();
    });

    // Checkout button
    document.getElementById("proceedToCheckout")?.addEventListener("click", () => {
      if (getCart().length === 0) {
        alert("Your cart is empty!");
        return;
      }
      document.getElementById("checkoutForm").style.display = "block";
      document.getElementById("overlay").style.display = "block";
    });

    // Close popup
    document.getElementById("closePopup")?.addEventListener("click", () => {
      document.getElementById("checkoutForm").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    });

    // Overlay click
    document.getElementById("overlay")?.addEventListener("click", () => {
      document.getElementById("checkoutForm").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    });
  }
}

// ---------- INITIALIZATION ----------
document.addEventListener("DOMContentLoaded", initializeCart);

// ---------- ADD TO CART FUNCTION ----------
window.addToCart = function(product) {
  const cart = getCart();
  const existingItem = cart.find(item => 
    item.id === product.id && item.selectedSize === product.selectedSize
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }

  saveCart(cart);
  updateCartCount();
  
  // Show notification
  const notification = document.createElement("div");
  notification.className = "cart-notification";
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    Added to cart!
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.remove(), 2000);
};