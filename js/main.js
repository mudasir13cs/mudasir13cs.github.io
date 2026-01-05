// ===================================
// Professional Portfolio - Main JavaScript
// Author: Mudasir
// ===================================

(function() {
    'use strict';

    // ===================================
    // EmailJS Configuration
    // ===================================
    const EMAIL_CONFIG = {
        publicKey: '5ublF8E05EGHKOCG6',
        serviceID: 'default_service',
        templateID: 'template_4fwfc0p'
    };

    // Initialize EmailJS
    emailjs.init(EMAIL_CONFIG.publicKey);

    // ===================================
    // Page Loader
    // ===================================
    window.addEventListener('load', () => {
        const loader = document.getElementById('pageLoader');
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    });

    // ===================================
    // Navigation
    // ===================================
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Active Navigation Link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // ===================================
    // Skills Section - Category Tabs
    // ===================================
    const categoryBtns = document.querySelectorAll('.category-btn');
    const skillGroups = document.querySelectorAll('.skill-group');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');

            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show corresponding skill group
            skillGroups.forEach(group => {
                if (group.getAttribute('data-group') === category) {
                    group.classList.add('active');
                } else {
                    group.classList.remove('active');
                }
            });
        });
    });

    // ===================================
    // Projects Section - Filters
    // ===================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const cardFilter = card.getAttribute('data-filter');
                    if (cardFilter && cardFilter.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // ===================================
    // Contact Form with EmailJS
    // ===================================
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            // Get form data
            const formData = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    EMAIL_CONFIG.serviceID,
                    EMAIL_CONFIG.templateID,
                    formData
                );

                // Success
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                
                // Reset form
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.textContent = '';
                }, 5000);

            } catch (error) {
                // Error
                console.error('EmailJS Error:', error);
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Failed to send message. Please try again or email me directly.';

                // Hide error message after 5 seconds
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.textContent = '';
                }, 5000);
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> <span data-translate="contact.form.send">Send Message</span>';
                
                // Update translation
                updateTranslations();
            }
        });
    }

    // ===================================
    // Scroll to Top Button
    // ===================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===================================
    // Language Switcher
    // ===================================
    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLanguage = localStorage.getItem('language') || 'en';

    // Initialize language
    setLanguage(currentLanguage);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);

        // Update active button
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update translations
        updateTranslations();

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    function updateTranslations() {
        if (typeof translations === 'undefined') {
            console.error('Translations not loaded');
            return;
        }

        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = getNestedTranslation(translations[currentLanguage], key);
            
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = getNestedTranslation(translations[currentLanguage], key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });
    }

    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    // ===================================
    // AOS (Animate On Scroll) Initialization
    // ===================================
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // ===================================
    // Smooth Scroll for All Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#' or empty
            if (href === '#' || href === '') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===================================
    // Typing Effect for Hero Title (Optional)
    // ===================================
    function typingEffect() {
        const text = 'Mudasir';
        const element = document.querySelector('.hero-title .gradient-text');
        if (!element) return;

        let index = 0;
        element.textContent = '';

        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);
    }

    // Uncomment to enable typing effect
    // typingEffect();

    // ===================================
    // Parallax Effect for Hero Background
    // ===================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroParticles = document.querySelector('.hero-particles');
        
        if (heroParticles && scrolled < window.innerHeight) {
            heroParticles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // ===================================
    // Form Input Focus Effects
    // ===================================
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // ===================================
    // Skill Level Animation on Scroll
    // ===================================
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const levelBars = entry.target.querySelectorAll('.level-bar');
                levelBars.forEach(bar => {
                    bar.style.width = bar.style.getPropertyValue('--skill-width');
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-group').forEach(group => {
        skillObserver.observe(group);
    });

    // ===================================
    // Prevent Right Click on Images (Optional)
    // ===================================
    // Uncomment if you want to prevent right-click on profile image
    /*
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
    */

    // ===================================
    // Console Message
    // ===================================
    console.log('%c👋 Hello Developer!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the repository!', 'color: #a8b2d1; font-size: 14px;');
    console.log('%chttps://github.com/mudasir13cs', 'color: #00d4ff; font-size: 14px;');

    // ===================================
    // Initialize Everything
    // ===================================
    console.log('Portfolio initialized successfully!');
})();
