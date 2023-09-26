const copyMenu = () => {
    const dptCategory = document.querySelector('.dpt-cat');
    const dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    const mainNav = document.querySelector('.header-nav nav');
    const navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    const topNav = document.querySelector('.header-top .wrapper');
    const topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

const menuBtn = document.querySelector('.trigger');
const closeBtn = document.querySelector('.t-close');
const addClass = document.querySelector('.site');

menuBtn.addEventListener('click', () => {
    addClass.classList.toggle('showmenu');;
});
closeBtn.addEventListener('click', () => {
    addClass.classList.remove('showmenu');
})

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();

    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
};

// Slider

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site');

searchButton.addEventListener('click', () => {
    console.log('hello')
    showClass.classList.toggle('showsearch');
});

tClose.addEventListener('click', () => {
    showClass.classList.remove('showsearch')
})