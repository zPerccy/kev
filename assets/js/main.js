const menuNav = document.getElementById('menu');
const closeNav = document.getElementById('close')
const tabNav = document.querySelector('nav')

menuNav.addEventListener('click', () => {
    tabNav.classList.add('presionado')
});

closeNav.addEventListener('click', () => {
    tabNav.classList.remove('presionado')
});
