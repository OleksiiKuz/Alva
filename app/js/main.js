//BURGER - MENU

$(".header__burger").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("header__burger-active");
});

$(".header__burger").on("click", function (e) {
  e.preventDefault;
  $(".header__menu").slideToggle();
});

$(".header__burger").on("click", function (e) {
  e.preventDefault;
  $(".header__menu" && "header__user").toggleClass("header__active");
});

// SLIDER
$(".promo__slider").slick({
  centerMode: true,
  centerPadding: "320px",
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        centerMode: false,
        arrows: false,
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});

//TABS
const tabs = document.querySelectorAll(".shop__header-item");
const tabsContent = document.querySelectorAll(".shop__tabs-inner");
const tabsParent = document.querySelector(".shop__tabs-header");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });

  tabs.forEach((item) => {
    item.classList.remove("shop__header-item--active");
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add("show", "fade");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("shop__header-item--active");
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target && target.classList.contains("shop__header-item")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// NAVIGATION MENU
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
let body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  let arrow = document.querySelectorAll(".header__arrow");
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add("parent");
    arrow[i].addEventListener("click", function () {
      subMenu.classList.toggle("subheader__menu-list--open");
      thisArrow.classList.toggle("header__arrow--active");
    });
  }
} else {
  body.classList.add("mouse");
}
