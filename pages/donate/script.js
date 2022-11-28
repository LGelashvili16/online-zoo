const toggleActive = document.querySelector('.header-d-flex');
const burgerMenu = document.querySelector('.burger-menu');
const menuLines = document.querySelectorAll('.burger-line');

burgerMenu.addEventListener('click', function () {
    toggleActive.classList.toggle('active');

    if (toggleActive.className.includes('active')) {
        menuLines.forEach(elm => elm.style.backgroundColor = 'black');
    } else {
        menuLines.forEach(elm => elm.style.backgroundColor = 'white');
    }
});

burgerMenu.addEventListener('click', disable);

// Prevent scroll
// Temporary I have to change
function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

function disable() {
    document.querySelector('header').addEventListener('wheel', preventScroll);
}