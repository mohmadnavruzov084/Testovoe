window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
})


// var swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   direction: getDirection(),
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth >= 1450 ? 'vertical' : 'horizontal';

  return direction;
}



///Аккардион
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.27,
  pagination: {
    el: ".swiper-pagination",
  },  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
     768: {
      slidesPerView: 3.4,
      
    },
   1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
}
});

