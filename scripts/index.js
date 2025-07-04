document.addEventListener("DOMContentLoaded", function() {
    const rebuilderUse = document.querySelector('.rebuilder_use');
    const steps = rebuilderUse.querySelectorAll('ol li');
    function handleScroll() {
        const rect = rebuilderUse.getBoundingClientRect();
         if (rect.top < window.innerHeight - 100) {
            rebuilderUse.classList.add('visible');
            steps.forEach((li, i) => {
                setTimeout(() => {
                    li.style.opacity = '1';
                    li.style.transform = 'translateX(0)';
                }, i * 200);
            });
            window.removeEventListener('scroll', handleScroll);
        }
    }
        // Set initial state for li elements
    steps.forEach(li => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-50px)';
    });
    window.addEventListener('scroll', handleScroll);
       handleScroll();
});

const get_started_btn = document.getElementById('get_started');

get_started_btn.addEventListener('click', function() {
    window.location.href = 'templates.html';
});