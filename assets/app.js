const menuButton = document.getElementById("menuButton");
const navList = document.querySelector(".nav__list");
const navShop = document.querySelector(".shopify-section.main__header");
const nav = document.querySelector("header");
const allSections = document.querySelectorAll(".shopify-section");
const subLinks = document.querySelectorAll("#subLinkList");
const mobileMenuBtn = document.getElementById("menu");
const body = document.querySelector("body");

mobileMenuBtn.addEventListener("change", handleMenuChange.bind(this));

function handleMenuChange(e) {
  e.preventDefault();

  /* CHECKS TO SEE IF MENU OPEN AND ADDS STYLE TO STOP MENU FROM SCROLLING THE PAGE */
  if (mobileMenuBtn.checked) {
    body.style = "overflow: hidden";
  } else {
    body.style = "overflow: visible";
  }
}

subLinks.forEach((subLink) => {
  subLink.addEventListener("click", openSubMenu.bind(this));
});

console.log(subLinks);

function openSubMenu(e) {
  console.log(e.target);
  if (
    e.target.classList.contains("header__sub-link") ||
    e.target.classList.contains("header__sub-link-item")
  ) {
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  let linkArray = [];
  subLinks.forEach((link) => linkArray.push(link));

  const prevTarget = linkArray.filter((link) =>
    link.classList.contains("open")
  );

  if (e.currentTarget.classList.contains("open")) {
    e.currentTarget.classList.remove("open");
  }
  if (!e.currentTarget.classList.contains("open")) {
    e.currentTarget.classList.add("open");
  }

  if (prevTarget[0]) {
    prevTarget[0].classList.remove("open");
  }
}

let stickyOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

let stickyNavObserver = new IntersectionObserver(
  toggleStickyNav,
  stickyOptions
);

function toggleStickyNav(entries, observer) {
  console.log(entries);
  if (!entries[0].isIntersecting) {
    nav.classList.add("sticky");
    navShop.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
    navShop.classList.remove("sticky");
  }
}

stickyNavObserver.observe(navShop);

//* ********************************** SECTION ANIMATIONS *********************** *//

let animatedOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
};

let sectionsObserver = new IntersectionObserver(
  handleAnimations,
  animatedOptions
);

function handleAnimations(entries, observer) {
  // console.log(...entries);
  for (let i = 0; i < entries.length; i++) {
    entries[i].isIntersecting &&
    entries[i].target.classList.contains("hero") === false
      ? animateFadeIn(entries[i].target.children[0], entries[i])
      : console.log("not intersecting");
  }
  // if (Shopify.designMode) {
  //   console.log(...entries, "Design Mode");

  //   for (let i = 0; i < entries.length; i++) {
  //     const section =
  //       entries[i].target.children[1] || entries[i].target.children[0];
  //     const sectionClass = section.classList[0];
  //     console.log(sectionClass);
  //     if (section.dataset.animate === "fadeIn") {
  //       animateDesignModeFadeIn(sectionClass, entries[i]);
  //     }
  //     if (section.dataset.animate === "fadeRight") {
  //       animateDesignModeFadeRight(sectionClass, entries[i]);
  //     }
  //     if (section.dataset.animate === "fadeLeft") {
  //       animateDesignModeFadeLeft(sectionClass, entries[i]);
  //     }
  //     if (section.dataset.animate === "fadeUp") {
  //       animateDesignModeFadeUp(sectionClass, entries[i]);
  //     }
  //     if (section.dataset.animate === "fadeDown") {
  //       animateDesignModeFadeDown(sectionClass, entries[i]);
  //     }
  //   }
  // }

  checkData(...entries, [...entries]);
}
allSections.forEach((section) => {
  if (
    section.id === "shopify-section-header" ||
    section.id === "shopify-section-footer"
  ) {
    return;
  } else {
    sectionsObserver.observe(section);
  }
});

function checkData(entry, entries) {
  const section = entry.target.children[1] || entry.target.children[0];

  if (section.dataset.animate === "fadeIn") {
    animateFadeIn(section, entry);
  }
  if (section.dataset.animate === "fadeRight") {
    animateFadeRight(section, entry);
  }
  if (section.dataset.animate === "fadeLeft") {
    animateFadeLeft(section, entry);
  }
  if (section.dataset.animate === "fadeUp") {
    animateFadeUp(section, entry);
  }
  if (section.dataset.animate === "fadeDown") {
    animateFadeDown(section, entry);
  }
}

// function animateDesignModeFadeIn(section, entry) {
//   const el = document.querySelector("." + section);
//   if (el.classList.contains("fade-in") === false) {
//     el.classList.toggle("fade-in");
//   }
// }
// function animateDesignModeFadeRight(section, entry) {
//   const el = document.querySelector("." + section);
//   if (el.classList.contains("fade-right") === false) {
//     el.classList.toggle("fade-right");
//   }
// }

// function animateDesignModeFadeLeft(section, entry) {
//   const el = document.querySelector("." + section);
//   if (el.classList.contains("fade-left") === false) {
//     el.classList.toggle("fade-left");
//   }
// }

// function animateDesignModeFadeUp(section, entry) {
//   const el = document.querySelector("." + section);
//   if (el.classList.contains("fade-up") === false) {
//     el.classList.toggle("fade-up");
//   }
// }

// function animateDesignModeFadeDown(section, entry) {
//   console.log("fadeDown");
//   const el = document.querySelector("." + section);
//   if (el.classList.contains("fade-down") === false) {
//     el.classList.toggle("fade-down");
//   }
// }

function animateFadeIn(section, entry) {
  if (entry.isIntersecting /*&& !section.classList.contains("fade-in")*/) {
    section.classList.add("fade-in");
  } else {
    section.classList.remove("fade-in");
  }
}
function animateFadeRight(section, entry) {
  if (entry.isIntersecting /*&& !section.classList.contains("fade-in")*/) {
    section.classList.add("fade-right");
  } else {
    section.classList.remove("fade-right");
  }
}

function animateFadeLeft(section, entry) {
  if (entry.isIntersecting /*&& !section.classList.contains("fade-in")*/) {
    section.classList.add("fade-left");
  } else {
    section.classList.remove("fade-left");
  }
}

function animateFadeUp(section, entry) {
  if (entry.isIntersecting /*&& !section.classList.contains("fade-in")*/) {
    section.classList.add("fade-up");
  } else {
    section.classList.remove("fade-up");
  }
}

function animateFadeDown(section, entry) {
  if (entry.isIntersecting /*&& !section.classList.contains("fade-in")*/) {
    section.classList.add("fade-down");
  } else {
    section.classList.remove("fade-down");
  }
}
