const menuButton = document.getElementById("menuButton");
const navList = document.querySelector(".nav__list");

const subLinkList = document.querySelectorAll("#subLinkList");

const navShop = document.querySelector('.shopify-section.main__header');
const nav = document.querySelector('.header');
const hero = document.querySelector('.shopify-section.main__hero');

let options = {
    root: null,
    rootMargin: '150px',
    threshold: .3
}

let observer = new IntersectionObserver(toggleStickyNav, options);



function toggleStickyNav(entries, observer) {

console.log(entries)
if (!entries[0].isIntersecting) {
    nav.classList.add('sticky');
} else {
    nav.classList.remove('sticky');
}
}

 observer.observe(hero)
