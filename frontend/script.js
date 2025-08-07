// Butchery Website JavaScript
// Author: SM Solutions
// Date: August 2025

// Global Variables
let cart = [];
let products = [];
let currentCategory = 'all';
let isCartOpen = false;

// Product Data
const productData = [
    // Beef Products
    {
        id: 1,
        name: "Premium Ribeye Steak",
        category: "beef",
        price: 89.99,
        unit: "kg",
        description: "Prime cut ribeye steak, aged to perfection with excellent marbling.",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Beef Mince (Premium)",
        category: "beef",
        price: 45.99,
        unit: "kg",
        description: "Fresh lean beef mince, perfect for burgers and bolognese.",
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 3,
        name: "T-Bone Steak",
        category: "beef",
        price: 75.99,
        unit: "kg",
        description: "Classic T-bone steak with both strip and tenderloin.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 4,
        name: "Beef Brisket",
        category: "beef",
        price: 52.99,
        unit: "kg",
        description: "Slow-cooking cut perfect for smoking and braising.",
        image: "https://images.unsplash.com/photo-1588347395425-2e56db050356?w=400&h=300&fit=crop",
        inStock: false,
        featured: false
    },

    // Chicken Products
    {
        id: 5,
        name: "Free-Range Whole Chicken",
        category: "chicken",
        price: 35.99,
        unit: "kg",
        description: "Farm-fresh free-range chicken, hormone-free and naturally raised.",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        inStock: true,
        featured: true
    },
    {
        id: 6,
        name: "Chicken Breast Fillets",
        category: "chicken",
        price: 42.99,
        unit: "kg",
        description: "Skinless, boneless chicken breast fillets, perfect for grilling.",
        image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 7,
        name: "Chicken Thighs (Bone-in)",
        category: "chicken",
        price: 28.99,
        unit: "kg",
        description: "Juicy chicken thighs with bone and skin for maximum flavor.",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 8,
        name: "Chicken Wings",
        category: "chicken",
        price: 32.99,
        unit: "kg",
        description: "Fresh chicken wings, perfect for braai and buffalo wings.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },

    // Lamb Products
    {
        id: 9,
        name: "Lamb Leg (Bone-in)",
        category: "lamb",
        price: 68.99,
        unit: "kg",
        description: "Traditional lamb leg roast, perfect for family gatherings.",
        image: "https://images.unsplash.com/photo-1602536942166-eb0e5905a769?w=400&h=300&fit=crop",
        inStock: true,
        featured: true
    },
    {
        id: 10,
        name: "Lamb Chops",
        category: "lamb",
        price: 89.99,
        unit: "kg",
        description: "Premium lamb chops, tender and flavorful.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 11,
        name: "Lamb Shoulder",
        category: "lamb",
        price: 55.99,
        unit: "kg",
        description: "Slow-cooking lamb shoulder, perfect for stews and roasts.",
        image: "https://images.unsplash.com/photo-1602536942166-eb0e5905a769?w=400&h=300&fit=crop",
        inStock: false,
        featured: false
    },

    // Pork Products
    {
        id: 12,
        name: "Pork Belly",
        category: "pork",
        price: 48.99,
        unit: "kg",
        description: "Fresh pork belly with skin, perfect for crackling.",
        image: "https://images.unsplash.com/photo-1588347818111-4c8190711a39?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 13,
        name: "Pork Chops",
        category: "pork",
        price: 52.99,
        unit: "kg",
        description: "Thick-cut pork chops with bone for extra flavor.",
        image: "https://images.unsplash.com/photo-1588347818111-4c8190711a39?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 14,
        name: "Pork Tenderloin",
        category: "pork",
        price: 62.99,
        unit: "kg",
        description: "Lean and tender pork tenderloin, quick-cooking cut.",
        image: "https://images.unsplash.com/photo-1588347818111-4c8190711a39?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },

    // Processed Meats
    {
        id: 15,
        name: "Homemade Beef Sausages",
        category: "processed",
        price: 38.99,
        unit: "kg",
        description: "Traditional beef sausages made with our secret spice blend.",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 16,
        name: "Bacon Rashers",
        category: "processed",
        price: 58.99,
        unit: "kg",
        description: "Smoked bacon rashers, sliced to perfection.",
        image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=400&h=300&fit=crop",
        inStock: true,
        featured: false
    },
    {
        id: 17,
        name: "Biltong (Traditional)",
        category: "processed",
        price: 145.99,
        unit: "kg",
        description: "Traditional South African biltong, air-dried to perfection.",
        image: "https://images.unsplash.com/photo-1542990253-0b8be2494bac?w=400&h=300&fit=crop",
        inStock: true,
        featured: true
    },

    // Combo Deals
    {
        id: 18,
        name: "Family Braai Pack",
        category: "combo",
        price: 289.99,
        unit: "pack",
        description: "Perfect braai pack: 2kg mixed meat selection for family gatherings.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
        inStock: true,
        featured: true,
        originalPrice: 349.99
    },
    {
        id: 19,
        name: "Weekly Meal Pack",
        category: "combo",
        price: 199.99,
        unit: "pack",
        description: "Weekly variety pack: chicken, beef mince, and sausages.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
        inStock: true,
        featured: false,
        originalPrice: 239.99
    },
    {
        id: 20,
        name: "Steak Lover's Pack",
        category: "combo",
        price: 159.99,
        unit: "pack",
        description: "Premium steak selection: ribeye, T-bone, and sirloin cuts.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        inStock: true,
        featured: false,
        originalPrice: 189.99
    }
];

// Weekly Specials Data
const weeklySpecials = [
    {
        id: 1,
        name: "Weekend Braai Special",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
        originalPrice: 179.99,
        salePrice: 149.99,
        discount: "17% OFF",
        description: "Complete braai pack with assorted meats and marinades"
    },
    {
        id: 2,
        name: "Premium Beef Selection",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
        originalPrice: 129.99,
        salePrice: 99.99,
        discount: "23% OFF",
        description: "Mix of premium beef cuts perfect for any occasion"
    },
    {
        id: 3,
        name: "Family Chicken Pack",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        originalPrice: 89.99,
        salePrice: 69.99,
        discount: "22% OFF",
        description: "Whole chicken plus breast fillets and wings"
    }
];

// DOM Elements
const elementsCache = {};

function getElement(selector) {
    if (!elementsCache[selector]) {
        elementsCache[selector] = document.querySelector(selector);
    }
    return elementsCache[selector];
}

// Utility Functions
function formatPrice(price) {
    return `R${price.toFixed(2)}`;
}

function showLoading() {
    getElement('#loadingSpinner').classList.add('active');
}

function hideLoading() {
    getElement('#loadingSpinner').classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = getElement('#toast');
    const messageElement = toast.querySelector('.toast-message');
    
    messageElement.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
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

// Product Functions
function initializeProducts() {
    products = [...productData];
    renderProducts();
    renderSpecials();
}

function renderProducts(productsToRender = products) {
    const productsGrid = getElement('#productsGrid');
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card fade-in" data-category="${product.category}">
            ${product.inStock ? '' : '<div class="product-badge out-of-stock">Out of Stock</div>'}
            ${product.featured ? '<div class="product-badge">Featured</div>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)} per ${product.unit}</div>
                <div class="product-controls">
                    <div class="quantity-selector">
                        <button type="button" onclick="decreaseQuantity(${product.id})">-</button>
                        <input type="number" id="qty-${product.id}" value="1" min="1" max="10" readonly>
                        <button type="button" onclick="increaseQuantity(${product.id})">+</button>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i> ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSpecials() {
    const specialsGrid = getElement('#specialsGrid');
    
    specialsGrid.innerHTML = weeklySpecials.map(special => `
        <div class="special-item fade-in">
            <div class="special-badge">${special.discount}</div>
            <img src="${special.image}" alt="${special.name}" loading="lazy">
            <div class="special-content">
                <h3>${special.name}</h3>
                <p>${special.description}</p>
                <div class="special-price">
                    <span class="original-price">${formatPrice(special.originalPrice)}</span>
                    <span class="sale-price">${formatPrice(special.salePrice)}</span>
                </div>
                <button class="btn-primary" onclick="addSpecialToCart(${special.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    currentCategory = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Filter products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
}

function searchProducts(searchTerm) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    renderProducts(filteredProducts);
}

// Quantity Functions
function increaseQuantity(productId) {
    const qtyInput = getElement(`#qty-${productId}`);
    const currentQty = parseInt(qtyInput.value);
    if (currentQty < 10) {
        qtyInput.value = currentQty + 1;
    }
}

function decreaseQuantity(productId) {
    const qtyInput = getElement(`#qty-${productId}`);
    const currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) {
        qtyInput.value = currentQty - 1;
    }
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(getElement(`#qty-${productId}`).value);
    
    if (!product || !product.inStock) {
        showToast('Product is out of stock', 'error');
        return;
    }
    
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
    showToast(`${product.name} added to cart`, 'success');
    
    // Reset quantity selector
    getElement(`#qty-${productId}`).value = 1;
}

function addSpecialToCart(specialId) {
    const special = weeklySpecials.find(s => s.id === specialId);
    
    if (!special) return;
    
    const existingItem = cart.find(item => item.id === `special-${specialId}`);
    
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
    } else {
        cart.push({
            id: `special-${specialId}`,
            name: special.name,
            price: special.salePrice,
            quantity: 1,
            total: special.salePrice,
            image: special.image,
            unit: 'pack',
            isSpecial: true
        });
    }
    
    updateCartUI();
    showToast(`${special.name} added to cart`, 'success');
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    showToast('Item removed from cart', 'warning');
}

function updateItemQuantity(itemId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = newQuantity;
        item.total = item.price * newQuantity;
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItems = getElement('#cartItems');
    const cartCount = getElement('.cart-count');
    const cartTotal = getElement('#cartTotal');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} per ${item.unit}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateItemQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateItemQuantity('${item.id}', ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const cartSidebar = getElement('#cartSidebar');
    const cartOverlay = getElement('#cartOverlay');
    
    isCartOpen = !isCartOpen;
    
    if (isCartOpen) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
    showToast('Cart cleared', 'warning');
}

// Checkout Functions
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    toggleCart();
    showCheckoutModal();
}

function showCheckoutModal() {
    const modal = getElement('#checkoutModal');
    const content = getElement('#checkoutContent');
    
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    const deliveryFee = total > 200 ? 0 : 25;
    const grandTotal = total + deliveryFee;
    
    content.innerHTML = `
        <form id="checkoutForm">
            <div class="checkout-section">
                <h3>Order Summary</h3>
                <div class="order-summary">
                    ${cart.map(item => `
                        <div class="summary-item">
                            <span>${item.name} (x${item.quantity})</span>
                            <span>${formatPrice(item.total)}</span>
                        </div>
                    `).join('')}
                    <div class="summary-item">
                        <span>Subtotal</span>
                        <span>${formatPrice(total)}</span>
                    </div>
                    <div class="summary-item">
                        <span>Delivery Fee</span>
                        <span>${deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
                    </div>
                    <div class="summary-item summary-total">
                        <span>Total</span>
                        <span>${formatPrice(grandTotal)}</span>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3>Delivery Information</h3>
                <div class="delivery-options">
                    <div class="delivery-option selected" data-type="delivery">
                        <i class="fas fa-truck"></i>
                        <h4>Delivery</h4>
                        <p>${deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</p>
                    </div>
                    <div class="delivery-option" data-type="collection">
                        <i class="fas fa-store"></i>
                        <h4>Collection</h4>
                        <p>FREE</p>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3>Personal Information</h3>
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" id="firstName" required>
                        <label for="firstName">First Name</label>
                    </div>
                    <div class="form-group">
                        <input type="text" id="lastName" required>
                        <label for="lastName">Last Name</label>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="email" id="checkoutEmail" required>
                        <label for="checkoutEmail">Email Address</label>
                    </div>
                    <div class="form-group">
                        <input type="tel" id="checkoutPhone" required>
                        <label for="checkoutPhone">Phone Number</label>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section" id="deliveryAddress" style="display: block;">
                <h3>Delivery Address</h3>
                <div class="form-group">
                    <input type="text" id="streetAddress" required>
                    <label for="streetAddress">Street Address</label>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" id="city" required>
                        <label for="city">City</label>
                    </div>
                    <div class="form-group">
                        <input type="text" id="postalCode" required>
                        <label for="postalCode">Postal Code</label>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3>Delivery Schedule</h3>
                <div class="form-row">
                    <div class="form-group">
                        <input type="date" id="deliveryDate" required>
                        <label for="deliveryDate">Preferred Date</label>
                    </div>
                    <div class="form-group">
                        <select id="deliveryTime" required>
                            <option value="">Select Time Slot</option>
                            <option value="morning">Morning (8:00 - 12:00)</option>
                            <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                            <option value="evening">Evening (17:00 - 20:00)</option>
                        </select>
                        <label for="deliveryTime">Time Slot</label>
                    </div>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3>Payment Method</h3>
                <div class="form-group">
                    <select id="paymentMethod" required>
                        <option value="">Select Payment Method</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="eft">EFT/Bank Transfer</option>
                        <option value="cash">Cash on Delivery</option>
                    </select>
                    <label for="paymentMethod">Payment Method</label>
                </div>
            </div>
            
            <div class="checkout-section">
                <h3>Special Instructions</h3>
                <div class="form-group">
                    <textarea id="specialInstructions" rows="3"></textarea>
                    <label for="specialInstructions">Special Instructions (Optional)</label>
                </div>
            </div>
            
            <button type="submit" class="btn-primary" style="width: 100%; margin-top: 20px;">
                <i class="fas fa-credit-card"></i> Place Order - ${formatPrice(grandTotal)}
            </button>
        </form>
    `;
    
    modal.classList.add('active');
    
    // Add delivery option event listeners
    document.querySelectorAll('.delivery-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.delivery-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            const deliveryAddress = getElement('#deliveryAddress');
            if (this.dataset.type === 'delivery') {
                deliveryAddress.style.display = 'block';
            } else {
                deliveryAddress.style.display = 'none';
            }
        });
    });
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    getElement('#deliveryDate').min = today;
    
    // Handle form submission
    getElement('#checkoutForm').addEventListener('submit', handleCheckoutSubmission);
}

function closeCheckoutModal() {
    getElement('#checkoutModal').classList.remove('active');
}

function handleCheckoutSubmission(e) {
    e.preventDefault();
    
    showLoading();
    
    // Simulate order processing
    setTimeout(() => {
        hideLoading();
        closeCheckoutModal();
        showToast('Order placed successfully! You will receive a confirmation email shortly.', 'success');
        
        // Clear cart after successful order
        clearCart();
        
        // In a real application, this would send data to the server
        console.log('Order Data:', {
            items: cart,
            customer: {
                firstName: getElement('#firstName').value,
                lastName: getElement('#lastName').value,
                email: getElement('#checkoutEmail').value,
                phone: getElement('#checkoutPhone').value
            },
            delivery: {
                type: document.querySelector('.delivery-option.selected').dataset.type,
                address: getElement('#streetAddress')?.value,
                city: getElement('#city')?.value,
                postalCode: getElement('#postalCode')?.value,
                date: getElement('#deliveryDate').value,
                timeSlot: getElement('#deliveryTime').value
            },
            payment: {
                method: getElement('#paymentMethod').value
            },
            specialInstructions: getElement('#specialInstructions').value
        });
    }, 2000);
}

// Contact Form Functions
function handleContactForm(e) {
    e.preventDefault();
    
    showLoading();
    
    const formData = {
        name: getElement('#name').value,
        email: getElement('#email').value,
        phone: getElement('#phone').value,
        subject: getElement('#subject').value,
        message: getElement('#message').value
    };
    
    // Simulate form submission
    setTimeout(() => {
        hideLoading();
        showToast('Message sent successfully! We will get back to you soon.', 'success');
        getElement('#contactForm').reset();
        
        // this would send data to the server
        console.log('Contact Form Data:', formData);
    }, 1500);
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    showLoading();
    
    // Simulate newsletter subscription
    setTimeout(() => {
        hideLoading();
        showToast('Successfully subscribed to our newsletter!', 'success');
        e.target.reset();
        
        // In a real application, this would send data to the server
        console.log('Newsletter Subscription:', { email });
    }, 1000);
}

// Navigation Functions
function scrollToProducts() {
    getElement('#products').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    getElement('#about').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    getElement('#contact').scrollIntoView({ behavior: 'smooth' });
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const navMenu = getElement('.nav-menu');
    const menuToggle = getElement('.menu-toggle');
    
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Smooth Navigation
function setupSmoothNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = getElement(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                const navMenu = getElement('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Header Scroll Effect
function setupHeaderScrollEffect() {
    const header = getElement('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F4E4BC 100%)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Intersection Observer for Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section, .product-card, .special-item, .testimonial, .blog-post').forEach(el => {
        observer.observe(el);
    });
}

// Search Functionality
function setupSearch() {
    const searchInput = getElement('#searchInput');
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

// Local Storage Functions (for production use)
function saveCartToStorage() {
    // Note: In Claude.ai, localStorage is not available
    // This is prepared for production deployment
    try {
        localStorage.setItem('kkButcheryCart', JSON.stringify(cart));
    } catch (e) {
        console.log('Storage not available');
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('kkButcheryCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    } catch (e) {
        console.log('Storage not available');
    }
}

// Form Validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^(\+27|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#F4E4BC';
            
            // Additional validation for specific fields
            if (input.type === 'email' && !validateEmail(input.value)) {
                input.style.borderColor = '#dc3545';
                isValid = false;
            }
            
            if (input.type === 'tel' && !validatePhone(input.value)) {
                input.style.borderColor = '#dc3545';
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Error Handling
function handleError(error, userMessage = 'An error occurred. Please try again.') {
    console.error('Error:', error);
    showToast(userMessage, 'error');
    hideLoading();
}

// API Functions (for backend integration)
async function sendContactMessage(formData) {
    try {
        // In production, this would make an actual API call
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function subscribeToNewsletter(email) {
    try {
        const response = await fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });
        
        if (!response.ok) {
            throw new Error('Subscription failed');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function submitOrder(orderData) {
    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        });
        
        if (!response.ok) {
            throw new Error('Order submission failed');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}

// Real-time Stock Updates (for production)
function setupStockUpdates() {
    // In production, this would connect to WebSocket or polling
    setInterval(() => {
        // Simulate stock updates
        products.forEach(product => {
            if (Math.random() < 0.01) { // 1% chance of stock change
                product.inStock = !product.inStock;
            }
        });
        
        if (currentCategory === 'all') {
            renderProducts(products);
        } else {
            const filteredProducts = products.filter(p => p.category === currentCategory);
            renderProducts(filteredProducts);
        }
    }, 30000); // Check every 30 seconds
}

// Keyboard Navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // ESC key closes modals and cart
        if (e.key === 'Escape') {
            if (isCartOpen) {
                toggleCart();
            }
            
            const checkoutModal = getElement('#checkoutModal');
            if (checkoutModal.classList.contains('active')) {
                closeCheckoutModal();
            }
        }
        
        // Ctrl/Cmd + K opens search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            getElement('#searchInput').focus();
        }
    });
}

// Print Functionality
function printOrderSummary() {
    const printWindow = window.open('', '_blank');
    const total = cart.reduce((sum, item) => sum + item.total, 0);
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>KK Butchery - Order Summary</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .order-item { margin-bottom: 10px; padding: 10px; border-bottom: 1px solid #ddd; }
                .total { font-weight: bold; font-size: 1.2em; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>KK Butchery</h1>
                <h2>Order Summary</h2>
                <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="order-items">
                ${cart.map(item => `
                    <div class="order-item">
                        <strong>${item.name}</strong><br>
                        Quantity: ${item.quantity} ${item.unit}<br>
                        Price: ${formatPrice(item.price)} per ${item.unit}<br>
                        Total: ${formatPrice(item.total)}
                    </div>
                `).join('')}
            </div>
            <div class="total">
                Total: ${formatPrice(total)}
            </div>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Analytics (for production)
function trackEvent(eventName, eventData = {}) {
    // In production, this would send to Google Analytics or similar
    console.log('Analytics Event:', eventName, eventData);
}

function trackPurchase(orderData) {
    trackEvent('purchase', {
        value: orderData.total,
        currency: 'ZAR',
        items: orderData.items.map(item => ({
            item_id: item.id,
            item_name: item.name,
            category: item.category || 'unknown',
            quantity: item.quantity,
            price: item.price
        }))
    });
}

// Performance Monitoring
function setupPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        // This would use a library like web-vitals in production
        console.log('Performance monitoring initialized');
    }
    
    // Monitor page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        if (loadTime > 3000) {
            console.warn('Page load time is slower than recommended (>3s)');
        }
    });
}

// Accessibility Enhancements
function setupAccessibility() {
    // Focus management
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ARIA live regions for dynamic content
    const createLiveRegion = (id, level = 'polite') => {
        if (!getElement(`#${id}`)) {
            const liveRegion = document.createElement('div');
            liveRegion.id = id;
            liveRegion.setAttribute('aria-live', level);
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.style.position = 'absolute';
            liveRegion.style.left = '-10000px';
            liveRegion.style.width = '1px';
            liveRegion.style.height = '1px';
            liveRegion.style.overflow = 'hidden';
            document.body.appendChild(liveRegion);
        }
    };
    
    createLiveRegion('cart-announcements', 'assertive');
    createLiveRegion('general-announcements', 'polite');
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

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('KK Butchery Website Initialized');
    
    try {
        // Initialize core features
        initializeProducts();
        setupSmoothNavigation();
        setupHeaderScrollEffect();
        setupScrollAnimations();
        setupSearch();
        setupKeyboardNavigation();
        setupAccessibility();
        setupPerformanceMonitoring();
        
        // Load saved cart (for production)
        // loadCartFromStorage();
        
        // Set up event listeners
        setupEventListeners();
        
        // Initialize stock updates (for production)
        // setupStockUpdates();
        
        // Track page view
        trackEvent('page_view', { page: 'home' });
        
        console.log('All features initialized successfully');
        
    } catch (error) {
        handleError(error, 'Failed to initialize website');
    }
});

// Event Listeners Setup
function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterProducts(category);
            trackEvent('filter_products', { category });
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
    
    // Modal close buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-close')) {
            closeCheckoutModal();
        }
    });
    
    // Cart events
    document.addEventListener('click', (e) => {
        if (e.target.closest('.cart-btn')) {
            trackEvent('view_cart');
        }
    });
    
    // Product interactions
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart')) {
            const productCard = e.target.closest('.product-card');
            if (productCard) {
                const productName = productCard.querySelector('.product-name').textContent;
                trackEvent('add_to_cart', { product_name: productName });
                announceToScreenReader(`${productName} added to cart`, true);
            }
        }
    });
    
    // Window events
    window.addEventListener('beforeunload', () => {
        // Save cart before leaving (for production)
        // saveCartToStorage();
    });
    
    // Handle online/offline status
    window.addEventListener('online', () => {
        showToast('Connection restored', 'success');
    });
    
    window.addEventListener('offline', () => {
        showToast('You are offline. Some features may not work.', 'warning');
    });
}

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
    
    // Accessibility
    announceToScreenReader,
    
    // Print
    printOrderSummary
};

// Service Worker Registration (for production PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

console.log('KK Butchery JavaScript loaded successfully');