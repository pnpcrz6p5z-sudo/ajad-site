// Script pour le site AJAD
document.addEventListener('DOMContentLoaded', function() {
    // Animation simple pour les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Gestion du bouton d'inscription
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Merci pour votre intérêt ! Nous vous contacterons bientôt.');
        });
    });
});