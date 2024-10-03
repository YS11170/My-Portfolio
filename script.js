const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const darkMode = localStorage.getItem('dark-mode');

// Initialize theme based on local storage
if (darkMode === 'enabled') {
    body.classList.add('dark');
    themeToggle.innerText = '☀️'; // Change button icon to sun in dark mode
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark'); // Toggle dark class

    // Update the local storage and button icon based on the current theme
    if (body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'enabled'); // Save dark mode preference
        themeToggle.innerText = '☀️'; // Change icon to sun
    } else {
        localStorage.setItem('dark-mode', 'disabled'); // Save light mode preference
        themeToggle.innerText = '🌙'; // Change icon to moon
    }
});
