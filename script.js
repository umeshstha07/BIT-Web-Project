
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

   
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

        
            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill in all fields.';
                formStatus.className = 'status-message error';
                return;
            }

            
            formStatus.textContent = 'Sending...';
            formStatus.className = 'status-message';

            setTimeout(() => {
                formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
                formStatus.className = 'status-message success';
                contactForm.reset(); // Clear the form
            }, 1500);
        });
    }
});