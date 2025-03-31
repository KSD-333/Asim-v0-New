// Main JavaScript file

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && closeMenu && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      
      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }
  
  // Tab functionality for contact page
  // Tab functionality for contact page
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (tabButtons.length && tabPanes.length) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Update active button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show selected tab pane
        tabPanes.forEach(pane => {
          if (pane.id === `${tabId}Tab`) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
  }
}
  
  // Form submission handling
  function initForms() {
    const contactForm = document.getElementById('contactForm');
    const feedbackForm = document.getElementById('feedbackForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
          showToast('Your message has been sent successfully!');
          contactForm.reset();
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 1500);
      });
    }
    
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitButton = feedbackForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        setTimeout(() => {
          showToast('Thank you for your feedback!');
          feedbackForm.reset();
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }, 1500);
      });
    }
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
  
  // Set current year in footer
  function setCurrentYear() {
    const yearElements = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
      element.textContent = currentYear;
    });
  }
  
  // Initialize all functionality when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTabs();
    initForms();
    setCurrentYear();
  });