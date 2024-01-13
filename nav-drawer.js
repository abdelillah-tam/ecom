const navBtn = document.querySelector('.nav-drawer');
const closeNavBtn = document.querySelector('.close-nav');
const menu = document.querySelector('.menu');


navBtn.addEventListener("click", () => {
    menu.classList.add('translate-x-full');
    closeNavBtn.classList.remove('hidden');
});

closeNavBtn.addEventListener("click", () => {
    menu.classList.remove('translate-x-full');
});