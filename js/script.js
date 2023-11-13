let closer = document.querySelector('#closer');
closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

// nav bar part
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = 'block';
    navbar.classList.toggle('active');
}

// shopping cart part
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    closer.style.display = 'block';
    shoppingCart.classList.toggle('active');
}

// Login form part
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}

// search bar part
let searchForm = document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active')
}

// slides-container part
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}