let burger = document.querySelector('.header__burger')
let burgerLinks = document.querySelector('.nav')
burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    burgerLinks.classList.toggle('active')
})