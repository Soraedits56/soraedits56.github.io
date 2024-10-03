// Example for toggling menu in small screens (if you decide to implement a mobile menu)
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav');
});