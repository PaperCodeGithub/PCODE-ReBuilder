document.addEventListener('DOMContentLoaded', function() {
        // Animate template-content texts (slide from left)
        const contents = document.querySelectorAll('.template-content');
        const contentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                    contentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        contents.forEach(content => contentObserver.observe(content));

        // Animate template cards (popup one by one, slower)
        const allCards = document.querySelectorAll('.template-card');
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Find all cards in this .template-content
                    const cards = Array.from(entry.target.parentNode.querySelectorAll('.template-card'));
                    // Animate cards one by one, slower interval
                    cards.forEach((card, idx) => {
                        setTimeout(() => card.classList.add('visible'), idx * 300);
                    });
                    // Unobserve all cards in this group
                    cards.forEach(card => cardObserver.unobserve(card));
                }
            });
        }, { threshold: 0.3 });

        // Observe only the first card in each group to trigger the group animation
        document.querySelectorAll('.template-content').forEach(content => {
            const firstCard = content.querySelector('.template-card');
            if (firstCard) cardObserver.observe(firstCard);
        });
    });