// Cart functionality
let cart = [];

// Smooth scrolling functions
function scrollToOrder() {
    const orderSection = document.getElementById('order');
    orderSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToInfo() {
    const infoSection = document.getElementById('info');
    infoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Cart functions
function addToCart(size, price, name) {
    const existingItem = cart.find(item => item.size === size);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            size: size,
            price: price,
            name: name,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showCartFloatingButton();
    
    // Show success animation
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
    button.style.background = 'linear-gradient(135deg, #059669, #047857)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(135deg, #16a34a, #15803d)';
    }, 1500);
}

function removeFromCart(size) {
    cart = cart.filter(item => item.size !== size);
    updateCartDisplay();
    
    if (cart.length === 0) {
        hideCartFloatingButton();
        hideCartSection();
    }
}

function updateQuantity(size, change) {
    const item = cart.find(item => item.size === size);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(size);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const formCartSummary = document.getElementById('form-cart-summary');
    const cartSummaryItems = document.getElementById('cart-summary-items');
    const formCartTotal = document.getElementById('form-cart-total');
    const cartDataInput = document.getElementById('cartData');
    
    // Clear existing items
    cartItemsContainer.innerHTML = '';
    cartSummaryItems.innerHTML = '';
    
    let total = 0;
    let totalItems = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;
        
        // Cart section item
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price.toFixed(2)} € × ${item.quantity} = ${itemTotal.toFixed(2)} €</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.size}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.size}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.size}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        
        // Form summary item
        const summaryItem = document.createElement('div');
        summaryItem.className = 'cart-summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} × ${item.quantity}</span>
            <span>${itemTotal.toFixed(2)} €</span>
        `;
        cartSummaryItems.appendChild(summaryItem);
    });
    
    // Update totals
    cartTotal.textContent = `${total.toFixed(2)} €`;
    formCartTotal.textContent = `${total.toFixed(2)} €`;
    cartCount.textContent = totalItems;
    
    // Show/hide form cart summary
    if (cart.length > 0) {
        formCartSummary.style.display = 'block';
        
        // Update hidden cart data for form submission
        const cartData = {
            items: cart,
            total: total.toFixed(2),
            totalItems: totalItems
        };
        cartDataInput.value = JSON.stringify(cartData);
    } else {
        formCartSummary.style.display = 'none';
        cartDataInput.value = '';
    }
}

function showCartFloatingButton() {
    const cartFloatingBtn = document.getElementById('cart-floating-btn');
    cartFloatingBtn.style.display = 'flex';
}

function hideCartFloatingButton() {
    const cartFloatingBtn = document.getElementById('cart-floating-btn');
    cartFloatingBtn.style.display = 'none';
}

function toggleCart() {
    const cartSection = document.getElementById('cart-section');
    
    if (cart.length === 0) {
        scrollToProducts();
        return;
    }
    
    if (cartSection.style.display === 'none' || cartSection.style.display === '') {
        cartSection.style.display = 'block';
        cartSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        cartSection.style.display = 'none';
    }
}

function hideCartSection() {
    const cartSection = document.getElementById('cart-section');
    cartSection.style.display = 'none';
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    // Order form handling
    const orderForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const buttonText = document.getElementById('button-text');
    const loadingText = document.getElementById('loading-text');
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');

    orderForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Check if cart is empty
        if (cart.length === 0) {
            alert('Votre panier est vide. Veuillez ajouter des produits avant de finaliser votre commande.');
            scrollToProducts();
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        loadingText.style.display = 'flex';
        
        // Get form data
        const formData = new FormData(orderForm);
        const data = Object.fromEntries(formData);
        
        // Add cart information to the message
        const cartInfo = JSON.parse(data.cartData);
        let orderDetails = '\n\n=== DÉTAILS DE LA COMMANDE ===\n';
        cartInfo.items.forEach(item => {
            orderDetails += `${item.name} × ${item.quantity} = ${(item.price * item.quantity).toFixed(2)} €\n`;
        });
        orderDetails += `\nTOTAL: ${cartInfo.total} €`;
        orderDetails += `\nNombre total d'articles: ${cartInfo.totalItems}`;
        
        // Combine original message with order details
        data.message = (data.message || '') + orderDetails;
        
        try {
            const response = await fetch('https://formspree.io/f/xovwrwaa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                // Show success message
                showOrderSuccess();
                // Reset form and cart
                orderForm.reset();
                cart = [];
                updateCartDisplay();
                hideCartFloatingButton();
                hideCartSection();
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            buttonText.style.display = 'flex';
            loadingText.style.display = 'none';
        }
    });

    // Information form handling
    const infoForm = document.getElementById('info-form');
    const infoSubmitButton = document.getElementById('info-submit-button');
    const infoButtonText = document.getElementById('info-button-text');
    const infoLoadingText = document.getElementById('info-loading-text');
    const infoFormContainer = document.getElementById('info-form-container');
    const infoSuccessMessage = document.getElementById('info-success-message');

    infoForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        infoSubmitButton.disabled = true;
        infoButtonText.style.display = 'none';
        infoLoadingText.style.display = 'flex';
        
        // Get form data
        const formData = new FormData(infoForm);
        const data = Object.fromEntries(formData);
        
        // Add header to distinguish info requests
        data.message = `=== DEMANDE D'INFORMATION ===\nSujet: ${data.subject}\n\n${data.message}`;
        
        try {
            const response = await fetch('https://formspree.io/f/xovwrwaa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                // Show success message
                showInfoSuccess();
                // Reset form
                infoForm.reset();
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
        } finally {
            // Reset button state
            infoSubmitButton.disabled = false;
            infoButtonText.style.display = 'flex';
            infoLoadingText.style.display = 'none';
        }
    });
});

// Show success messages
function showOrderSuccess() {
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');
    
    formContainer.style.display = 'none';
    successMessage.style.display = 'block';
}

function showInfoSuccess() {
    const infoFormContainer = document.getElementById('info-form-container');
    const infoSuccessMessage = document.getElementById('info-success-message');
    
    infoFormContainer.style.display = 'none';
    infoSuccessMessage.style.display = 'block';
}

// Reset forms and show them again
function resetForm() {
    const formContainer = document.getElementById('form-container');
    const successMessage = document.getElementById('success-message');
    const form = document.getElementById('contact-form');
    
    formContainer.style.display = 'block';
    successMessage.style.display = 'none';
    form.reset();
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    hideCartFloatingButton();
    hideCartSection();
}

function resetInfoForm() {
    const infoFormContainer = document.getElementById('info-form-container');
    const infoSuccessMessage = document.getElementById('info-success-message');
    const infoForm = document.getElementById('info-form');
    
    infoFormContainer.style.display = 'block';
    infoSuccessMessage.style.display = 'none';
    infoForm.reset();
}

// Add scroll effects
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.header-image');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add animation on scroll for benefit cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe benefit cards and product cards when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    const productCards = document.querySelectorAll('.product-card');
    const infoItems = document.querySelectorAll('.info-item');
    
    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });

    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add hover effect for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Preload critical images
function preloadImages() {
    const imageUrls = [
        'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/4110363/pexels-photo-4110363.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Auto-show cart when items are added
function showCartAfterDelay() {
    setTimeout(() => {
        if (cart.length > 0) {
            const cartSection = document.getElementById('cart-section');
            cartSection.style.display = 'block';
        }
    }, 1000);
}

// Update the addToCart function to show cart section
const originalAddToCart = addToCart;
addToCart = function(size, price, name) {
    originalAddToCart(size, price, name);
    
    // Show cart section after first item is added
    if (cart.length === 1) {
        showCartAfterDelay();
    }
};