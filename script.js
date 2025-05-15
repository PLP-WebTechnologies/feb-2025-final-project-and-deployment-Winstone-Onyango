// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showResponse('Please fill in all fields.', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showResponse('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            setTimeout(() => {
                contactForm.reset();
                showResponse('Thank you for your message! I will get back to you soon.', 'success');
            }, 1000);
        });
    }
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Show response message
    function showResponse(message, type) {
        formResponse.textContent = message;
        formResponse.className = type;
        formResponse.classList.remove('hidden');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formResponse.classList.add('hidden');
        }, 5000);
    }
    
    // Mobile menu toggle (could be added if needed)
    // ...
});