// Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

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
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:asmitshrestha24@gmail.com
            ?cc=${encodeURIComponent(email)}
            &subject=${encodeURIComponent(subject)}
            &body=${encodeURIComponent(
            `You have received a new contact form message:\n\n` +
            `-------------------------\n` +
            `👤 Name: ${name}\n` +
            `📧 Email: ${email}\n` +
            `-------------------------\n\n` +
            `💬 Message:\n${message}\n\n` +
            `-------------------------\n` +
            `This message was sent from your portfolio website contact form.`
            )}`;

            
            // Open email client
            window.location.href = mailtoLink;
            
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