/**
 * Floxtop Website - Main JavaScript
 * All interactive functionality for the homepage
 */

// Whats new stacking cards - sync heights
function syncCardHeights() {
    const mainCard = document.querySelector('.main-card');
    const bg1 = document.querySelector('.bg-card-1');
    const bg2 = document.querySelector('.bg-card-2');

    if (mainCard && bg1 && bg2) {
        const height = mainCard.offsetHeight; // dynamic height
        bg1.style.height = height + 'px';
        bg2.style.height = height + 'px';
    }
}

window.addEventListener('load', syncCardHeights);
window.addEventListener('resize', syncCardHeights);

// Email validation and download button functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const downloadBtn = document.getElementById('downloadBtn');
    const invalidFeedback = document.querySelector('.invalid-feedback');

    if (!emailInput || !downloadBtn || !invalidFeedback) {
        console.warn('Email validation skipped: required elements not found.');
        return; // stop execution
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail() {
        const email = emailInput.value.trim();
        const isValid = emailRegex.test(email);

        if (email === '') {
            // Empty field - reset state
            emailInput.classList.remove('is-invalid');
            downloadBtn.disabled = true;
            invalidFeedback.style.display = 'none';
        } else if (isValid) {
            // Valid email
            emailInput.classList.remove('is-invalid');
            downloadBtn.disabled = false;
            invalidFeedback.style.display = 'none';
        } else {
            // Invalid email
            emailInput.classList.add('is-invalid');
            downloadBtn.disabled = true;
            invalidFeedback.style.display = 'block';
        }
    }

    // Real-time validation
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
});

// Category button selection
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.onclick = function() {
            // Remove active class from all buttons
            document.querySelectorAll('.category-button').forEach(b => {
                b.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            document.getElementById('selectedCategory').textContent = this.dataset.category;
        };
    });

    // Plus button click
    const plusButton = document.getElementById('plusButton');
    if (plusButton) {
        plusButton.onclick = function() {
            document.querySelectorAll('.category-button').forEach(b => {
                b.classList.remove('active');
            });
            document.getElementById('selectedCategory').textContent = 'Choose Other Folder';
        };
    }
});

// Close navbar collapse when clicking outside
document.addEventListener('click', function(event) {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Check if navbar collapse exists and is shown
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Check if click is outside both the navbar collapse and the toggler button
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            // Programmatically click the toggler button to close
            navbarToggler.click();
        }
    }
});
