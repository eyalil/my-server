// Pick the starting theme: the visitor's saved choice, or their system setting.
// This runs in <head> so the page never flashes the wrong theme.
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
document.documentElement.dataset.theme = savedTheme || systemTheme;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.theme-toggle');

  function updateButton() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    button.textContent = isDark ? '☀️' : '🌙';
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  button.addEventListener('click', () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateButton();
  });

  updateButton();
});
