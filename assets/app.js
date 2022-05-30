const menuButton = document.getElementById("menuButton");
const navList = document.querySelector(".nav__list");
const navShop = document.querySelector('.shopify-section.main__header');
const nav = document.querySelector('header');
const heros = document.querySelectorAll('.shopify-section');
const subLinks = document.querySelectorAll("#subLinkList");

subLinks.forEach(subLink => {
   subLink.addEventListener('click', openSubMenu.bind(this))
});

// const prevTarget = subLinks.filter(link => link.index > 1);
console.log(subLinks)

function openSubMenu(e) {
console.log(e.target)
    if (e.target.classList.contains('header__sub-link') || e.target.classList.contains('header__sub-link-item')) {
        return;
    }
    e.preventDefault();
    e.stopPropagation();
    let linkArray = []
    subLinks.forEach(link => linkArray.push(link))

    const prevTarget = linkArray.filter(link => link.classList.contains('open'))

    

    if (e.currentTarget.classList.contains('open')) {
        e.currentTarget.classList.remove('open')
    } 
    if (!e.currentTarget.classList.contains('open')) {
        e.currentTarget.classList.add('open')
    }

    if (prevTarget[0] ) {
        prevTarget[0].classList.remove('open')
    }

}



let options = {
    root: null,
    rootMargin: '0px',
    threshold: .6
}

let observer = new IntersectionObserver(toggleStickyNav, options);



function toggleStickyNav(entries, observer) {

console.log(entries)
if (!entries[0].isIntersecting) {
    nav.classList.add('sticky');
    navShop.classList.add('sticky');
} else {
    nav.classList.remove('sticky');
    navShop.classList.remove('sticky');
}
}

 observer.observe(heros[1])
