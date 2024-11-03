// Load header content
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Initialize navigation functionality after loading header
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const section = link.getAttribute('href').substring(1);
                showSection(section);
                toggleMenu(); // Ensure menu closes after click in mobile view
            });
        });
    });

// Show specific section and update navigation links
function showSection(section) {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));

    document.getElementById(section).style.display = 'block';
    document.querySelectorAll(`nav a[href="#${section}"]`).forEach(link => link.classList.add('active'));
}

function toggleMenu() {
    document.getElementById('mobileNav').classList.toggle('active');
}

// Set home section as default
document.addEventListener('DOMContentLoaded', () => showSection('home'));