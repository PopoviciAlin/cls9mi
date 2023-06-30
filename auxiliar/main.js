// Function to toggle between dark and light themes
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
      const titleElement = document.getElementById('title');
      titleElement.classList.add('custom-transition');
    }, 100);
  }
  
  // Function to load the user preference from local storage
  function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      applyTheme(theme);
    }
  }
  
  // Load the user preference on page load
  loadTheme();
  
  // Add event listener to the theme toggle button
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  