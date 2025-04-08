// ---------- CART UTILITIES ----------
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cartCount").textContent = totalCount;
}

function updateOrderDetails(cart) {
  const orderDetails = cart.map(item =>
    `${item.name} (x${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`
  ).join('\n');

  document.getElementById("orderDetails").value = orderDetails;
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
        <h3>${item.name}</h3>
        <p>₹${item.price.toFixed(2)}</p>
        <div class="quantity-control">
          <button class="decrease-btn" data-index="${index}">-</button>
          <input type="number" class="quantity-input" data-index="${index}" value="${item.quantity}" min="1">
          <button class="increase-btn" data-index="${index}">+</button>
        </div>
        <button class="remove-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent = `₹${subtotal.toFixed(2)}`;
  updateCartCount();

  // Quantity input listeners
  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function (e) {
      const index = parseInt(e.target.dataset.index);
      let value = parseInt(e.target.value);
      if (isNaN(value) || value < 1) {
        value = 1;
        e.target.value = 1;
      }
      const cart = getCart();
      cart[index].quantity = value;
      saveCart(cart);
      updateCartDisplay();
    });
  });

  updateOrderDetails(cart);
}

// ---------- CART ACTION HANDLERS ----------
document.addEventListener("DOMContentLoaded", function () {
  updateCartDisplay();

  document.getElementById("cartItems").addEventListener("click", function (e) {
    const cart = getCart();
    const index = parseInt(e.target.dataset.index);

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
  });

  document.getElementById("clearCart").addEventListener("click", function () {
    localStorage.removeItem("cart");
    updateCartDisplay();
  });

  document.getElementById("checkoutFormSubmit").addEventListener("submit", function () {
    localStorage.removeItem("cart");
    setTimeout(() => {
      updateCartDisplay();
      document.getElementById("checkoutFormSubmit").reset();
      document.getElementById("checkoutForm").style.display = "none";
      document.getElementById("overlay").style.display = "none";
    }, 500);
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

// ---------- ADD TO CART ----------
function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  saveCart(cart);
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", updateCartCount);
