// ========== PREMIUM WEBSITE JAVASCRIPT ==========

// ========== IMPORTANT: CHANGE YOUR WHATSAPP NUMBER HERE ==========
const COMPANY_WHATSAPP = '6591234567'; // Change to YOUR WhatsApp number
// ==================================================================

// Service Details Data
const serviceDetails = {
    moving: {
        title: "🚚 Professional Moving Services",
        description: "We provide comprehensive moving solutions for residential and commercial clients with utmost care and professionalism.",
        features: [
            "Residential & Commercial Moving",
            "Local and Long-Distance Relocation",
            "Furniture Disassembly & Reassembly",
            "Professional Packing Materials",
            "Trained and Experienced Movers",
            "Timely and Efficient Service",
            "Insurance Coverage Available",
            "GPS-Tracked Vehicles"
        ],
        process: "Our moving process includes: Initial consultation → Professional packing → Safe loading → Secure transportation → Careful unloading → Setup at destination",
        pricing: "Starting from $200 for HDB 2BHK. Custom quotes available for larger properties."
    },
    packing: {
        title: "📦 Expert Packing Services",
        description: "Our professional packing services ensure your belongings are protected during transit with high-quality materials and expert techniques.",
        features: [
            "High-Quality Packing Materials",
            "Fragile Item Special Handling",
            "Custom Crating for Valuables",
            "Labeling and Inventory System",
            "Unpacking Services Available",
            "Eco-Friendly Packing Options",
            "Electronics Packing Specialists",
            "Artwork and Antique Protection"
        ],
        process: "Our packing process: Assessment → Material selection → Systematic packing → Labeling → Quality check → Safe loading",
        pricing: "Packing materials and labor priced separately. Full-service packing packages available."
    },
    storage: {
        title: "🏢 Secure Storage Solutions",
        description: "Climate-controlled, secure storage facilities for short-term or long-term storage needs with 24/7 monitoring and access.",
        features: [
            "Climate-Controlled Units",
            "24/7 Security Monitoring",
            "CCTV Surveillance",
            "Individual Unit Locks",
            "Flexible Storage Terms",
            "Various Unit Sizes Available",
            "Clean and Pest-Free Environment",
            "Easy Access During Business Hours"
        ],
        process: "Storage process: Choose unit size → Sign agreement → Move items in → Secure storage → Access anytime during business hours",
        pricing: "Monthly rates starting from $80 for small units. Discounts available for long-term storage."
    },
    international: {
        title: "✈️ International Shipping & Relocation",
        description: "Global moving and shipping services with customs clearance assistance and door-to-door delivery worldwide.",
        features: [
            "Worldwide Shipping Coverage",
            "Sea and Air Freight Options",
            "Customs Clearance Assistance",
            "Door-to-Door Service",
            "Export Packing Standards",
            "International Insurance",
            "Document Handling Support",
            "Real-Time Shipment Tracking"
        ],
        process: "International process: Consultation → Documentation → Professional packing → Export clearance → Shipping → Import clearance → Delivery",
        pricing: "Quotes based on destination, volume, and shipping method. Contact us for detailed estimates."
    }
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Premium website loaded!');

    // Get elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const header = document.getElementById('header');
    const progressBar = document.getElementById('progressBar');
    const backToTop = document.getElementById('backToTop');
    
    // Service modal elements
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceModal = document.getElementById('serviceModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    // Calculator elements
    const estimateForm = document.getElementById('estimateForm');
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const formSteps = document.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.steps-indicator .step');
    const qtyButtons = document.querySelectorAll('.qty-btn');
    const propertyInputs = document.querySelectorAll('input[name="propertyType"]');

    // Contact form
    const contactForm = document.getElementById('contactForm');

    // ========== NAVIGATION FUNCTIONALITY ==========
    
    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active-section');
            });
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active-section');
            }
            
            // Close mobile menu
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (hamburger && navMenu) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

    // ========== SCROLL EFFECTS ==========
    
    window.addEventListener('scroll', function() {
        // Header scroll effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Progress bar
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';

        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Back to top functionality
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ========== SERVICE MODAL FUNCTIONALITY ==========
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.dataset.service;
            const service = serviceDetails[serviceType];
            
            if (service) {
                // Build modal content
                let modalContent = `
                    <h2>${service.title}</h2>
                    <p style="font-size: 1.1rem; margin-bottom: 2rem;">${service.description}</p>
                    
                    <h3>What We Offer:</h3>
                    <ul>
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <h3>Our Process:</h3>
                    <p>${service.process}</p>
                    
                    <h3>Pricing:</h3>
                    <p>${service.pricing}</p>
                    
                    <div style="margin-top: 2rem; text-align: center;">
                        <a href="#estimate" class="btn btn-primary" style="display: inline-block; margin-right: 1rem;">Get Quote</a>
                        <a href="#contact" class="btn btn-secondary" style="display: inline-block;">Contact Us</a>
                    </div>
                `;
                
                modalBody.innerHTML = modalContent;
                serviceModal.classList.add('active');
                document.body.style.overflow = 'hidden';

                // Add click handlers to modal buttons
                const modalLinks = modalBody.querySelectorAll('a[href^="#"]');
                modalLinks.forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        closeModal();
                        const targetId = this.getAttribute('href').substring(1);
                        const targetLink = document.querySelector(`.nav-link[href="#${targetId}"]`);
                        if (targetLink) {
                            targetLink.click();
                        }
                    });
                });
            }
        });
    });

    // Close modal
    function closeModal() {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on outside click
    serviceModal.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
            closeModal();
        }
    });

    // ========== CALCULATOR FUNCTIONALITY ==========
    
    let currentStep = 1;

    // Next button handlers
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            
            // Validate current step
            if (currentStep === 1) {
                const name = document.getElementById('customerName').value.trim();
                const phone = document.getElementById('customerPhone').value.trim();
                if (!name || !phone) {
                    alert('Please fill in your name and WhatsApp number');
                    return;
                }
            }
            
            if (currentStep === 2) {
                const selectedProperty = document.querySelector('input[name="propertyType"]:checked');
                if (!selectedProperty) {
                    alert('Please select a property type');
                    return;
                }
            }
            
            goToStep(nextStep);
        });
    });

    // Previous button handlers
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            goToStep(prevStep);
        });
    });

    function goToStep(stepNumber) {
        // Hide all steps
        formSteps.forEach(step => {
            step.classList.remove('active');
        });
        
        // Show target step
        const targetStep = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
        if (targetStep) {
            targetStep.classList.add('active');
        }
        
        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
            if (index < stepNumber) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        currentStep = stepNumber;
        
        // If step 4, generate summary
        if (stepNumber === 4) {
            generateEstimateSummary();
        }
    }

    // Quantity button handlers
    qtyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.dataset.item;
            const input = document.getElementById(itemId);
            let value = parseInt(input.value) || 0;
            
            if (this.classList.contains('plus')) {
                value++;
            } else if (this.classList.contains('minus') && value > 0) {
                value--;
            }
            
            input.value = value;
        });
    });

    // Calculate total estimate
    function calculateTotal() {
        let total = 0;
        
        // Property base price
        const selectedProperty = document.querySelector('input[name="propertyType"]:checked');
        if (selectedProperty) {
            total += parseInt(selectedProperty.dataset.price);
        }
        
        // Items
        const itemInputs = document.querySelectorAll('.qty-control input[type="number"]');
        itemInputs.forEach(input => {
            const qty = parseInt(input.value) || 0;
            const price = parseInt(input.dataset.price) || 0;
            total += qty * price;
        });
        
        return total;
    }

    // Generate estimate summary
    function generateEstimateSummary() {
        const customerName = document.getElementById('customerName').value;
        const customerPhone = document.getElementById('customerPhone').value;
        const customerEmail = document.getElementById('customerEmail').value;
        
        const selectedProperty = document.querySelector('input[name="propertyType"]:checked');
        const propertyName = selectedProperty ? selectedProperty.value.toUpperCase().replace(/-/g, ' ') : 'Not selected';
        const propertyPrice = selectedProperty ? parseInt(selectedProperty.dataset.price) : 0;
        
        // Get selected items
        let itemsList = [];
        const itemInputs = document.querySelectorAll('.qty-control input[type="number"]');
        itemInputs.forEach(input => {
            const qty = parseInt(input.value) || 0;
            if (qty > 0) {
                const itemName = input.closest('.item-box').querySelector('.item-name').textContent;
                const price = parseInt(input.dataset.price);
                itemsList.push({
                    name: itemName,
                    qty: qty,
                    price: price,
                    total: qty * price
                });
            }
        });
        
        const total = calculateTotal();
        
        // Build summary HTML
        let summaryHTML = `
            <h4>Customer Details:</h4>
            <p><strong>Name:</strong> ${customerName}</p>
            <p><strong>Phone:</strong> ${customerPhone}</p>
            ${customerEmail ? `<p><strong>Email:</strong> ${customerEmail}</p>` : ''}
            
            <h4 style="margin-top: 1.5rem;">Property Type:</h4>
            <p>${propertyName} - $${propertyPrice}</p>
        `;
        
        if (itemsList.length > 0) {
            summaryHTML += `<h4 style="margin-top: 1.5rem;">Items:</h4>`;
            itemsList.forEach(item => {
                summaryHTML += `<p>${item.name}: ${item.qty} x $${item.price} = $${item.total}</p>`;
            });
        }
        
        document.getElementById('estimateSummary').innerHTML = summaryHTML;
        document.getElementById('totalAmount').textContent = '$' + total;
    }

    // Form submission
    if (estimateForm) {
        estimateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const customerName = document.getElementById('customerName').value.trim();
            const customerPhone = document.getElementById('customerPhone').value.trim();
            const customerEmail = document.getElementById('customerEmail').value.trim();
            
            const selectedProperty = document.querySelector('input[name="propertyType"]:checked');
            if (!selectedProperty) {
                alert('Please select a property type');
                return;
            }
            
            const propertyName = selectedProperty.value.toUpperCase().replace(/-/g, ' ');
            const propertyPrice = parseInt(selectedProperty.dataset.price);
            
            // Get items
            let itemsList = [];
            const itemInputs = document.querySelectorAll('.qty-control input[type="number"]');
            itemInputs.forEach(input => {
                const qty = parseInt(input.value) || 0;
                if (qty > 0) {
                    const itemName = input.closest('.item-box').querySelector('.item-name').textContent;
                    const price = parseInt(input.dataset.price);
                    itemsList.push({
                        name: itemName,
                        qty: qty,
                        price: price,
                        total: qty * price
                    });
                }
            });
            
            const total = calculateTotal();
            
            // Build WhatsApp message
            let message = `🏠 *MOVING ESTIMATE REQUEST*\n\n`;
            message += `👤 *Customer Details:*\n`;
            message += `Name: ${customerName}\n`;
            message += `Phone: ${customerPhone}\n`;
            if (customerEmail) {
                message += `Email: ${customerEmail}\n`;
            }
            message += `\n`;
            
            message += `🏘️ *Property Type:*\n`;
            message += `${propertyName} - $${propertyPrice}\n\n`;
            
            if (itemsList.length > 0) {
                message += `📦 *Items to Move:*\n`;
                itemsList.forEach(item => {
                    message += `• ${item.name}: ${item.qty} x $${item.price} = $${item.total}\n`;
                });
                message += `\n`;
            }
            
            message += `💰 *ESTIMATED TOTAL: $${total}*\n\n`;
            message += `_*Note: This is an approximate estimate. Final cost may vary._\n\n`;
            message += `📞 Please contact us to confirm your booking!\n`;
            message += `Thank you for choosing Assalaamualaikum Enterprise! 🚚`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodedMessage}`;
            
            const confirmSend = confirm(
                `Your estimated cost: $${total}\n\n` +
                `Property: ${propertyName}\n` +
                `Items: ${itemsList.length}\n\n` +
                `Click OK to send this estimate via WhatsApp.`
            );
            
            if (confirmSend) {
                window.open(whatsappURL, '_blank');
                
                setTimeout(() => {
                    alert(
                        `✅ Thank you ${customerName}!\n\n` +
                        `Your estimate of $${total} has been sent.\n` +
                        `We'll contact you shortly at ${customerPhone}!\n\n` +
                        `- Assalaamualaikum Enterprise`
                    );
                }, 500);
            }
        });
    }

    // ========== CONTACT FORM ==========
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const message = document.getElementById('contactMessage').value;
            
            alert(
                `✅ Thank you ${name}!\n\n` +
                `Your message has been received.\n` +
                `We'll contact you soon at ${email}.\n\n` +
                `- Assalaamualaikum Enterprise`
            );
            
            contactForm.reset();
        });
    }

    // ========== SMOOTH ANIMATIONS ==========
    
    // Intersection Observer for fade-in animations
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

    // Observe elements
    document.querySelectorAll('.service-card, .about-card, .feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    console.log('All scripts initialized successfully!');
});