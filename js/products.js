// Product data
const products = [
  {
      "id": 1,
      "name": "ASIM METRI",
      "description": "Weedicide for effective weed control",
      "price": 200.00,
      "image": "images/asim-metri.jpeg",
      "category": "fertilizers",
      "packaging": "100g., 500g."
  },
  {
      "id": 2,
      "name": "ASIM GLYFO 41",
      "description": "GLYPHOSATE 41% S.L.",
      "price": 150.00,
      "image": "/images/asim-glyfo-41.jpeg",
      "category": "pesticides",
      "packaging": "250ml, 500ml, 1Liter, 5Liter"
  },
  {
      "id": 3,
      "name": "HALLA 505",
      "description": "CHLORPYRIPHOS 50% ",
      "price": 120.00,
      "image": "images/halla-505.jpeg",
      "category": "pesticides",
      "packaging": "100ml, 250ml, 500ml, 1Liter, 5Liter"
  },
  {
      "id": 4,
      "name": "ASIM GLYFO-71",
      "description": "AMMONIUM SALT OF GLYPHOSATE",
      "price": 400.00,
      "image": "images/asim-glyfo-71.jpeg",
      "category": "fertilizers",
      "packaging": "100g, 500g, 1kg"
  },
  {
      "id": 5,
      "name": "ASIM WEEDKILL FAST",
      "description": "2,4-D DIMETHYL AMINE SALT 58% SL",
      "price": 350.00,
      "image": "images/asim-weedkill-fast.jpeg",
      "category": "pesticides",
      "packaging": "500ml, 1Liter, 5Liter"
  },
  {
      "id": 6,
      "name": "SUPER ZAPATA",
      "description": "CHLORPYRIFOS 50% E.C.",
      "price": 420.00,
      "image": "images/super-zapata.jpeg",
      "category": "pesticides",
      "packaging": "100ml, 250ml, 500ml, 1Liter, 5Liter"
  },
  {
      "id": 7,
      "name": "THIOPHO 70WP",
      "description": "THIOPHANATE METHYL 70%WP",
      "price": 320.00,
      "image": "images/thiopho-70wp.jpeg",
      "category": "fertilizers",
      "packaging": "100g., 250g., 500g."
  },
  {
      "id": 8,
      "name": "REMOTE",
      "description": "FIPRONIL 0.3% GR",
      "price": 185.00,
      "image": "images/remote.jpeg",
      "category": "fertilizers",
      "packaging": "1kg, 5kg"
  },
  {
      "id": 9,
      "name": "ZAPATA",
      "description": "FENVALERATE 0.4% DP (Dust)",
      "price": 190.00,
      "image": "images/zapata.jpeg",
      "category": "fertilizers",
      "packaging": "50g, 100g, 250g, 500g, 1kg, 5kg, 10g, 25kg"
  },
  {
      "id": 10,
      "name": "ATRAZIP",
      "description": "ATRAZINE 50% WP",
      "price": 241.00,
      "image": "images/atrazip.jpeg",
      "category": "fertilizers",
      "packaging": "500g"
  },
  {
      "id": 11,
      "name": "ASIM M-45",
      "description": "CONTACT FUNGICIDE",
      "price": 355.00,
      "image": "images/asim-m-45.jpeg",
      "category": "fertilizers",
      "packaging": "100g., 250g., 500g."
  },
  {
      "id": 12,
      "name": "PROCET",
      "description": "EMAMECTIN BENZOATE 5%",
      "price": 300.00,
      "image": "/images/procet.jpeg",
      "category": "pesticides",
      "packaging": "10gm, 50gm,"
    },
    {
      "id": 13,
      "name": "Tomato Seeds - Heirloom Variety",
      "description": "High-quality heirloom tomato seeds for organic gardening.",
      "price": 125.00,
      "image": "images/tomato-seeds.jpeg",
      "category": "seeds",
      "packaging": "50 seeds per pack"
  },
  {
      "id": 14,
      "name": "Basil Seeds - Sweet Genovese",
      "description": "Sweet Genovese basil seeds for aromatic and flavorful herbs.",
      "price": 150.00,
      "image": "images/basil-seeds.jpeg",
      "category": "seeds",
      "packaging": "100 seeds per pack"
  },
  {
      "id": 15,
      "name": "Carrot Seeds - Nantes Variety",
      "description": "Nantes carrot seeds for sweet and crunchy carrots.",
      "price": 75.00,
      "image": "images/carrot-seeds.jpeg",
      "category": "seeds",
      "packaging": "200 seeds per pack"
  },
  {
      "id": 16,
      "name": "Sunflower Seeds - Giant Variety",
      "description": "Giant sunflower seeds for tall and vibrant sunflowers.",
      "price": 66.00,
      "image": "images/sunflower-seeds.jpeg",
      "category": "seeds",
      "packaging": "30 seeds per pack"
  },
  {
      "id": 17,
      "name": "Bell Pepper Seeds - California Wonder",
      "description": "California Wonder bell pepper seeds for large and sweet peppers.",
      "price": 220.00,
      "image": "images/bell-pepper-seeds.jpeg",
      "category": "seeds",
      "packaging": "50 seeds per pack"
  },
  ];
  
  // Format price to currency
  function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  }
  
  
  // Create product card HTML
  function createProductCard(product) {
    return `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <p class="product-price">${formatPrice(product.price)}</p>
          <div class="product-actions">
            <button class="btn btn-outline add-to-cart-btn" data-id="${product.id}">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  // Filter products by category
  function filterProducts(category) {
    if (category === 'all') {
      return products;
    } else {
      return products.filter(product => product.category === category);
    }
  }
  
  // Initialize featured products
  function initFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featuredProducts');
    if (featuredProductsContainer) {
      const featuredProducts = products.slice(0, 4);
      featuredProductsContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }
  }
  
  // Initialize products grid
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
        
        // Filter products
        const filteredProducts = filterProducts(category);
        
        // Update product grid
        const productsGrid = document.getElementById('productsGrid');
        if (productsGrid) {
          productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        }
        
        // Update featured products if on home page
        const featuredProductsContainer = document.getElementById('featuredProducts');
        if (featuredProductsContainer) {
          const featuredProducts = filteredProducts.slice(0, 4);
          featuredProductsContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
        }
        
        // Add event listeners to new add to cart buttons
        addToCartListeners();
      });
    });
  }
  
  // Assume addToCart function is defined elsewhere (e.g., in cart.js)
  // For demonstration purposes, let's define a placeholder:
  function addToCart(product) {
    console.log('Adding to cart:', product);
    // In a real application, this would update the cart state.
  }
  
  // Add event listeners to add to cart buttons
  function addToCartListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        if (product) {
          addToCart(product);
          showToast(`${product.name} added to cart!`);
        }
      });
    });
  }
  
  // Show toast notification
  function showToast(message) {
    // Check if toast already exists
    let toast = document.querySelector('.toast');
    
    // If not, create one
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    
    // Set message and show
    toast.textContent = message;
    toast.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
  
  // Initialize products when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    initFeaturedProducts();
    initProductsGrid();
    initCategoryFilters();
    addToCartListeners();
  });