
const openMenu = () => {
    // Toggle the "menu--open" class on your menu refence. 
    menu.classList.toggle('menu-open')
  }


const menu = document.querySelector('.menu');
console.log(menu);

const menuButton = document.querySelector('.hamburger');
console.log(menuButton)

menuButton.addEventListener('click', openMenu);
