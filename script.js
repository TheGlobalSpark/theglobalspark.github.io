document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const ctaButton = document.querySelector('.cta-button');

    // Navigation functionality
    function showPage(targetPage) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPageElement = document.querySelector(`.page[data-page="${targetPage}"]`);
        if (targetPageElement) {
            targetPageElement.classList.add('active');
        }

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`.nav-link[data-page="${targetPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            showPage(targetPage);
        });
    });

    // CTA button functionality
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-target');
            showPage(targetPage);
        });
    }

    // Set home as active by default
    showPage('home');
});
