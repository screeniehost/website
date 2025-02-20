$(document).ready(function() {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);

    $('.theme-controller').prop('checked', savedTheme === 'dark');
    $('.theme-controller').change(function() {
        const selectedTheme = $(this).is(':checked') ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme); 
    });

    fetch('https://api.github.com/repos/screeniehost/screenie')
        .then(response => response.json())
        .then(data => {
            const stargazersCount = data.stargazers_count;
            $('.stargazers').text(stargazersCount);
        })
        .catch(error => console.error('Error fetching stargazers count:', error));

    const currentYear = new Date().getFullYear();
    $('.currentYear').text(currentYear);
});

// animations
ScrollReveal({ distance: '15px', reset: true });
ScrollReveal().reveal('.navbar', { delay: 100, duration: 500, origin: 'top' });
ScrollReveal().reveal('#hero-image', { delay: 400, duration: 500, origin: 'right' });
ScrollReveal().reveal('#hero-text', { delay: 700, duration: 800, origin: 'left' });
ScrollReveal().reveal('#install', { delay: 300, duration: 500, scale: 0 });
ScrollReveal().reveal('.footer', { delay: 100, duration: 500, origin: 'bottom' });