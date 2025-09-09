
        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {

e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Simple form validation
        const contactForm = document.querySelector('.contact-form form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            });
        }
        
        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'white';
                header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }

        });
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile burger menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', function() {
                    navLinks.classList.toggle('open');
                });
                // Close menu when a link is clicked (use event delegation)
                navLinks.addEventListener('click', function(e) {
                    if (e.target.tagName.toLowerCase() === 'a') {
                        navLinks.classList.remove('open');
                    }
                });
            }

            // Fix client marquee: No JS generation, just ensure animation duration adapts
            const marquee = document.querySelector('.marquee');
            if (marquee) {
                const setDuration = () => {
                    const width = window.innerWidth;
                    if (width <= 480) marquee.style.animationDuration = '15s';
                    else if (width <= 768) marquee.style.animationDuration = '20s';
                    else marquee.style.animationDuration = '30s';
                };
                setDuration();
                window.addEventListener('resize', setDuration);
            }
        });