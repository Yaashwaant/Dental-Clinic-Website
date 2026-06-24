// Dental Republic Landing Page Logic & Micro-interactions

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Navigation Item Selection Toggle & Smooth Scroll Routing
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Don't prevent default if it's the Services dropdown trigger, just let hover handle it
      if (item.id === 'nav-services') {
        e.preventDefault();
        return;
      }
      
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Route smooth scrolling based on link ID
      if (item.id === 'nav-home') {
        document.querySelector('.header').scrollIntoView({ behavior: 'smooth' });
      } else if (item.id === 'nav-doctors') {
        const docCard = document.getElementById('card-doctors');
        if (docCard) docCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (item.id === 'nav-about') {
        const priorityBadge = document.querySelector('.priority-badge');
        if (priorityBadge) priorityBadge.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (item.id === 'nav-testimonials') {
        const patients = document.querySelector('.patients-collage-container');
        if (patients) patients.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (item.id === 'nav-contact') {
        openBookingModal();
      }
    });
  });
  
  
  // 3. Modal Opening and Closing Logic
  const modal = document.getElementById('booking-modal');
  const appointmentForm = document.getElementById('appointment-form');
  const successScreen = document.getElementById('modal-success');
  const serviceSelect = document.getElementById('service-type');
  
  const openModalBtns = [
    document.getElementById('header-book-btn'),
    document.getElementById('hero-book-btn')
  ];
  
  const closeModalBtns = [
    document.getElementById('modal-close-btn'),
    document.getElementById('success-done-btn')
  ];
  
  function openBookingModal(defaultServiceValue = '') {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scrolling
    
    // Pre-select service if passed
    if (defaultServiceValue) {
      serviceSelect.value = defaultServiceValue;
    } else {
      serviceSelect.value = '';
    }
    
    // Set minimum date to today
    const dateInput = document.getElementById('appointment-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
  
  function closeBookingModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Small timeout to reset form view after modal fade transition completes
    setTimeout(() => {
      appointmentForm.style.display = 'flex';
      successScreen.classList.remove('active');
      appointmentForm.reset();
    }, 300);
  }
  
  openModalBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => openBookingModal());
    }
  });
  
  closeModalBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', closeBookingModal);
    }
  });
  
  // Close modal when clicking on the backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBookingModal();
    }
  });
  
  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeBookingModal();
    }
  });
  
  
  // 4. Connect Bottom Service Columns to Pre-selected Modal Triggers
  const serviceMapping = {
    'service-general': 'general',
    'service-cosmetic': 'cosmetic',
    'service-orthodontics': 'orthodontics',
    'service-implant': 'implant'
  };
  
  Object.keys(serviceMapping).forEach(colId => {
    const colElement = document.getElementById(colId);
    if (colElement) {
      colElement.addEventListener('click', () => {
        const targetService = serviceMapping[colId];
        openBookingModal(targetService);
      });
    }
  });
  
  
  // 5. Booking Form Submission & Confirmation Display
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('patient-name').value;
      const email = document.getElementById('patient-email').value;
      const dateVal = document.getElementById('appointment-date').value;
      const timeVal = document.getElementById('appointment-time').value;
      const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
      
      // Format the date nicely (e.g. June 18, 2026)
      const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Date(dateVal).toLocaleDateString(undefined, dateOptions);
      
      // Format 24h time to 12h format with AM/PM
      let [hours, minutes] = timeVal.split(':');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // hour '0' should be '12'
      const formattedTime = `${hours}:${minutes} ${ampm}`;
      
      // Populate success content
      document.getElementById('summary-name').textContent = name;
      document.getElementById('summary-service').textContent = serviceText;
      document.getElementById('summary-date').textContent = formattedDate;
      document.getElementById('summary-time').textContent = formattedTime;
      document.getElementById('summary-email').textContent = email;
      
      // Swap form and success screen with smooth animation
      appointmentForm.style.display = 'none';
      successScreen.classList.add('active');
    });
  }
  
  // Hook up Hero Explore Services button to smooth scroll down / bounce bottom ribbon
  const exploreBtn = document.getElementById('hero-explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const servicesSection = document.querySelector('.services-ribbon');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
        
        // Bounce animation effect to draw attention
        servicesSection.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          servicesSection.style.transform = 'translateY(0)';
        }, 300);
      }
    });
  }
  
});
