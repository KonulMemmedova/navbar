let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
menu.onclick = () => {
    menu.classlist.toggle('fas-times');
    navbar.classlist.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
    let slides = document.querySelectorA11('.home.slide');}
    let index = 0;
    function next() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classlist.add('active');}
        function prev() {
            slides[index].classlist.remove('active');
            index = (index - 1 + slides.length) % slides.length;
        }
