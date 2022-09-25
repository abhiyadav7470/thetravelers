var menuBtn = document.querySelector('.menu-btn');
var navlinks = document.querySelector('.ulContainer');

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu')
})