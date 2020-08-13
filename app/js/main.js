$(".promo__slider").slick({
  centerMode: true,
  centerPadding: "190px",
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
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
