    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Si querés que solo se anime una vez:
            observer.unobserve(entry.target);
        }
        });
    }, { threshold: 0.2 }); // 20% visible

    elements.forEach(el => observer.observe(el));