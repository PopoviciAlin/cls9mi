window.addEventListener('load', function() {
  // Check if user has set a theme preference before
  var theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    setTheme('dark');
  } else if (theme === 'light') {
    setTheme('light');
  }

  // Add event listener to the button
  var button = document.querySelector('#subsol button');
  button.addEventListener('click', toggleTheme);
});

function setTheme(theme) {
  var themeLink = document.querySelector('#theme');
  themeLink.setAttribute('href', 'auxiliar/css/' + theme + '.css');
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  var currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}
