function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
}

// Function to apply the selected theme
function applyTheme(theme) {
    const themeLink = document.getElementById('theme');
    themeLink.href = `auxiliar/${theme}.css`;
    localStorage.setItem('theme', theme);

    // Add the custom-transition class after a small delay
    setTimeout(function() {
        const titleElement = document.getElementById('titlu');
        titleElement.classList.add('custom-transition');

        // Update the text within the paragraph based on the selected theme
        const themeText = document.getElementById('theme-text');
        if (theme === 'light') {
            themeText.textContent = 'Întunecată';
        } else {
            themeText.textContent = 'Luminoasă';
        }
    }, 100);
}

// Function to load the user preference from local storage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}

// Load the theme on initial page load
loadTheme();