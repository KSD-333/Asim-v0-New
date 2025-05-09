// Product data
const products = [
  {
      "id": 1,
      "name": "ASIM METRI",
      "description": "Weedicide for effective weed control",
      "prices": {
        "100g": 200.00,
        "500g": 850.00
      },
      "image": "images/asim-metri.jpeg",
      "category": "fertilizers",
      "packaging": ["100g", "500g"]
  },
  {
      "id": 2,
      "name": "ASIM GLYFO 41",
      "description": "GLYPHOSATE 41% S.L.",
      "prices": {
        "250ml": 150.00,
        "500ml": 280.00,
        "1Liter": 520.00,
        "5Liter": 2400.00
      },
      "image": "/images/asim-glyfo-41.jpeg",
      "category": "pesticides",
      "packaging": ["250ml", "500ml", "1Liter", "5Liter"]
  },
  {
      "id": 3,
      "name": "HALLA 505",
      "description": "CHLORPYRIPHOS 50%",
      "prices": {
        "100ml": 120.00,
        "250ml": 280.00,
        "500ml": 520.00,
        "1Liter": 980.00,
        "5Liter": 4500.00
      },
      "image": "images/halla-505.jpeg",
      "category": "pesticides",
      "packaging": ["100ml", "250ml", "500ml", "1Liter", "5Liter"]
  },
  {
      "id": 4,
      "name": "ASIM GLYFO-71",
      "description": "AMMONIUM SALT OF GLYPHOSATE",
      "prices": {
        "100g": 400.00,
        "500g": 1800.00,
        "1kg": 3400.00
      },
      "image": "images/asim-glyfo-71.jpeg",
      "category": "fertilizers",
      "packaging": ["100g", "500g", "1kg"]
  },
  {
      "id": 5,
      "name": "ASIM WEEDKILL FAST",
      "description": "2,4-D DIMETHYL AMINE SALT 58% SL",
      "prices": {
        "500ml": 350.00,
        "1Liter": 650.00,
        "5Liter": 3000.00
      },
      "image": "images/asim-weedkill-fast.jpeg",
      "category": "pesticides",
      "packaging": ["500ml", "1Liter", "5Liter"]
  },
  {
      "id": 6,
      "name": "SUPER ZAPATA",
      "description": "CHLORPYRIFOS 50% E.C.",
      "prices": {
        "100ml": 420.00,
        "250ml": 980.00,
        "500ml": 1800.00,
        "1Liter": 3400.00,
        "5Liter": 16000.00
      },
      "image": "images/super-zapata.jpeg",
      "category": "pesticides",
      "packaging": ["100ml", "250ml", "500ml", "1Liter", "5Liter"]
  },
  {
      "id": 7,
      "name": "THIOPHO 70WP",
      "description": "THIOPHANATE METHYL 70%WP",
      "prices": {
        "100g": 320.00,
        "250g": 750.00,
        "500g": 1400.00
      },
      "image": "images/thiopho-70wp.jpeg",
      "category": "fertilizers",
      "packaging": ["100g", "250g", "500g"]
  },
  {
      "id": 8,
      "name": "REMOTE",
      "description": "FIPRONIL 0.3% GR",
      "prices": {
        "1kg": 185.00,
        "5kg": 850.00
      },
      "image": "images/remote.jpeg",
      "category": "fertilizers",
      "packaging": ["1kg", "5kg"]
  },
  {
      "id": 9,
      "name": "ZAPATA",
      "description": "FENVALERATE 0.4% DP (Dust)",
      "prices": {
        "50g": 190.00,
        "100g": 350.00,
        "250g": 800.00,
        "500g": 1500.00,
        "1kg": 2800.00,
        "5kg": 13000.00,
        "10kg": 25000.00,
        "25kg": 60000.00
      },
      "image": "images/zapata.jpeg",
      "category": "fertilizers",
      "packaging": ["50g", "100g", "250g", "500g", "1kg", "5kg", "10kg", "25kg"]
  },
  {
      "id": 10,
      "name": "ATRAZIP",
      "description": "ATRAZINE 50% WP",
      "prices": {
        "500g": 241.00
      },
      "image": "images/atrazip.jpeg",
      "category": "fertilizers",
      "packaging": ["500g"]
  },
  {
      "id": 11,
      "name": "ASIM M-45",
      "description": "CONTACT FUNGICIDE",
      "prices": {
        "100g": 355.00,
        "250g": 800.00,
        "500g": 1500.00
      },
      "image": "images/asim-m-45.jpeg",
      "category": "fertilizers",
      "packaging": ["100g", "250g", "500g"]
  },
  {
      "id": 12,
      "name": "PROCET",
      "description": "EMAMECTIN BENZOATE 5%",
      "prices": {
        "10gm": 300.00,
        "50gm": 1400.00
      },
      "image": "/images/procet.jpeg",
      "category": "pesticides",
      "packaging": ["10gm", "50gm"]
  },
//   {
//       "id": 13,
//       "name": "Tomato Seeds - Heirloom Variety",
//       "description": "High-quality heirloom tomato seeds for organic gardening.",
//       "prices": {
//         "50 seeds": 125.00
//       },
//       "image": "images/tomato-seeds.jpeg",
//       "category": "seeds",
//       "packaging": ["50 seeds"]
//   },
//   {
//       "id": 14,
//       "name": "Basil Seeds - Sweet Genovese",
//       "description": "Sweet Genovese basil seeds for aromatic and flavorful herbs.",
//       "prices": {
//         "100 seeds": 150.00
//       },
//       "image": "images/basil-seeds.jpeg",
//       "category": "seeds",
//       "packaging": ["100 seeds"]
//   },
//   {
//       "id": 15,
//       "name": "Carrot Seeds - Nantes Variety",
//       "description": "Nantes carrot seeds for sweet and crunchy carrots.",
//       "prices": {
//         "200 seeds": 75.00
//       },
//       "image": "images/carrot-seeds.jpeg",
//       "category": "seeds",
//       "packaging": ["200 seeds"]
//   },
//   {
//       "id": 16,
//       "name": "Sunflower Seeds - Giant Variety",
//       "description": "Giant sunflower seeds for tall and vibrant sunflowers.",
//       "prices": {
//         "30 seeds": 66.00
//       },
//       "image": "images/sunflower-seeds.jpeg",
//       "category": "seeds",
//       "packaging": ["30 seeds"]
//   },
//   {
//       "id": 17,
//       "name": "Bell Pepper Seeds - California Wonder",
//       "description": "California Wonder bell pepper seeds for large and sweet peppers.",
//       "prices": {
//         "50 seeds": 220.00
//       },
//       "image": "images/bell-pepper-seeds.jpeg",
//       "category": "seeds",
//       "packaging": ["50 seeds"]
//   },
//     {
//     "id": 18,
//     "name": "Gardening Tool Set",
//     "description": "Premium stainless steel gardening tools set",
//     "prices": {
//       "Basic Set": 1200.00,
//       "Professional Set": 2500.00
//     },
//     "image": "images/gardening-tools.jpg",
//     "category": "tools-equipment",
//     "packaging": ["Basic Set", "Professional Set"]
// },
// {
//     "id": 19,
//     "name": "Spray Pump",
//     "description": "16-liter manual spray pump",
//     "prices": {
//       "16L": 850.00,
//       "20L": 1100.00
//     },
//     "image": "images/spray-pump.jpg",
//     "category": "tools-equipment",
//     "packaging": ["16L", "20L"]
// },
// {
//     "id": 20,
//     "name": "Pruning Shears",
//     "description": "Professional grade pruning shears",
//     "prices": {
//       "Standard": 450.00,
//       "Premium": 800.00
//     },
//     "image": "images/pruning-shears.jpg",
//     "category": "tools-equipment",
//     "packaging": ["Standard", "Premium"]
// }
];
  // Format price to currency (unchanged)
function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(price);
}

// Create product card HTML (unchanged)
function createProductCard(product) {
  let priceOptions = '';
  for (const [size, price] of Object.entries(product.prices)) {
    priceOptions += `<option value="${size}">${size} - ${formatPrice(price)}</option>`;
  }

  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='images/default-product.jpg'">
      </div>
      <div class="product-details">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price-options">
          <select class="price-select" data-id="${product.id}">
            ${priceOptions}
          </select>
        </div>
        <div class="product-actions">
          <button class="btn btn-outline add-to-cart-btn" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// Helper function to get random items from array
function getRandomItems(array, count) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Update featured products based on category
function updateFeaturedProducts(category) {
  const featuredProductsContainer = document.getElementById('featuredProducts');
  if (!featuredProductsContainer) return;

  let featuredProducts;
  
  if (category === 'all') {
    // Get 2 pesticides and 2 fertilizers
    const pesticides = getRandomItems(
      products.filter(p => p.category === 'pesticides'),
      2
    );
    const fertilizers = getRandomItems(
      products.filter(p => p.category === 'fertilizers'),
      2
    );
    featuredProducts = [...pesticides, ...fertilizers];
    // Shuffle the combined array
    featuredProducts.sort(() => Math.random() - 0.5);
  } else {
    // Get 4 random products from selected category
    const categoryProducts = products.filter(p => p.category === category);
    featuredProducts = getRandomItems(categoryProducts, 4);
  }

  featuredProductsContainer.innerHTML = featuredProducts
    .map(product => createProductCard(product))
    .join('');

  addToCartListeners();
}

// Initialize products grid (for products page)
function initProductsGrid() {
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
  }
}

// Handle category filter buttons
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Check if we're on home page
      const featuredProductsContainer = document.getElementById('featuredProducts');
      if (featuredProductsContainer) {
        // Home page - update featured products
        updateFeaturedProducts(category);
      } else {
        // Products page - filter full grid
        const filteredProducts = filterProducts(category);
        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
          productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
          addToCartListeners();
          
        }
      }
    });
  });
}

// Cart functionality (unchanged)
let cart = [];

function addToCart(product) {
  const existingItem = cart.find(item => 
    item.id === product.id && item.selectedSize === product.selectedSize
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCartCount();
  saveCartToLocalStorage();
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('asimAgroCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('asimAgroCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// Add event listeners to add to cart buttons (unchanged)
function addToCartListeners() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      const sizeSelect = document.querySelector(`.price-select[data-id="${productId}"]`);
      const selectedSize = sizeSelect.value;
      const selectedPrice = product.prices[selectedSize];
      
      if (product) {
        addToCart({
          ...product,
          selectedSize,
          price: selectedPrice
        });
        showToast(`${product.name} (${selectedSize}) added to cart!`);
      }
    });
  });
}

// Show toast notification (unchanged)
function showToast(message) {
  let toast = document.querySelector('.toast');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}


// Add back the filterProducts function
function filterProducts(category) {
  if (category === 'all') {
    return products;
  } else {
    return products.filter(product => product.category === category);
  }
}

// Update the products page initialization
function initProductsPage() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  // Initial load with all products
  productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
  
  // Add category filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      const filtered = filterProducts(category);
      productsGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
      addToCartListeners();
    });
  });
}

// Modified DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromLocalStorage();
  
  // Home page initialization
  if (document.getElementById('featuredProducts')) {
    updateFeaturedProducts('all');
    initCategoryFilters();
  }
  
  // Products page initialization
  if (document.getElementById('productsGrid')) {
    initProductsPage();
  }

  addToCartListeners();
});