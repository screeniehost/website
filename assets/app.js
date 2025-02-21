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

const scrollRevealConfigs = [
    { selector: '.navbar', options: { delay: 100, duration: 500, origin: 'top' } },
    { selector: '#hero-image', options: { delay: 400, duration: 500, origin: 'right' } },
    { selector: '#hero-text', options: { delay: 700, duration: 800, origin: 'left' } },
    { selector: '#mockup-image', options: { delay: 400, duration: 500, scale: 0.2 } },
    { selector: '#mockup-text', options: { delay: 700, duration: 1200, origin: 'right' } },
    { selector: '#install', options: { delay: 300, duration: 500, scale: 0 } },
    { selector: '#discord', options: { delay: 300, duration: 500, origin: 'bottom' } },
    { selector: '#macbook_mockup_discord', options: { delay: 800, duration: 500 } },
    { selector: '.footer', options: { delay: 100, duration: 500, origin: 'bottom' } }
];

scrollRevealConfigs.forEach(config => {
    ScrollReveal().reveal(config.selector, config.options);
});