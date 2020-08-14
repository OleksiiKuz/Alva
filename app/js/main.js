$('.header__burger').on('click', function (e) {
  e.preventDefault;
  $(this).toggleClass('header__burger-active')

});

$('.header__burger').on('click', function (e) {
  e.preventDefault;
  $('.header__menu').slideToggle();

});

$('.header__burger').on('click', function (e) {
  e.preventDefault;
  $('.header__menu' && 'header__user').toggleClass('header__active')




});


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
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1,
      },
    },
  ],
});

const tabs = document.querySelectorAll(".shop__header-item");
const tabsContent = document.querySelectorAll(".shop__tabs-inner");
const tabsParent = document.querySelector(".shop__tabs-header");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade')
  });

  tabs.forEach((item) => {
    item.classList.remove("shop__header-item--active");
  });
}

function showTabContent(i = 0) {
   tabsContent[i].classList.add('show', 'fade');
   tabsContent[i].classList.remove('hide');
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


