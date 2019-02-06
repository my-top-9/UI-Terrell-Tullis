
const openMenu = () => {
    menu.classList.toggle('menu-open')
    TweenMax.from(menu, .7, {y: -15})
  }

const menu = document.querySelector('.menu');
console.log(menu);

const menuButton = document.querySelector('.hamburger');
console.log(menuButton)

menuButton.addEventListener('click', openMenu);
