// ---------- CART UTILITIES ----------
function getCart() {
  return JSON.parse(localStorage.getItem("asimAgroCart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("asimAgroCart", JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  document.getElementById("cartCount").textContent = cart.length;
}

function updateOrderDetails(cart) {
  const orderDetails = cart.map(item =>
    `${item.name} (${item.selectedSize}) - ${item.quantity} x ${formatPrice(item.price)}`
  ).join('\n');

  document.getElementById("orderDetails").value = orderDetails;
}

function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(price);
}

function updateCartDisplay() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cartItems");
  const emptyCart = document.getElementById("emptyCart");
  const cartContent = document.getElementById("cartContent");

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
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
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

  // Add input listeners for manual quantity entry
  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function(e) {
      const index = parseInt(this.dataset.index);
      const cart = getCart();
      let newQuantity = parseInt(this.value) || 1;
      
      if (newQuantity < 1) {
        newQuantity = 1;
        this.value = 1;
      }
      
      cart[index].quantity = newQuantity;
      saveCart(cart);
      updateCartDisplay();
    });
  });
}

// ---------- CART ACTION HANDLERS ----------
document.addEventListener("DOMContentLoaded", function () {
  updateCartDisplay();

  document.getElementById("cartItems").addEventListener("click", function (e) {
    const cart = getCart();
    const index = parseInt(e.target.dataset.index || 
      e.target.closest('button')?.dataset.index);

    if (!isNaN(index)) {
      if (e.target.classList.contains("increase-btn")) {
        cart[index].quantity++;
      } else if (e.target.classList.contains("decrease-btn")) {
        if (cart[index].quantity > 1) {
          cart[index].quantity--;
        } else {
          cart.splice(index, 1);
        }
      } else if (e.target.closest(".remove-btn")) {
        cart.splice(index, 1);
      }

      saveCart(cart);
      updateCartDisplay();
    }
  });

  document.getElementById("clearCart").addEventListener("click", function () {
    localStorage.removeItem("asimAgroCart");
    updateCartDisplay();
  });

  document.getElementById("proceedToCheckout").addEventListener("click", () => {
    const cart = getCart();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    updateOrderDetails(cart);
    document.getElementById("checkoutForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });

  document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("checkoutForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  document.getElementById("overlay").addEventListener("click", () => {
    document.getElementById("checkoutForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });
});

// ---------- ADD TO CART FUNCTION ----------
function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find(item => 
    item.id === product.id && item.selectedSize === product.selectedSize
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  saveCart(cart);
  updateCartCount();
}