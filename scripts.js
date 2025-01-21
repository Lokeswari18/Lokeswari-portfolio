document.addEventListener('DOMContentLoaded', function () {
    // Select all sections with the class 'fade-in'
    const sections = document.querySelectorAll('.fade-in');

    // Function to check visibility of sections
    function checkVisibility() {
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 150) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Call the checkVisibility function on scroll and resize
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial call to check visibility on page load
    checkVisibility();
});
