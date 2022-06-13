document.addEventListener('click', (e) => {
  const isDropdowButton = e.target.matches('[data-dropdown-button]');

  if (!isDropdowButton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;

  if (isDropdowButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});
