// Enhanced KK Butchery Website JavaScript
// Author: SM Solutions
// Date: August 2025

// Global Variables
let cart = [];
let products = [];
let currentCategory = 'all';
let isCartOpen = false;

// Enhanced Product Data with better aligned images
const productData = [
    // Premium Beef Products
    {
        id: 1,
        name: "Premium Ribeye Steak",
        category: "beef",
        price: 89.99,
        unit: "kg",
        description: "Prime cut ribeye steak, aged to perfection with excellent marbling for exceptional taste and tenderness.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Grass-Fed Beef Mince",
        category: "beef",
        price: 45.99,
        unit: "kg",
        description: "Premium lean beef mince from grass-fed cattle, perfect for burgers, bolognese, and traditional dishes.",
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 3,
        name: "T-Bone Steak",
        category: "beef",
        price: 75.99,
        unit: "kg",
        description: "Classic T-bone steak with both strip and tenderloin, perfect for the braai or grill.",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 4,
        name: "Beef Brisket",
        category: "beef",
        price: 52.99,
        unit: "kg",
        description: "Perfect slow-cooking cut for smoking, braising, and traditional potjiekos recipes.",
        image: "https://images.unsplash.com/photo-1588347395425-2e56db050356?w=400&h=300&fit=crop&q=80",
        inStock: false,
        featured: false
    },
    {
        id: 5,
        name: "Aged Sirloin Steak",
        category: "beef",
        price: 67.99,
        unit: "kg",
        description: "Tender sirloin steak, dry-aged for 21 days to enhance flavor and texture.",
        image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: true
    },

    // Farm Fresh Chicken Products
    {
        id: 6,
        name: "Free-Range Whole Chicken",
        category: "chicken",
        price: 35.99,
        unit: "kg",
        description: "Farm-fresh free-range chicken, hormone-free and naturally raised for superior flavor.",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: true
    },
    {
        id: 7,
        name: "Chicken Breast Fillets",
        category: "chicken",
        price: 42.99,
        unit: "kg",
        description: "Tender, skinless, boneless chicken breast fillets, perfect for grilling and healthy meals.",
        image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 8,
        name: "Chicken Thighs (Bone-in)",
        category: "chicken",
        price: 28.99,
        unit: "kg",
        description: "Juicy chicken thighs with bone and skin for maximum flavor, perfect for roasting and braising.",
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 9,
        name: "Chicken Wings",
        category: "chicken",
        price: 32.99,
        unit: "kg",
        description: "Fresh chicken wings, perfect for braai, buffalo wings, or traditional potjiekos.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },

    // Premium Lamb Products
    {
        id: 10,
        name: "Leg of Lamb (Bone-in)",
        category: "lamb",
        price: 68.99,
        unit: "kg",
        description: "Traditional lamb leg roast, perfect for special occasions and family gatherings.",
        image: "https://images.unsplash.com/photo-1602536942166-eb0e5905a769?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: true
    },
    {
        id: 11,
        name: "Lamb Chops",
        category: "lamb",
        price: 89.99,
        unit: "kg",
        description: "Premium lamb chops cut to perfection, tender and full of flavor for grilling.",
        image: "https://images.unsplash.com/photo-1611599537845-eb5269935c70?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 12,
        name: "Lamb Shoulder",
        category: "lamb",
        price: 55.99,
        unit: "kg",
        description: "Slow-cooking lamb shoulder, perfect for stews, roasts, and traditional curry dishes.",
        image: "https://images.unsplash.com/photo-1574781330155-ced8cc3a3e99?w=400&h=300&fit=crop&q=80",
        inStock: false,
        featured: false
    },

    // Quality Pork Products
    {
        id: 13,
        name: "Pork Belly",
        category: "pork",
        price: 48.99,
        unit: "kg",
        description: "Fresh pork belly with skin, perfect for crackling, bacon, or slow-roasted dishes.",
        image: "https://images.unsplash.com/photo-1588347818111-4c8190711a39?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 14,
        name: "Pork Chops",
        category: "pork",
        price: 52.99,
        unit: "kg",
        description: "Thick-cut pork chops with bone for extra flavor, perfect for grilling and pan-frying.",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 15,
        name: "Pork Tenderloin",
        category: "pork",
        price: 62.99,
        unit: "kg",
        description: "Lean and tender pork tenderloin, a premium quick-cooking cut for elegant meals.",
        image: "https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },

    // Artisan Processed Meats
    {
        id: 16,
        name: "Traditional Beef Boerewors",
        category: "processed",
        price: 38.99,
        unit: "kg",
        description: "Authentic South African boerewors made with our secret spice blend and traditional methods.",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: true
    },
    {
        id: 17,
        name: "Smoked Bacon Rashers",
        category: "processed",
        price: 58.99,
        unit: "kg",
        description: "Premium smoked bacon rashers, cured and sliced to perfection in our traditional smokehouse.",
        image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },
    {
        id: 18,
        name: "Artisan Biltong",
        category: "processed",
        price: 145.99,
        unit: "kg",
        description: "Traditional South African biltong, air-dried to perfection with authentic spices and methods.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be2494bac?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: true
    },
    {
        id: 19,
        name: "Homemade Droëwors",
        category: "processed",
        price: 89.99,
        unit: "kg",
        description: "Traditional dried sausage made with premium beef and our family spice recipe.",
        image: "https://images.unsplash.com/photo-1619559504175-4c4d99c54b1e?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false
    },

    // Value Combo Deals
    {
        id: 20,
        name: "Family Braai Pack",
        category: "combo",
        price: 289.99,
        unit: "pack",
        description: "Perfect braai pack: 2kg mixed selection of premium meats for family gatherings and celebrations.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: true,
        originalPrice: 349.99
    },
    {
        id: 21,
        name: "Weekly Meal Pack",
        category: "combo",
        price: 199.99,
        unit: "pack",
        description: "Weekly variety pack: fresh chicken, premium beef mince, and traditional sausages for the family.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false,
        originalPrice: 239.99
    },
    {
        id: 22,
        name: "Steak Lover's Pack",
        category: "combo",
        price: 159.99,
        unit: "pack",
        description: "Premium steak selection: ribeye, T-bone, and sirloin cuts for the ultimate steak experience.",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&q=80",
        inStock: true,
        featured: false,
        originalPrice: 189.99
    }
];

// Enhanced Weekly Specials Data
const weeklySpecials = [
    {
        id: 1,
        name: "Heritage Braai Special",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&q=80",
        originalPrice: 179.99,
        salePrice: 149.99,
        discount: "17% OFF",
        description: "Complete heritage braai pack with assorted premium meats, boerewors, and traditional marinades"
    },
    {
        id: 2,
        name: "Premium Beef Collection",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&q=80",
        originalPrice: 129.99,
        salePrice: 99.99,
        discount: "23% OFF",
        description: "Curated selection of our finest aged beef cuts perfect for any special occasion"
    },
    {
        id: 3,
        name: "Farm Fresh Chicken Bundle",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop&q=80",
        originalPrice: 89.99,
        salePrice: 69.99,
        discount: "22% OFF",
        description: "Complete chicken package: whole free-range chicken, breast fillets, and wings"
    }
];

// DOM Element Cache for Performance
const elementsCache = new Map();

function getElement(selector) {
    if (!elementsCache.has(selector)) {
        const element = document.querySelector(selector);
        if (element) {
            elementsCache.set(selector, element);
        }
    }
    return elementsCache.get(selector);
}

// Enhanced Utility Functions
function formatPrice(price) {
    return `R${price.toFixed(2)}`;
}

function showLoading(message = 'Processing your request...') {
    const spinner = getElement('#loadingSpinner');
    const text = spinner?.querySelector('p');
    if (text) text.textContent = message;
    spinner?.classList.add('active');
}

function hideLoading() {
    getElement('#loadingSpinner')?.classList.remove('active');
}

function showToast(message, type = 'success', duration = 3000) {
    const toast = getElement('#toast');
    const messageElement = toast?.querySelector('.toast-message');
    const iconElement = toast?.querySelector('.toast-icon');
    
    if (!toast || !messageElement || !iconElement) return;
    
    // Set icon based on type
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    iconElement.className = `toast-icon ${icons[type] || icons.success}`;
    messageElement.textContent = message;
    toast.className = `toast ${type} show`;
    
    // Auto-hide toast
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Enhanced Animation Utilities
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(el => observer.observe(el));
}

// Enhanced Product Functions
function initializeProducts() {
    products = [...productData];
    renderProducts();
    renderSpecials();
    setupProductSearch();
    animateOnScroll();
}

function renderProducts(productsToRender = products) {
    const productsGrid = getElement('#productsGrid');
    
    if (!productsGrid) return;
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>No products found matching your criteria.</p>
                <button class="btn-secondary" onclick="filterProducts('all')">
                    <i class="fas fa-refresh"></i> Show All Products
                </button>
            </div>`;
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map((product, index) => `
        <div class="product-card fade-in" data-category="${product.category}" style="animation-delay: ${index * 0.1}s">
            ${!product.inStock ? '<div class="product-badge out-of-stock">Out of Stock</div>' : ''}
            ${product.featured ? '<div class="product-badge">Featured</div>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1588347818111-4c8190711a39?w=400&h=300&fit=crop&q=80'">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)} per ${product.unit}</div>
                <div class="product-controls">
                    <div class="quantity-selector">
                        <button type="button" onclick="decreaseQuantity(${product.id})" aria-label="Decrease quantity">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" id="qty-${product.id}" value="1" min="1" max="10" readonly aria-label="Quantity">
                        <button type="button" onclick="increaseQuantity(${product.id})" aria-label="Increase quantity">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i> ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-observe new elements for animations
    animateOnScroll();
}

function renderSpecials() {
    const specialsGrid = getElement('#specialsGrid');
    
    if (!specialsGrid) return;
    
    specialsGrid.innerHTML = weeklySpecials.map((special, index) => `
        <div class="special-item fade-in" style="animation-delay: ${index * 0.2}s">
            <div class="special-badge">${special.discount}</div>
            <img src="${special.image}" alt="${special.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&q=80'">
            <div class="special-content">
                <h3>${special.name}</h3>
                <p>${special.description}</p>
                <div class="special-price">
                    <span class="original-price">${formatPrice(special.originalPrice)}</span>
                    <span class="sale-price">${formatPrice(special.salePrice)}</span>
                </div>
                <button class="btn-primary" onclick="addSpecialToCart(${special.id})">
                    <i class="fas fa-cart-plus"></i> Add Special to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    currentCategory = category;
    
    // Update active filter button with smooth transition
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter and render products with loading effect
    showLoading('Filtering products...');
    
    setTimeout(() => {
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        
        renderProducts(filteredProducts);
        hideLoading();
        
        // Smooth scroll to products if not visible
        const productsSection = getElement('#products');
        if (productsSection && !isElementInViewport(productsSection)) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
    
    // Analytics tracking
    trackEvent('filter_products', { category, product_count: products.filter(p => category === 'all' || p.category === category).length });
}

function setupProductSearch() {
    const searchInput = getElement('#searchInput');
    if (!searchInput) return;
    
    const debouncedSearch = debounce((searchTerm) => {
        if (searchTerm.trim() === '') {
            filterProducts(currentCategory);
        } else {
            searchProducts(searchTerm);
        }
    }, 300);
    
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchTerm = e.target.value.trim();
            if (searchTerm) {
                searchProducts(searchTerm);
            }
        }
    });
}

function searchProducts(searchTerm) {
    showLoading('Searching products...');
    
    setTimeout(() => {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        renderProducts(filteredProducts);
        hideLoading();
        
        // Show search results message
        if (filteredProducts.length > 0) {
            showToast(`Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} for "${searchTerm}"`, 'info');
        } else {
            showToast(`No products found for "${searchTerm}"`, 'warning');
        }
    }, 300);
    
    trackEvent('search_products', { search_term: searchTerm });
}

// Enhanced Quantity Functions
function increaseQuantity(productId) {
    const qtyInput = getElement(`#qty-${productId}`);
    if (!qtyInput) return;
    
    const currentQty = parseInt(qtyInput.value);
    if (currentQty < 10) {
        qtyInput.value = currentQty + 1;
        // Add visual feedback
        qtyInput.style.transform = 'scale(1.1)';
        setTimeout(() => qtyInput.style.transform = 'scale(1)', 150);
    }
}

function decreaseQuantity(productId) {
    const qtyInput = getElement(`#qty-${productId}`);
    if (!qtyInput) return;
    
    const currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
        // Add visual feedback
        qtyInput.style.transform = 'scale(0.9)';
        setTimeout(() => qtyInput.style.transform = 'scale(1)', 150);
    }
}

// Enhanced Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = getElement(`#qty-${productId}`);
    
    if (!product || !qtyInput || !product.inStock) {
        showToast('Product is out of stock', 'error');
        return;
    }
    
    const quantity = parseInt(qtyInput.value);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity,
            image: product.image,
            unit: product.unit
        });
    }
    
    updateCartUI();
    showToast(`${product.name} added to cart (${quantity} ${product.unit})`, 'success');
    
    // Reset quantity selector with animation
    qtyInput.value = 1;
    
    // Add to cart button animation
    const addBtn = qtyInput.closest('.product-controls').querySelector('.add-to-cart');
    if (addBtn) {
        addBtn.style.transform = 'scale(0.95)';
        addBtn.style.background = 'var(--success)';
        setTimeout(() => {
            addBtn.style.transform = 'scale(1)';
            addBtn.style.background = '';
        }, 200);
    }
    
    // Analytics tracking
    trackEvent('add_to_cart', {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        quantity: quantity,
        value: product.price * quantity
    });
    
    // Accessibility announcement
    announceToScreenReader(`${product.name} added to cart`, true);
}

function addSpecialToCart(specialId) {
    const special = weeklySpecials.find(s => s.id === specialId);
    
    if (!special) return;
    
    const cartItemId = `special-${specialId}`;
    const existingItem = cart.find(item => item.id === cartItemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        cart.push({
            id: cartItemId,
            name: special.name,
            price: special.salePrice,
            quantity: 1,
            total: special.salePrice,
            image: special.image,
            unit: 'pack',
            isSpecial: true,
            discount: special.discount
        });
    }
    
    updateCartUI();
    showToast(`${special.name} added to cart (${special.discount} savings!)`, 'success');
    
    trackEvent('add_special_to_cart', {
        special_id: specialId,
        special_name: special.name,
        discount: special.discount,
        value: special.salePrice
    });
}

function removeFromCart(itemId) {
    const item = cart.find(item => item.id === itemId);
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    
    if (item) {
        showToast(`${item.name} removed from cart`, 'warning');
        trackEvent('remove_from_cart', {
            item_id: itemId,
            item_name: item.name
        });
    }
}

function updateItemQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(item => item.id === itemId);
    if (item) {
        const oldQuantity = item.quantity;
        item.quantity = newQuantity;
        item.total = item.price * newQuantity;
        updateCartUI();
        
        if (newQuantity > oldQuantity) {
            showToast(`${item.name} quantity increased`, 'info', 2000);
        } else {
            showToast(`${item.name} quantity decreased`, 'info', 2000);
        }
        
        trackEvent('update_cart_quantity', {
            item_id: itemId,
            old_quantity: oldQuantity,
            new_quantity: newQuantity
        });
    }
}

function updateCartUI() {
    const cartItems = getElement('#cartItems');
    const cartCount = getElement('.cart-count');
    const cartTotal = getElement('#cartTotal');
    
    if (!cartItems || !cartCount || !cartTotal) return;
    
    // Update cart count with animation
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (parseInt(cartCount.textContent) !== totalItems) {
        cartCount.style.transform = 'scale(1.3)';
        cartCount.textContent = totalItems;
        setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i><br>
                Your cart is empty
                <p style="margin-top: 1rem; font-size: 0.9rem;">Start shopping to add items to your cart</p>
            </div>`;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item fade-in">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1588347818111-4c8190711a39?w=80&h=80&fit=crop&q=80'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    ${item.isSpecial ? `<div style="color: var(--danger); font-size: 0.8rem; font-weight: 600;">${item.discount}</div>` : ''}
                    <div class="cart-item-price">${formatPrice(item.price)} per ${item.unit}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateItemQuantity('${item.id}', ${item.quantity - 1})" aria-label="Decrease quantity">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateItemQuantity('${item.id}', ${item.quantity + 1})" aria-label="Increase quantity">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="remove-item" onclick="removeFromCart('${item.id}')" aria-label="Remove item">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update checkout button state
    const checkoutBtn = getElement('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
        if (cart.length === 0) {
            checkoutBtn.style.opacity = '0.5';
        } else {
            checkoutBtn.style.opacity = '1';
        }
    }
}

function toggleCart() {
    const cartSidebar = getElement('#cartSidebar');
    const cartOverlay = getElement('#cartOverlay');
    
    if (!cartSidebar || !cartOverlay) return;
    
    isCartOpen = !isCartOpen;
    
    if (isCartOpen) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        const firstFocusable = cartSidebar.querySelector('button, input, select, textarea, a');
        if (firstFocusable) {
            setTimeout(() => firstFocusable.focus(), 100);
        }
        
        trackEvent('view_cart', { cart_items: cart.length, cart_value: cart.reduce((sum, item) => sum + item.total, 0) });
    } else {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    const itemCount = cart.length;
    cart = [];
    updateCartUI();
    showToast(`Cart cleared (${itemCount} items removed)`, 'warning');
    
    trackEvent('clear_cart', { items_removed: itemCount });
}

// Enhanced Checkout Functions
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    toggleCart();
    setTimeout(() => showCheckoutModal(), 300);
    
    trackEvent('begin_checkout', {
        cart_items: cart.length,
        cart_value: cart.reduce((sum, item) => sum + item.total, 0)
    });
}

function showCheckoutModal() {
    const modal = getElement('#checkoutModal');
    const content = getElement('#checkoutContent');
    
    if (!modal || !content) return;
    
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const deliveryFee = subtotal > 200 ? 0 : 25;
    const grandTotal = subtotal + deliveryFee;
    
    content.innerHTML = `
        <form id="checkoutForm">
            <div class="checkout-section">
                <h3><i class="fas fa-receipt"></i> Order Summary</h3>
                <div class="order-summary">
                    ${cart.map(item => `
                        <div class="summary-item">
                            <span>${item.name} ${item.isSpecial ? `<small style="color: var(--danger);">(${item.discount})</small>` : ''} (x${item.quantity})</span>
                            <span>${formatPrice(item.total)}</span>
                        </div>
                    `).join('')}
                    <div class="summary-item">
                        <span>Subtotal</span>
                        <span>${formatPrice(subtotal)}</span>
                    </div>
                    <div class="summary-item">
                        <span>Delivery Fee ${subtotal > 200 ? '<small>(Free over R200)</small>' : ''}</span>
                        <span>${deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
                    </div>
                    <div class="summary-item summary-total">
                        <span>Total</span>
                        <span>${formatPrice(grandTotal)}</span>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3><i class="fas fa-truck"></i> Delivery Options</h3>
                <div class="delivery-options">
                    <div class="delivery-option selected" data-type="delivery">
                        <i class="fas fa-truck"></i>
                        <h4>Home Delivery</h4>
                        <p>${deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</p>
                        <small>Delivered to your door</small>
                    </div>
                    <div class="delivery-option" data-type="collection">
                        <i class="fas fa-store"></i>
                        <h4>Store Collection</h4>
                        <p>FREE</p>
                        <small>Collect from Mbizweni Square</small>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3><i class="fas fa-user"></i> Personal Information</h3>
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" id="firstName" required>
                        <label for="firstName">First Name *</label>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastName" required>
                        <label for="lastName">Last Name *</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="email" id="checkoutEmail" required>
                        <label for="checkoutEmail">Email Address *</label>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="checkoutPhone" required pattern="[0-9+\\-\\s()]+">
                        <label for="checkoutPhone">Phone Number *</label>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section" id="deliveryAddress">
                <h3><i class="fas fa-map-marker-alt"></i> Delivery Address</h3>
                <div class="form-group">
                    <input type="text" id="streetAddress" required>
                    <label for="streetAddress">Street Address *</label>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" id="suburb" required>
                        <label for="suburb">Suburb *</label>
                    </div>
                    <div class="form-group">
                        <input type="text" id="city" value="Port Elizabeth" required>
                        <label for="city">City *</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" id="province" value="Eastern Cape" required>
                        <label for="province">Province *</label>
                    </div>
                    <div class="form-group">
                        <input type="text" id="postalCode" required pattern="[0-9]{4}">
                        <label for="postalCode">Postal Code *</label>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3><i class="fas fa-calendar"></i> Delivery Schedule</h3>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" id="deliveryDate" required>
                        <label for="deliveryDate">Preferred Date *</label>
                    </div>
                    <div class="form-group">
                        <select id="deliveryTime" required>
                            <option value="">Select Time Slot</option>
                            <option value="morning">Morning (8:00 - 12:00)</option>
                            <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                            <option value="evening">Evening (17:00 - 20:00)</option>
                        </select>
                        <label for="deliveryTime">Time Slot *</label>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3><i class="fas fa-credit-card"></i> Payment Method</h3>
                <div class="form-group">
                    <select id="paymentMethod" required>
                        <option value="">Select Payment Method</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="eft">EFT/Bank Transfer</option>
                        <option value="cash">Cash on Delivery</option>
                    </select>
                    <label for="paymentMethod">Payment Method *</label>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3><i class="fas fa-comment"></i> Special Instructions</h3>
                <div class="form-group">
                    <textarea id="specialInstructions" rows="3" placeholder="Any special instructions for preparation or delivery..."></textarea>
                    <label for="specialInstructions">Special Instructions (Optional)</label>
                </div>
            </div>
            
            <button type="submit" class="btn-primary" style="width: 100%; margin-top: 2rem; padding: 1rem;">
                <i class="fas fa-lock"></i> Secure Checkout - ${formatPrice(grandTotal)}
            </button>
            
            <div style="text-align: center; margin-top: 1rem; font-size: 0.9rem; color: var(--gray);">
                <i class="fas fa-shield-alt"></i> Your information is secure and encrypted
            </div>
        </form>
    `;
    
    modal.classList.add('active');
    
    // Setup delivery option handlers
    setupDeliveryOptions();
    
    // Set minimum date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    const dateInput = getElement('#deliveryDate');
    if (dateInput) {
        dateInput.min = minDate;
        dateInput.value = minDate;
    }
    
    // Handle form submission
    const form = getElement('#checkoutForm');
    if (form) {
        form.addEventListener('submit', handleCheckoutSubmission);
    }
    
    // Focus management
    setTimeout(() => {
        const firstInput = form?.querySelector('input');
        if (firstInput) firstInput.focus();
    }, 100);
}

function setupDeliveryOptions() {
    const deliveryOptions = document.querySelectorAll('.delivery-option');
    const deliveryAddress = getElement('#deliveryAddress');
    
    deliveryOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active state from all options
            deliveryOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add active state to clicked option
            this.classList.add('selected');
            
            // Show/hide delivery address section
            if (deliveryAddress) {
                if (this.dataset.type === 'delivery') {
                    deliveryAddress.style.display = 'block';
                    // Make address fields required
                    deliveryAddress.querySelectorAll('input[required]').forEach(input => {
                        input.required = true;
                    });
                } else {
                    deliveryAddress.style.display = 'none';
                    // Make address fields optional
                    deliveryAddress.querySelectorAll('input').forEach(input => {
                        input.required = false;
                    });
                }
            }
            
            trackEvent('select_delivery_option', { 
                delivery_type: this.dataset.type 
            });
        });
    });
}

function closeCheckoutModal() {
    const modal = getElement('#checkoutModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function handleCheckoutSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    
    // Validate form
    if (!validateCheckoutForm(form)) {
        showToast('Please fill in all required fields correctly', 'error');
        return;
    }
    
    showLoading('Processing your order...');
    
    // Collect form data
    const orderData = collectOrderData(form);
    
    // Simulate order processing
    setTimeout(() => {
        hideLoading();
        closeCheckoutModal();
        
        // Show success message
        showToast('Order placed successfully! You will receive a confirmation email shortly.', 'success', 5000);
        
        // Track successful purchase
        trackPurchase(orderData);
        
        // Clear cart after successful order
        clearCart();
        
        // In a real application, this would send data to the server
        console.log('Order Data:', orderData);
        
        // Show order confirmation (could be another modal or redirect)
        setTimeout(() => {
            showOrderConfirmation(orderData);
        }, 2000);
        
    }, 2000);
}

function validateCheckoutForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--danger)';
            isValid = false;
        } else {
            field.style.borderColor = '';
            
            // Additional validation
            if (field.type === 'email' && !validateEmail(field.value)) {
                field.style.borderColor = 'var(--danger)';
                isValid = false;
            }
            
            if (field.type === 'tel' && !validatePhone(field.value)) {
                field.style.borderColor = 'var(--danger)';
                isValid = false;
            }
            
            if (field.id === 'postalCode' && !/^\d{4}$/.test(field.value)) {
                field.style.borderColor = 'var(--danger)';
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function collectOrderData(form) {
    const selectedDeliveryOption = document.querySelector('.delivery-option.selected');
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const deliveryFee = subtotal > 200 ? 0 : (selectedDeliveryOption?.dataset.type === 'delivery' ? 25 : 0);
    const total = subtotal + deliveryFee;
    
    return {
        orderId: 'KK' + Date.now(),
        items: [...cart],
        customer: {
            firstName: getElement('#firstName')?.value,
            lastName: getElement('#lastName')?.value,
            email: getElement('#checkoutEmail')?.value,
            phone: getElement('#checkoutPhone')?.value
        },
        delivery: {
            type: selectedDeliveryOption?.dataset.type || 'delivery',
            address: selectedDeliveryOption?.dataset.type === 'delivery' ? {
                street: getElement('#streetAddress')?.value,
                suburb: getElement('#suburb')?.value,
                city: getElement('#city')?.value,
                province: getElement('#province')?.value,
                postalCode: getElement('#postalCode')?.value
            } : null,
            date: getElement('#deliveryDate')?.value,
            timeSlot: getElement('#deliveryTime')?.value,
            fee: deliveryFee
        },
        payment: {
            method: getElement('#paymentMethod')?.value
        },
        specialInstructions: getElement('#specialInstructions')?.value,
        pricing: {
            subtotal,
            deliveryFee,
            total
        },
        timestamp: new Date().toISOString()
    };
}

function showOrderConfirmation(orderData) {
    const modal = getElement('#checkoutModal');
    const content = getElement('#checkoutContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="color: var(--success); font-size: 4rem; margin-bottom: 1rem;">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2 style="color: var(--success); margin-bottom: 1rem;">Order Confirmed!</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">Thank you for choosing KK Butchery</p>
            
            <div style="background: var(--light-gray); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 2rem;">
                <h3>Order Details</h3>
                <p><strong>Order ID:</strong> ${orderData.orderId}</p>
                <p><strong>Customer:</strong> ${orderData.customer.firstName} ${orderData.customer.lastName}</p>
                <p><strong>Delivery:</strong> ${orderData.delivery.type === 'delivery' ? 'Home Delivery' : 'Store Collection'}</p>
                <p><strong>Date:</strong> ${new Date(orderData.delivery.date).toLocaleDateString()}</p>
                <p><strong>Total:</strong> ${formatPrice(orderData.pricing.total)}</p>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button class="btn-primary" onclick="printOrderSummary()" style="flex: 1; min-width: 200px;">
                    <i class="fas fa-print"></i> Print Order
                </button>
                <button class="btn-secondary" onclick="closeCheckoutModal()" style="flex: 1; min-width: 200px;">
                    <i class="fas fa-home"></i> Continue Shopping
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Enhanced Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    if (!validateForm(form)) {
        showToast('Please fill in all required fields correctly', 'error');
        return;
    }
    
    showLoading('Sending your message...');
    
    const formData = {
        name: getElement('#name')?.value,
        email: getElement('#email')?.value,
        phone: getElement('#phone')?.value,
        subject: getElement('#subject')?.value,
        message: getElement('#message')?.value,
        timestamp: new Date().toISOString()
    };
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading();
        showToast('Message sent successfully! We will get back to you within 24 hours.', 'success', 5000);
        form.reset();
        
        // Reset form validation styles
        form.querySelectorAll('input, select, textarea').forEach(field => {
            field.style.borderColor = '';
        });
        
        trackEvent('contact_form_submitted', {
            subject: formData.subject
        });
        
        console.log('Contact Form Data:', formData);
    }, 1500);
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]')?.value;
    
    if (!email || !validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    showLoading('Subscribing to newsletter...');
    
    setTimeout(() => {
        hideLoading();
        showToast('Successfully subscribed to our newsletter! Check your email for confirmation.', 'success', 5000);
        e.target.reset();
        
        trackEvent('newsletter_subscription', { email });
        
        console.log('Newsletter Subscription:', { email, timestamp: new Date().toISOString() });
    }, 1000);
}

// Enhanced Navigation Functions
function scrollToProducts() {
    const element = getElement('#products');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add slight offset for fixed header
        setTimeout(() => {
            window.scrollBy(0, -100);
        }, 500);
    }
}

function scrollToAbout() {
    const element = getElement('#about');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => window.scrollBy(0, -100), 500);
    }
}

function scrollToContact() {
    const element = getElement('#contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => window.scrollBy(0, -100), 500);
    }
}

// Enhanced Mobile Menu
function toggleMobileMenu() {
    const navMenu = getElement('.nav-menu');
    const menuToggle = getElement('.menu-toggle');
    
    if (!navMenu || !menuToggle) return;
    
    const isActive = navMenu.classList.contains('active');
    
    if (isActive) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
        
        // Animate menu toggle button
        menuToggle.querySelectorAll('span').forEach((span, index) => {
            span.style.transform = '';
        });
    } else {
        navMenu.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate menu toggle button to X
        const spans = menuToggle.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        }
    }
}

// Enhanced Header Effects
function setupHeaderScrollEffect() {
    const header = getElement('.header');
    if (!header) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateHeader = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    };
    
    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Back to Top Button
function setupBackToTop() {
    const backToTopBtn = getElement('#backToTop');
    if (!backToTopBtn) return;
    
    const toggleButton = throttle(() => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }, 100);
    
    window.addEventListener('scroll', toggleButton, { passive: true });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        trackEvent('back_to_top_clicked');
    });
}

// Enhanced Smooth Navigation
function setupSmoothNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = getElement(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Close mobile menu if open
                const navMenu = getElement('.nav-menu');
                if (navMenu?.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Add slight offset for fixed header
                setTimeout(() => window.scrollBy(0, -100), 500);
                
                trackEvent('navigation_click', { target: targetId });
            }
        });
    });
}

// Enhanced Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add stagger effect for grouped elements
                const siblings = entry.target.parentElement?.children;
                if (siblings && siblings.length > 1) {
                    Array.from(siblings).forEach((sibling, index) => {
                        if (sibling.classList.contains('fade-in')) {
                            sibling.style.animationDelay = `${index * 0.1}s`;
                        }
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToObserve = document.querySelectorAll(`
        section, 
        .product-card, 
        .special-item, 
        .testimonial, 
        .blog-post,
        .info-item,
        .service-item,
        .reason,
        .promise-item
    `);
    
    elementsToObserve.forEach(el => observer.observe(el));
}

// Utility Functions
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^(\+27|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function validateForm(formElement) {
    const requiredFields = formElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--danger)';
            isValid = false;
        } else {
            field.style.borderColor = '';
            
            // Additional validation for specific field types
            if (field.type === 'email' && !validateEmail(field.value)) {
                field.style.borderColor = 'var(--danger)';
                isValid = false;
            }
            
            if (field.type === 'tel' && !validatePhone(field.value)) {
                field.style.borderColor = 'var(--danger)';
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Enhanced Analytics Functions
function trackEvent(eventName, eventData = {}) {
    console.log('Analytics Event:', eventName, eventData);
    
    // In production, this would integrate with Google Analytics, Facebook Pixel, etc.
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
}

function trackPurchase(orderData) {
    const purchaseData = {
        transaction_id: orderData.orderId,
        value: orderData.pricing.total,
        currency: 'ZAR',
        items: orderData.items.map(item => ({
            item_id: item.id,
            item_name: item.name,
            item_category: item.category || 'unknown',
            quantity: item.quantity,
            price: item.price
        }))
    };
    
    trackEvent('purchase', purchaseData);
    
    // Track conversion value
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': orderData.pricing.total,
            'currency': 'ZAR'
        });
    }
}

// Enhanced Accessibility
function setupAccessibility() {
    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // ESC key functionality
        if (e.key === 'Escape') {
            if (isCartOpen) {
                toggleCart();
            }
            
            const checkoutModal = getElement('#checkoutModal');
            if (checkoutModal?.classList.contains('active')) {
                closeCheckoutModal();
            }
            
            const navMenu = getElement('.nav-menu');
            if (navMenu?.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
        
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = getElement('#searchInput');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
        
        // Tab navigation indicators
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Mouse usage removes keyboard navigation indicators
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Screen reader announcements
    createLiveRegions();
}

function createLiveRegions() {
    const regions = [
        { id: 'cart-announcements', level: 'assertive' },
        { id: 'general-announcements', level: 'polite' },
        { id: 'search-announcements', level: 'polite' }
    ];
    
    regions.forEach(({ id, level }) => {
        if (!getElement(`#${id}`)) {
            const liveRegion = document.createElement('div');
            liveRegion.id = id;
            liveRegion.className = 'sr-only';
            liveRegion.setAttribute('aria-live', level);
            liveRegion.setAttribute('aria-atomic', 'true');
            document.body.appendChild(liveRegion);
        }
    });
}

function announceToScreenReader(message, urgent = false) {
    const regionId = urgent ? 'cart-announcements' : 'general-announcements';
    const region = getElement(`#${regionId}`);
    
    if (region) {
        region.textContent = message;
        setTimeout(() => {
            region.textContent = '';
        }, 1000);
    }
}

// Enhanced Print Functionality
function printOrderSummary() {
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>KK Butchery - Order Summary</title>
            <style>
                body { 
                    font-family: 'Segoe UI', Arial, sans-serif; 
                    margin: 20px; 
                    color: #333;
                    line-height: 1.6;
                }
                .header { 
                    text-align: center; 
                    margin-bottom: 30px; 
                    border-bottom: 2px solid #8B2635;
                    padding-bottom: 20px;
                }
                .logo { 
                    color: #8B2635; 
                    font-size: 2rem; 
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .tagline {
                    color: #666;
                    font-style: italic;
                }
                .order-info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .order-item { 
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px;
                    border-bottom: 1px solid #eee;
                    margin-bottom: 10px;
                }
                .order-item:last-child {
                    border-bottom: none;
                }
                .item-details {
                    flex: 1;
                }
                .item-name {
                    font-weight: 600;
                    color: #8B2635;
                }
                .item-description {
                    font-size: 0.9rem;
                    color: #666;
                }
                .item-total {
                    font-weight: bold;
                    color: #333;
                }
                .total-section { 
                    border-top: 2px solid #8B2635;
                    padding-top: 20px;
                    margin-top: 20px;
                }
                .total { 
                    font-weight: bold; 
                    font-size: 1.3rem; 
                    color: #8B2635;
                    text-align: right;
                }
                .footer {
                    margin-top: 40px;
                    text-align: center;
                    font-size: 0.9rem;
                    color: #666;
                }
                @media print {
                    body { margin: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">🥩 KK Butchery</div>
                <div class="tagline">Traditional Quality Since 1978</div>
                <p>Mbizweni Square, New Brighton, Port Elizabeth</p>
                <p>Phone: +27 41 123 4567 | Email: info@kkbutchery.co.za</p>
            </div>
            
            <div class="order-info">
                <div>
                    <h3>Order Summary</h3>
                    <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                    <p><strong>Time:</strong> ${new Date().toLocaleTimeString()}</p>
                </div>
                <div>
                    <h3>Order Details</h3>
                    <p><strong>Items:</strong> ${cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
                    <p><strong>Total Value:</strong> ${formatPrice(total)}</p>
                </div>
            </div>
            
            <div class="order-items">
                <h3>Items Ordered:</h3>
                ${cart.map(item => `
                    <div class="order-item">
                        <div class="item-details">
                            <div class="item-name">${item.name}</div>
                            <div class="item-description">
                                Quantity: ${item.quantity} ${item.unit} × ${formatPrice(item.price)} per ${item.unit}
                                ${item.isSpecial ? `<br><em style="color: #E74C3C;">Special Offer: ${item.discount}</em>` : ''}
                            </div>
                        </div>
                        <div class="item-total">${formatPrice(item.total)}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="total-section">
                <div class="total">Total: ${formatPrice(total)}</div>
            </div>
            
            <div class="footer">
                <p><strong>Thank you for choosing KK Butchery!</strong></p>
                <p>We appreciate your business and look forward to serving you again.</p>
                <p><em>This is a summary of your cart contents. Please complete checkout to place your order.</em></p>
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    
    // Print after a short delay to ensure content is loaded
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
    
    trackEvent('print_order_summary', {
        item_count: cart.length,
        total_value: total
    });
}

// Performance Monitoring
function setupPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
        try {
            // Largest Contentful Paint
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime);
                        trackEvent('performance_lcp', { value: entry.startTime });
                    }
                }
            }).observe({ type: 'largest-contentful-paint', buffered: true });
            
            // Cumulative Layout Shift
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        console.log('CLS:', entry.value);
                        trackEvent('performance_cls', { value: entry.value });
                    }
                }
            }).observe({ type: 'layout-shift', buffered: true });
            
        } catch (e) {
            console.log('Performance monitoring not supported');
        }
    }
    
    // Monitor page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        trackEvent('page_load_time', { value: loadTime });
        
        if (loadTime > 3000) {
            console.warn('Page load time is slower than recommended (>3s)');
        }
    });
}

// Error Handling
function handleError(error, userMessage = 'An error occurred. Please try again.') {
    console.error('Error:', error);
    showToast(userMessage, 'error');
    hideLoading();
    
    // Track errors for monitoring
    trackEvent('error_occurred', {
        error_message: error.message,
        error_stack: error.stack,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
    });
}

// Global error handler
window.addEventListener('error', (e) => {
    handleError(e.error, 'Something went wrong. Please refresh the page.');
});

window.addEventListener('unhandledrejection', (e) => {
    handleError(e.reason, 'A network error occurred. Please check your connection.');
});

// Service Worker Registration (for PWA support)
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered successfully');
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker?.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                showToast('App updated! Refresh to get the latest version.', 'info', 10000);
                            }
                        });
                    });
                })
                .catch(error => {
                    console.log('SW registration failed:', error);
                });
        });
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterProducts(category);
        });
    });
    
    // Mobile menu toggle
    const menuToggle = getElement('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Contact form
    const contactForm = getElement('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Newsletter form
    const newsletterForm = getElement('#newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
    
    // Modal close functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-close') || 
            e.target.classList.contains('modal-overlay')) {
            closeCheckoutModal();
        }
    });
    
    // Cart overlay close
    const cartOverlay = getElement('#cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }
    
    // Online/Offline status
    window.addEventListener('online', () => {
        showToast('Connection restored', 'success', 2000);
    });
    
    window.addEventListener('offline', () => {
        showToast('You are offline. Some features may not work.', 'warning', 5000);
    });
    
    // Prevent form resubmission on page refresh
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🥩 KK Butchery Website Initializing...');
    
    try {
        // Core initialization
        initializeProducts();
        setupSmoothNavigation();
        setupHeaderScrollEffect();
        setupScrollAnimations();
        setupBackToTop();
        setupAccessibility();
        setupPerformanceMonitoring();
        
        // Event listeners
        setupEventListeners();
        
        // Service worker for PWA
        registerServiceWorker();
        
        // Initial page tracking
        trackEvent('page_view', { 
            page: 'home',
            timestamp: new Date().toISOString()
        });
        
        console.log('✅ KK Butchery Website Initialized Successfully');
        
        // Show welcome message for first-time visitors
        if (!localStorage.getItem('kk_butchery_visited')) {
            setTimeout(() => {
                showToast('Welcome to KK Butchery! Serving quality meats since 1978.', 'info', 5000);
                localStorage.setItem('kk_butchery_visited', 'true');
            }, 2000);
        }
        
    } catch (error) {
        handleError(error, 'Failed to initialize website. Please refresh the page.');
    }
});

// Export functions for global access
window.KKButchery = {
    // Cart functions
    addToCart,
    removeFromCart,
    updateItemQuantity,
    toggleCart,
    clearCart,
    
    // Product functions
    filterProducts,
    searchProducts,
    
    // Utility functions
    showToast,
    showLoading,
    hideLoading,
    
    // Quantity functions
    increaseQuantity,
    decreaseQuantity,
    
    // Checkout functions
    proceedToCheckout,
    closeCheckoutModal,
    
    // Navigation functions
    scrollToProducts,
    scrollToAbout,
    scrollToContact,
    
    // Special functions
    addSpecialToCart,
    
    // Analytics
    trackEvent,
    trackPurchase,
    
    // Accessibility
    announceToScreenReader,
    
    // Print
    printOrderSummary,
    
    // Mobile
    toggleMobileMenu
};

console.log('🚀 KK Butchery JavaScript Loaded Successfully');