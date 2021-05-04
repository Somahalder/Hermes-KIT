function toggleDropdown() {
    let navbarToggle = document.getElementById("navbar-toggle");
    if(navbarToggle.className ===  'main-nav') {
        navbarToggle.className += ' responsive';

    } else {
        navbarToggle.className = 'main-nav';
    }
}