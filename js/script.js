// Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

        // Initialize EmailJS with your public key
        emailjs.init("YOUR_PUBLIC_KEY");

        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would use EmailJS to send the form data
            // For demonstration, we'll show a success message
            
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for your message. I will get back to you soon!',
                icon: 'success',
                confirmButtonColor: '#6c63ff'
            }).then(() => {
                document.getElementById('contactForm').reset();
            });
        });

        // Download Resume button
        document.getElementById('downloadResume').addEventListener('click', function(e) {
            e.preventDefault();
            
            Swal.fire({
                title: 'Download Resume',
                text: 'Your resume download will start shortly',
                icon: 'info',
                confirmButtonColor: '#6c63ff',
                timer: 2000,
                showConfirmButton: false
            });
            
            // download resume pdf file
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'resume/asmit_resume.pdf';
                link.download = 'Asmit_Resume.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 2000);
        });