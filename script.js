/**
 * ==============================================================================
 * ESTHER EVA - HANDMADE GIFTS & KEEPSAKES
 * Pure Vanilla JavaScript (script.js)
 *
 * Fully modular, clean, and beginner-friendly.
 * No external dependencies or libraries used.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================================
     1. BRAND CONFIGURATION (Easily update your details here)
     ============================================================================ */
  const BRAND_CONFIG = {
    brandName: "Esther Eva",
    instagramHandle: "@esthers.eva",
    instagramUrl: "https://www.instagram.com/esthers.eva?stkn=MTl6djVzZnRjeHQybQ==",
    // NOTE: Change this to your actual phone number in international format (no + or spaces)
    // E.g., for India: "919876543210", for US: "12345678900"
    whatsappNumber: "917708847695",
    email: "thecrafteva@gmail.com"
  };

  /* ============================================================================
     2. PRODUCTS DATA STORE (Catalogue information for modals & custom orders)
     NOTE: You can easily change image paths to your local images: "images/bouquet.jpg"
     ============================================================================ */
  const PRODUCTS_DATA = [
    {
      id: "1",
      category: "bouquets",
      categoryName: "Bouquets",
      title: "Handmade Bouquets",
      shortDesc: "Beautiful handmade bouquets thoughtfully designed for birthdays, celebrations and special occasions with forever-lasting florals.",
      fullDesc: "Our artisan bouquets are lovingly handcrafted using everlasting dried botanicals, satin ribbon rosettes, and delicate craft paper wrapping. Unlike fresh flowers that wilt in days, Esther Eva bouquets last for years as an everlasting reminder of your love.",
      customisation: "Choose your favorite color palette (Blush Pink, Pastel Lilac, Champagne Cream, or Vintage Rose), bouquet size (Mini, Classic, Deluxe), and optional personalized wooden tag with initials or custom name.",
      turnaround: "2 - 4 Days Crafting",
      image: "images/bouquet.jpg",
      localImagePath: "images/bouquet.jpg"
    },
    {
      id: "2",
      category: "scrapbooks",
      categoryName: "Scrapbooks",
      title: "Memory Scrapbooks",
      shortDesc: "Personalised memory scrapbooks filled with photos, messages, pop-up interactive folds and beautiful handmade artistic details.",
      fullDesc: "The ultimate sentimental heirloom. Each scrapbook page features handcrafted waterfall photo folds, secret message envelopes, pull-out journaling cards, and aesthetic washi stickers celebrating your most cherished milestones.",
      customisation: "Custom cover design with your names and anniversary/birthday date. Capacity options from 15 to 45 high-resolution printed photos. Includes your personal letters, inside jokes, and song lyric calligraphy.",
      turnaround: "4 - 6 Days Crafting",
      image: "images/scrapbook.jpg",
      localImagePath: "images/scrapbook.jpg"
    },
    {
      id: "3",
      category: "gift-boxes",
      categoryName: "Gift Boxes",
      title: "Curated Gift Boxes",
      shortDesc: "Curated handmade gift boxes created especially for your loved ones, finished with satin ribbons, wax seals, and surprise treasures.",
      fullDesc: "An unboxing experience crafted to take their breath away. Each rigid aesthetic gift box is lined with tissue paper and dried petals, sealed with a real vintage botanical wax seal, and filled with customized surprises.",
      customisation: "Select your box theme (Pastel Romance, Self-Care Sanctuary, Birthday Confetti), personalized handwritten wax-sealed letter, and select between 4 to 8 curated handcrafted goodies.",
      turnaround: "3 - 5 Days Crafting",
      image: "images/giftbox.jpg",
      localImagePath: "images/giftbox.jpg"
    },
    {
      id: "4",
      category: "ring-platters",
      categoryName: "Ring Platters",
      title: "Wedding Ring Platters",
      shortDesc: "Elegant personalised ring platters for weddings, engagements and special celebrations adorned with soft florals and couples' initials.",
      fullDesc: "Designed to be the centerpiece of your wedding or engagement ceremony. Created on clear acrylic, polished wood, or resin with preserved baby's breath flowers, satin ring cushions, and laser-engraved couple names.",
      customisation: "Couple initials/names with date engraving, customized flower color theme matching the bride and groom attire, choice between velvet cushions or acrylic ring slots.",
      turnaround: "5 - 7 Days Crafting",
      image: "images/ring-platter.jpg",
      localImagePath: "images/ring-platter.jpg"
    },
    {
      id: "5",
      category: "keychains",
      categoryName: "Keychains",
      title: "Custom Keychains",
      shortDesc: "Cute personalised keychains made specially for you with custom initials, pressed florals, Spotify song codes, or anniversary dates.",
      fullDesc: "Handcrafted resin and premium leather keychains designed to keep special memories in the palm of your hand every day. Made with durable, scratch-resistant materials with gold or rose-gold hardware.",
      customisation: "Choice of real pressed flowers inside crystal-clear resin, engraved coordinates, scannable Spotify song codes, or embossed monogram initial tags.",
      turnaround: "2 - 3 Days Crafting",
      image: "images/keychain.jpg",
      localImagePath: "images/keychain.jpg"
    },
    {
      id: "6",
      category: "wallets",
      categoryName: "Wallets",
      title: "Handmade Wallets",
      shortDesc: "Stylish handmade wallets that make thoughtful everyday gifts. Featuring clean artisan stitching and personalized monogram options.",
      fullDesc: "Carefully hand-stitched minimal wallets crafted for elegance and everyday utility. Designed with slim card slots, note compartments, and a timeless soft finish that ages beautifully.",
      customisation: "Custom name or initials stamped on the front or hidden inside fold. Choice of colors: Blush Tan, Classic Brown, Warm Ivory, or Dusty Rose.",
      turnaround: "3 - 4 Days Crafting",
      image: "images/wallet.jpg",
      localImagePath: "images/wallet.jpg"
    },
    {
      id: "7",
      category: "hampers",
      categoryName: "Hampers",
      title: "Luxury Gift Hampers",
      shortDesc: "Beautifully arranged gift hampers filled with carefully selected surprises, scented candles, treats, and personalized trinkets.",
      fullDesc: "The pinnacle of heartfelt luxury. Our hampers bring together handmade floral accents, hand-poured soy scented candles, personalized mugs or polaroids, gourmet artisanal sweets, and personalized message cards.",
      customisation: "Fully customizable product combination tailored to your budget and occasion. Custom ribbon foil-stamping with recipient's name available.",
      turnaround: "3 - 5 Days Crafting",
      image: "images/hamper.jpg",
      localImagePath: "images/hamper.jpg"
    },
    {
      id: "8",
      category: "polaroids",
      categoryName: "Polaroids",
      title: "Polaroid Keepsakes",
      shortDesc: "Turn your favourite memories into beautiful polaroid-style keepsakes, complete with fairy lights, mini wooden clips, and personalized quotes.",
      fullDesc: "Relive nostalgia in aesthetic vintage Polaroid style. Printed on heavy 300GSM gloss photo card with custom caption text, dates, Spotify codes, or heart emojis printed below each memory.",
      customisation: "Available in sets of 10, 20, or 30 Polaroids. Includes aesthetic mini wooden pegs, warm LED fairy lights string, and a ribbon-tied keepsake envelope.",
      turnaround: "1 - 2 Days Crafting",
      image: "images/polaroid.jpg",
      localImagePath: "images/polaroid.jpg"
    }
  ];

  /* ============================================================================
     3. PAGE LOADER INITIALIZATION
     ============================================================================ */
  const pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        pageLoader.classList.add('hidden');
      }, 350);
    });
    // Fallback in case window load event was already triggered
    setTimeout(() => {
      if (!pageLoader.classList.contains('hidden')) {
        pageLoader.classList.add('hidden');
      }
    }, 1200);
  }

  /* ============================================================================
     4. STICKY HEADER & ACTIVE NAV LINK ON SCROLL
     ============================================================================ */
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScrollState = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header shadow on scroll
    if (scrollY > 60) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 350) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Highlight active navigation link
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScrollState, { passive: true });
  handleScrollState(); // run once on page load

  // Back to top click handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ============================================================================
     5. MOBILE HAMBURGER MENU
     ============================================================================ */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMobileMenu = () => {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.setAttribute('aria-hidden', isExpanded);
  };

  const closeMobileMenu = () => {
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  };

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close when clicking any link inside mobile menu
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close when clicking outside header
    document.addEventListener('click', (event) => {
      if (!siteHeader.contains(event.target) && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  /* ============================================================================
     6. PRODUCT CATEGORY FILTERING (Dynamic with Smooth Animation)
     ============================================================================ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  const filterProducts = (filterCategory) => {
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      card.classList.remove('fade-in');

      if (filterCategory === 'all' || cardCategory === filterCategory) {
        card.classList.remove('hide');
        // Trigger small reflow to restart css animation cleanly
        void card.offsetWidth;
        card.classList.add('fade-in');
      } else {
        card.classList.add('hide');
      }
    });
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      filterProducts(filterVal);
    });
  });

  // Footer Category Links filtering support
  const footerFilterLinks = document.querySelectorAll('.footer-filter-link');
  footerFilterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCategory = link.getAttribute('data-category');
      
      // Update filter button state
      filterButtons.forEach(b => {
        if (b.getAttribute('data-filter') === targetCategory) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      filterProducts(targetCategory);

      // Scroll smoothly to collections section
      const collectionsSection = document.getElementById('collections');
      if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ============================================================================
     7. PRODUCT DETAILS MODAL (View Details)
     ============================================================================ */
  const productModal = document.getElementById('productModal');
  const closeProductModalBtn = document.getElementById('closeProductModalBtn');
  const modalProductImg = document.getElementById('modalProductImg');
  const modalProductCategory = document.getElementById('modalProductCategory');
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalProductDesc = document.getElementById('modalProductDesc');
  const modalProductCustomisation = document.getElementById('modalProductCustomisation');
  const modalProductTime = document.getElementById('modalProductTime');
  const modalEnquireBtn = document.getElementById('modalEnquireBtn');

  let currentActiveProduct = null;

  const openProductModal = (productId) => {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    currentActiveProduct = product;

    // Populate modal fields
    modalProductImg.src = product.image;
    modalProductImg.alt = product.title;
    modalProductCategory.textContent = product.categoryName;
    modalProductTitle.textContent = product.title;
    modalProductDesc.textContent = product.fullDesc;
    modalProductCustomisation.textContent = product.customisation;
    modalProductTime.textContent = product.turnaround;

    // Show modal
    productModal.classList.add('open');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProductModal = () => {
    if (!productModal) return;
    productModal.classList.remove('open');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach event listeners to all "View Details" buttons
  document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', () => {
      const pId = button.getAttribute('data-product-id');
      openProductModal(pId);
    });
  });

  if (closeProductModalBtn) {
    closeProductModalBtn.addEventListener('click', closeProductModal);
  }

  // Click outside to close
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }

  // WhatsApp enquire directly from modal
  if (modalEnquireBtn) {
    modalEnquireBtn.addEventListener('click', () => {
      if (!currentActiveProduct) return;
      const message = encodeURIComponent(`Hi Esther Eva! I'm interested in customising the *${currentActiveProduct.title}* from your website. Could you please share more details?`);
      const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  /* ============================================================================
     8. CUSTOM ORDER MODAL & FORM VALIDATION
     ============================================================================ */
  const customOrderModal = document.getElementById('customOrderModal');
  const closeCustomModalBtn = document.getElementById('closeCustomModalBtn');
  const customOrderForm = document.getElementById('customOrderForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  const directWhatsappLink = document.getElementById('directWhatsappLink');
  const productSelect = document.getElementById('productSelect');

  // Input elements
  const clientNameInput = document.getElementById('clientName');
  const clientEmailInput = document.getElementById('clientEmail');
  const clientPhoneInput = document.getElementById('clientPhone');
  const occasionSelect = document.getElementById('occasionSelect');
  const deliveryDateInput = document.getElementById('deliveryDate');
  const customMessageInput = document.getElementById('customMessage');

  // Set minimum date for delivery date picker to tomorrow
  if (deliveryDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    deliveryDateInput.min = tomorrowFormatted;
  }

  const openCustomModal = (prefillProduct = '') => {
    // Reset form errors & success states
    resetFormErrors();
    formSuccessAlert.style.display = 'none';
    customOrderForm.style.display = 'block';

    if (prefillProduct && productSelect) {
      // Find matching option
      for (let i = 0; i < productSelect.options.length; i++) {
        if (productSelect.options[i].value.toLowerCase().includes(prefillProduct.toLowerCase())) {
          productSelect.selectedIndex = i;
          break;
        }
      }
    }

    customOrderModal.classList.add('open');
    customOrderModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCustomModal = () => {
    if (!customOrderModal) return;
    customOrderModal.classList.remove('open');
    customOrderModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach triggers to all "Shop / Enquire Now" and custom buttons
  document.querySelectorAll('.open-custom-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeMobileMenu();
      openCustomModal();
    });
  });

  // Attach triggers to product card "Enquire Now" buttons
  document.querySelectorAll('.enquire-product-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prodName = btn.getAttribute('data-product-name');
      openCustomModal(prodName);
    });
  });

  if (closeCustomModalBtn) {
    closeCustomModalBtn.addEventListener('click', closeCustomModal);
  }

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', closeCustomModal);
  }

  if (customOrderModal) {
    customOrderModal.addEventListener('click', (e) => {
      if (e.target === customOrderModal) {
        closeCustomModal();
      }
    });
  }

  // Keyboard accessibility: ESC closes both modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCustomModal();
    }
  });

  // Form Validation Utilities
  const setError = (inputElement, errorElementId, message) => {
    inputElement.classList.add('input-error');
    const errSpan = document.getElementById(errorElementId);
    if (errSpan) errSpan.textContent = message;
  };

  const clearError = (inputElement, errorElementId) => {
    inputElement.classList.remove('input-error');
    const errSpan = document.getElementById(errorElementId);
    if (errSpan) errSpan.textContent = '';
  };

  const resetFormErrors = () => {
    const inputs = [clientNameInput, clientEmailInput, clientPhoneInput, productSelect, occasionSelect, deliveryDateInput, customMessageInput];
    inputs.forEach(input => {
      if (input) input.classList.remove('input-error');
    });
    const errSpans = document.querySelectorAll('.field-error-msg');
    errSpans.forEach(span => span.textContent = '');
  };

  // Realtime clear on typing
  clientNameInput?.addEventListener('input', () => clearError(clientNameInput, 'nameError'));
  clientEmailInput?.addEventListener('input', () => clearError(clientEmailInput, 'emailError'));
  clientPhoneInput?.addEventListener('input', () => clearError(clientPhoneInput, 'phoneError'));
  productSelect?.addEventListener('change', () => clearError(productSelect, 'productError'));
  occasionSelect?.addEventListener('change', () => clearError(occasionSelect, 'occasionError'));
  deliveryDateInput?.addEventListener('change', () => clearError(deliveryDateInput, 'dateError'));
  customMessageInput?.addEventListener('input', () => clearError(customMessageInput, 'messageError'));

  // Form submission handler
  if (customOrderForm) {
    customOrderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      resetFormErrors();

      let isValid = true;

      // 1. Name validation
      const nameVal = clientNameInput.value.trim();
      if (!nameVal) {
        setError(clientNameInput, 'nameError', 'Please enter your full name.');
        isValid = false;
      } else if (nameVal.length < 2) {
        setError(clientNameInput, 'nameError', 'Name must be at least 2 characters.');
        isValid = false;
      }

      // 2. Email validation
      const emailVal = clientEmailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal) {
        setError(clientEmailInput, 'emailError', 'Please enter your email address.');
        isValid = false;
      } else if (!emailRegex.test(emailVal)) {
        setError(clientEmailInput, 'emailError', 'Please enter a valid email address.');
        isValid = false;
      }

      // 3. Phone validation
      const phoneVal = clientPhoneInput.value.trim();
      const digitsOnly = phoneVal.replace(/\D/g, '');
      if (!phoneVal) {
        setError(clientPhoneInput, 'phoneError', 'Please enter your WhatsApp / phone number.');
        isValid = false;
      } else if (digitsOnly.length < 10) {
        setError(clientPhoneInput, 'phoneError', 'Please enter a valid phone number (at least 10 digits).');
        isValid = false;
      }

      // 4. Product Select
      const productVal = productSelect.value;
      if (!productVal) {
        setError(productSelect, 'productError', 'Please select a handmade gift category.');
        isValid = false;
      }

      // 5. Occasion Select
      const occasionVal = occasionSelect.value;
      if (!occasionVal) {
        setError(occasionSelect, 'occasionError', 'Please select an occasion.');
        isValid = false;
      }

      // 6. Delivery Date
      const dateVal = deliveryDateInput.value;
      if (!dateVal) {
        setError(deliveryDateInput, 'dateError', 'Please choose your needed date.');
        isValid = false;
      }

      // 7. Message Details
      const msgVal = customMessageInput.value.trim();
      if (!msgVal) {
        setError(customMessageInput, 'messageError', 'Please tell us your customisation ideas and details.');
        isValid = false;
      } else if (msgVal.length < 8) {
        setError(customMessageInput, 'messageError', 'Please provide a bit more detail (at least 8 characters).');
        isValid = false;
      }

      if (!isValid) return;

      // Construct a ready-to-send WhatsApp message link
      const whatsappMsg = `Hello Esther Eva! ✨
I've submitted a custom gift request:
- *Name:* ${nameVal}
- *Product:* ${productVal}
- *Occasion:* ${occasionVal}
- *Needed Date:* ${dateVal}
- *Details:* ${msgVal}

Looking forward to your guidance!`;

      const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;
      if (directWhatsappLink) {
        directWhatsappLink.href = whatsappUrl;
      }

      // Display Friendly Success Screen
      customOrderForm.style.display = 'none';
      formSuccessAlert.style.display = 'block';

      showToast(`Thank you, ${nameVal}! Your custom order request has been received.`, 'success');
      customOrderForm.reset();
    });
  }

  /* ============================================================================
     9. TESTIMONIALS SLIDER / CAROUSEL
     ============================================================================ */
  const testimonialTrack = document.getElementById('testimonialTrack');
  const prevReviewBtn = document.getElementById('prevReviewBtn');
  const nextReviewBtn = document.getElementById('nextReviewBtn');
  const carouselDots = document.querySelectorAll('.carousel-dots .dot');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');

  let currentSlideIndex = 0;
  const totalSlides = testimonialSlides.length;
  let autoplayTimer = null;

  const updateCarousel = (index) => {
    currentSlideIndex = (index + totalSlides) % totalSlides;
    
    if (testimonialTrack) {
      testimonialTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    carouselDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlideIndex);
    });
  };

  const nextSlide = () => updateCarousel(currentSlideIndex + 1);
  const prevSlide = () => updateCarousel(currentSlideIndex - 1);

  if (nextReviewBtn) nextReviewBtn.addEventListener('click', nextSlide);
  if (prevReviewBtn) prevReviewBtn.addEventListener('click', prevSlide);

  carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
      updateCarousel(targetIdx);
    });
  });

  // Autoplay functionality with pause on hover
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 5500);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) clearInterval(autoplayTimer);
  };

  const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);
    carouselWrapper.addEventListener('touchstart', stopAutoplay, { passive: true });
    carouselWrapper.addEventListener('touchend', startAutoplay);
    startAutoplay();
  }

  /* ============================================================================
     10. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
     ============================================================================ */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  /* ============================================================================
     11. TOAST NOTIFICATION HELPER
     ============================================================================ */
  function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-heart';
    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  /* ============================================================================
     12. FOOTER NEWSLETTER SUBSCRIPTION FORM
     ============================================================================ */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterMsg = document.getElementById('newsletterMsg');

  if (newsletterForm && newsletterEmail && newsletterMsg) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        newsletterMsg.style.color = '#ff9999';
        newsletterMsg.textContent = 'Please enter a valid email address.';
        return;
      }

      newsletterMsg.style.color = 'var(--color-rose-light)';
      newsletterMsg.textContent = 'Welcome to the Esther Eva VIP list! ✨';
      showToast('Thank you for subscribing to Esther Eva newsletters!', 'success');
      newsletterForm.reset();

      setTimeout(() => {
        newsletterMsg.textContent = '';
      }, 5000);
    });
  }

  /* ============================================================================
     13. IMAGE FALLBACK ERROR HANDLING
     In case any image fails to load or local path is missing, gracefully display
     an aesthetic SVG placeholder.
     ============================================================================ */
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => {
    img.addEventListener('error', () => {
      // Create a fallback pastel svg placeholder
      img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23F9ECE6'/%3E%3Ctext x='50%25' y='46%25' dominant-baseline='middle' text-anchor='middle' font-family='Georgia, serif' font-size='26' fill='%23B85D56'%3EEsther Eva Handmade%3C/text%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239E7D6A'%3EHandmade with Love%3C/text%3E%3C/svg%3E";
    });
  });

  console.log(`🌸 Esther Eva Handmade website loaded successfully.`);
});

