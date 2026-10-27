/**
 * TravelVista – Main JavaScript Module
 * Handles sample datasets, interactive searches, filters, modal popups, and UI state.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Dummy Datasets
  // ==========================================

  const destinations = [
    {
      id: 'd1',
      title: 'Dubai Desert & Luxury Stay',
      location: 'Dubai, UAE',
      category: 'Middle East',
      price: 45000,
      rating: 4.8,
      reviewsCount: 124,
      days: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      badge: 'Bestseller',
      tag: 'Luxury'
    },
    {
      id: 'd2',
      title: 'Bali Island Retreat & Villas',
      location: 'Bali, Indonesia',
      category: 'Beach',
      price: 38000,
      rating: 4.9,
      reviewsCount: 210,
      days: '6 Days / 5 Nights',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      badge: 'Popular',
      tag: 'Tropical'
    },
    {
      id: 'd3',
      title: 'Romantic Paris & Seine Cruise',
      location: 'Paris, France',
      category: 'Europe',
      price: 75000,
      rating: 4.7,
      reviewsCount: 98,
      days: '7 Days / 6 Nights',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      badge: 'Romantic',
      tag: 'Culture'
    },
    {
      id: 'd4',
      title: 'Overwater Bungalow Resort',
      location: 'Maldives',
      category: 'Beach',
      price: 55000,
      rating: 4.9,
      reviewsCount: 175,
      days: '4 Days / 3 Nights',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
      badge: 'Top Rated',
      tag: 'Honeymoon'
    },
    {
      id: 'd5',
      title: 'Bangkok City & Temple Highlights',
      location: 'Bangkok, Thailand',
      category: 'Asia',
      price: 25000,
      rating: 4.6,
      reviewsCount: 310,
      days: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
      badge: 'Budget Friendly',
      tag: 'Adventure'
    },
    {
      id: 'd6',
      title: 'Swiss Alps Glacier Express',
      location: 'Switzerland',
      category: 'Europe',
      price: 90000,
      rating: 5.0,
      reviewsCount: 88,
      days: '8 Days / 7 Nights',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      badge: 'Exclusive',
      tag: 'Nature'
    }
  ];

  const packages = [
    {
      id: 'p1',
      title: 'Golden Triangle Explorer',
      location: 'Delhi - Agra - Jaipur',
      hotel: 'Oberoi Trident 5-Star',
      price: 32000,
      rating: 4.8,
      days: '6 Days',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p2',
      title: 'Tokyo Cherry Blossom Special',
      location: 'Tokyo & Kyoto, Japan',
      hotel: 'Shinjuku Prince Hotel',
      price: 82000,
      rating: 4.9,
      days: '7 Days',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'p3',
      title: 'Greek Islands & Santorini Sunset',
      location: 'Santorini, Greece',
      hotel: 'Caldera Cliff Suites',
      price: 88000,
      rating: 4.9,
      days: '6 Days',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const reviews = [
    {
      id: 'r1',
      name: 'Aarav Sharma',
      role: 'Frequent Explorer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      text: 'Booking our Dubai trip through TravelVista was totally seamless! The resort recommendation was outstanding and saved us ₹10,000.',
      stars: 5
    },
    {
      id: 'r2',
      name: 'Sophia Reynolds',
      role: 'Solo Traveler',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      text: 'The Swiss Alps package was extraordinarily curated. Excellent itinerary, verified hotels, and seamless local transport guides!',
      stars: 5
    },
    {
      id: 'r3',
      name: 'Vikram & Priya Patel',
      role: 'Honeymooners',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      text: 'Our Maldives water bungalow booking exceeded all expectations. 24/7 concierge support helped us with instant flight updates too.',
      stars: 5
    }
  ];

  // ==========================================
  // 2. DOM Elements Selection
  // ==========================================

  const destinationsGrid = document.getElementById('destinations-grid');
  const packagesGrid = document.getElementById('packages-grid');
  const reviewsGrid = document.getElementById('reviews-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-destination');
  const noResults = document.getElementById('no-results');
  const resetSearchBtn = document.getElementById('reset-search-btn');

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  const bookingModal = document.getElementById('booking-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  const modalConfirmBtn = document.getElementById('modal-confirm-btn');
  const modalBodyContent = document.getElementById('modal-body-content');

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterMsg = document.getElementById('newsletter-message');

  // Set default dates for search input
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');
  
  if (checkInInput && checkOutInput) {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    
    checkInInput.value = today.toISOString().split('T')[0];
    checkOutInput.value = nextWeek.toISOString().split('T')[0];
  }

  // ==========================================
  // 3. Render Functions
  // ==========================================

  // Format currency into Indian Rupees
  function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  }

  // Render Destination Cards
  function renderDestinations(items) {
    destinationsGrid.innerHTML = '';

    if (items.length === 0) {
      noResults.classList.remove('hidden');
      return;
    }

    noResults.classList.add('hidden');

    items.forEach(dest => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${dest.image}" alt="${dest.title}" class="card-img" loading="lazy">
          <span class="card-badge">${dest.badge}</span>
          <span class="card-tag">${dest.tag}</span>
        </div>
        <div class="card-body">
          <span class="card-location"><i class="fa-solid fa-location-dot"></i> ${dest.location}</span>
          <h3 class="card-title">${dest.title}</h3>
          <div class="card-rating">
            <i class="fa-solid fa-star"></i>
            <span><strong>${dest.rating}</strong> (${dest.reviewsCount} reviews)</span>
          </div>
          <div class="card-info">
            <span><i class="fa-solid fa-clock"></i> ${dest.days}</span>
            <span><i class="fa-solid fa-shield-halved"></i> Inclusive</span>
          </div>
          <div class="card-price-row">
            <div>
              <span class="card-price-label">Starting from</span>
              <span class="card-price">${formatINR(dest.price)}</span>
            </div>
            <button class="btn btn-primary book-btn" data-id="${dest.id}" data-type="destination">Book Now</button>
          </div>
        </div>
      `;
      destinationsGrid.appendChild(card);
    });

    attachBookingEvents();
  }

  // Render Tour Packages
  function renderPackages() {
    packagesGrid.innerHTML = '';
    packages.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${pkg.image}" alt="${pkg.title}" class="card-img" loading="lazy">
          <span class="card-badge">Package</span>
        </div>
        <div class="card-body">
          <span class="card-location"><i class="fa-solid fa-map-pin"></i> ${pkg.location}</span>
          <h3 class="card-title">${pkg.title}</h3>
          <div class="card-rating">
            <i class="fa-solid fa-hotel"></i> ${pkg.hotel}
          </div>
          <div class="card-info">
            <span><i class="fa-solid fa-clock"></i> ${pkg.days}</span>
            <span><i class="fa-solid fa-star"></i> ${pkg.rating} Star</span>
          </div>
          <div class="card-price-row">
            <div>
              <span class="card-price-label">Package Cost</span>
              <span class="card-price">${formatINR(pkg.price)}</span>
            </div>
            <button class="btn btn-orange book-btn" data-id="${pkg.id}" data-type="package">View Details</button>
          </div>
        </div>
      `;
      packagesGrid.appendChild(card);
    });
  }

  // Render Reviews
  function renderReviews() {
    reviewsGrid.innerHTML = '';
    reviews.forEach(rev => {
      const starsHTML = '<i class="fa-solid fa-star"></i>'.repeat(rev.stars);
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <div>
          <div class="review-stars">${starsHTML}</div>
          <p class="review-quote">"${rev.text}"</p>
        </div>
        <div class="reviewer">
          <img src="${rev.avatar}" alt="${rev.name}" class="reviewer-avatar">
          <div class="reviewer-info">
            <h5>${rev.name}</h5>
            <span>${rev.role}</span>
          </div>
        </div>
      `;
      reviewsGrid.appendChild(card);
    });
  }

  // ==========================================
  // 4. Interactive Filters & Search
  // ==========================================

  function filterDestinations() {
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const query = searchInput.value.toLowerCase().trim();

    let filtered = destinations.filter(dest => {
      const matchesSearch = dest.title.toLowerCase().includes(query) || 
                            dest.location.toLowerCase().includes(query) || 
                            dest.category.toLowerCase().includes(query);

      let matchesCategory = true;
      if (activeCategory === 'Budget') {
        matchesCategory = dest.price <= 50000;
      } else if (activeCategory !== 'all') {
        matchesCategory = dest.category === activeCategory;
      }

      return matchesSearch && matchesCategory;
    });

    renderDestinations(filtered);
  }

  // Filter Buttons Event Listener
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterDestinations();
    });
  });

  // Search Form Submit Handler
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterDestinations();
    
    // Smooth scroll to results
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
  });

  // Reset Search
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      filterBtns.forEach(b => b.classList.remove('active'));
      filterBtns[0].classList.add('active'); // set "All" active
      renderDestinations(destinations);
    });
  }

  // ==========================================
  // 5. Booking Modal Logic
  // ==========================================

  function attachBookingEvents() {
    const bookBtns = document.querySelectorAll('.book-btn');
    bookBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const type = e.target.getAttribute('data-type');
        openBookingModal(id, type);
      });
    });
  }

  function openBookingModal(id, type) {
    let selectedItem;
    if (type === 'package') {
      selectedItem = packages.find(p => p.id === id);
    } else {
      selectedItem = destinations.find(d => d.id === id);
    }

    if (!selectedItem) return;

    const checkIn = checkInInput.value || 'Not selected';
    const checkOut = checkOutInput.value || 'Not selected';
    const travellers = document.getElementById('guests').value || '2';

    modalBodyContent.innerHTML = `
      <div class="modal-detail-row">
        <span>Destination / Package:</span>
        <strong>${selectedItem.title}</strong>
      </div>
      <div class="modal-detail-row">
        <span>Location:</span>
        <span>${selectedItem.location}</span>
      </div>
      <div class="modal-detail-row">
        <span>Check-in Date:</span>
        <span>${checkIn}</span>
      </div>
      <div class="modal-detail-row">
        <span>Check-out Date:</span>
        <span>${checkOut}</span>
      </div>
      <div class="modal-detail-row">
        <span>Travellers:</span>
        <span>${travellers} Person(s)</span>
      </div>
      <div class="modal-detail-row">
        <span>Estimated Cost:</span>
        <strong>${formatINR(selectedItem.price)} / person</strong>
      </div>
    `;

    bookingModal.classList.remove('hidden');
  }

  function closeModal() {
    bookingModal.classList.add('hidden');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);
  if (modalConfirmBtn) {
    modalConfirmBtn.addEventListener('click', () => {
      alert('Demo Booking Confirmed! Thank you for exploring TravelVista.');
      closeModal();
    });
  }

  // Close modal when clicking dark backdrop
  window.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      closeModal();
    }
  });

  // ==========================================
  // 6. Navigation & Mobile Menu
  // ==========================================

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Close nav on menu item click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Highlight active link on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        const currentId = section.getAttribute('id');
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // ==========================================
  // 7. Newsletter Form Handling
  // ==========================================

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (email) {
        newsletterMsg.textContent = '🎉 Thank you for subscribing! Check your inbox soon.';
        newsletterMsg.className = 'form-feedback success';
        newsletterEmail.value = '';
        setTimeout(() => {
          newsletterMsg.textContent = '';
        }, 5000);
      }
    });
  }

  // Initialize Default Views
  renderDestinations(destinations);
  renderPackages();
  renderReviews();

});
