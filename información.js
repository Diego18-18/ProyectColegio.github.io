document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('categorías');
});

document.querySelector('.menu-btn-b').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('categorías');
});

ScrollReveal().reveal('.bienvenida');
ScrollReveal().reveal('.articulos', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });