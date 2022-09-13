// const modalInf = document.querySelector('.modal'),
//       closeModalInf = document.querySelector('.modal-item i'),
//       closeModalInfMain = document.querySelector('.modal-item');


// function showModalInf () {
//     modalInf.classList.add('modal_active');
// }
// setTimeout(showModalInf,10000);
// closeModalInf.addEventListener('click', () => {
//     modalInf.classList.remove('modal_active');
// });

// seacrh - form

    const search = document.querySelectorAll('.navbar-block__other_search'),
    searchModal = document.querySelector('.modal-search'),
    closeSearchModal = document.querySelector('.modal-search_close');

    search.forEach(i => {
    i.addEventListener('click', () => {
    searchModal.classList.add('modal-search_active');
    document.body.style.overflow = 'hidden';
    });
    });

    closeSearchModal.addEventListener('click', () => {
    searchModal.classList.remove('modal-search_active');
    document.body.style.overflow = '';
    });

    searchModal.addEventListener('click', (e) => {
    if(e.target === searchModal){
    searchModal.classList.remove('modal-search_active');
    document.body.style.overflow = '';
    }
    });
// slider-news
// const swiper = new Swiper('.swiper-news', {
//     // Default parameters
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//         delay: 3000
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable : true
//     },
//     // Responsive breakpoints
//     breakpoints: {
//       // when window width is <= 991px
//       320: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       },
//       // when window width is >= 480px
//       480: {
//         slidesPerView: 3,
//         spaceBetween: 30
//       },
//       // when window width is >= 640px
//       640: {
//         slidesPerView: 4,
//         spaceBetween: 40
//       },
//       992: {
//         slidesPerView: 3,
//         spaceBetween: 40
//       }
//     }
//   });
const swiper = new Swiper('.swiper-news', {
  // Default parameters
  loop: true,
  autoplay: {
      delay: 3000
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable : true
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    722: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 110
    },
    1070: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
  // swiper-cionostasis

  const swiperIconostasis = new Swiper('.iconostasis-block__icon', { 
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: '.iconostasis-next',
        prevEl: '.iconostasis-prev',
    }
  });
  


  const swiperAboutUs = new Swiper('.about_us-block__icon', { 
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: '.iconostasis-next',
        prevEl: '.iconostasis-prev',
    }
  });

  // menu-fade
  const menuFade = document.querySelector('header'),
        menuLink = document.querySelectorAll('.navbar-block__link_item'),
        hamburger = document.querySelector('.hamburger');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 89){
      menuFade.classList.add('menu-fade');
      menuLink.forEach(i => {
        i.classList.add('navbar-block__link_item_active');
      });
      hamburger.classList.add('hamburger_white');
    } else {
      menuFade.classList.remove('menu-fade');
      menuLink.forEach(i => {
        i.classList.remove('navbar-block__link_item_active');
      });
      hamburger.classList.remove('hamburger_white');
    }
  });
  // hamburger
const navMenu = document.querySelector('.navbar-block__link');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger_active');
  navMenu.classList.toggle('navbar-block__link_active');
  document.body.classList.toggle('scroll-close');
});



const menuFadeParent = document.querySelectorAll('.navbar-block__link_item '),
      subSubMenu = document.querySelector('.add-menu'),
      subSubMenuLi = document.querySelector('.sub-sub_menu_list'),
      linkSubSubMenu = document.querySelector('.add-menu__arrow');
      prevent = document.querySelectorAll('.prevent');
      
      prevent.forEach(i => {
        i.addEventListener('click', (e) => {
          e.preventDefault();
        });
      });
      linkSubSubMenu.addEventListener('click', (e) => {
        e.preventDefault();
      });
    if(window.innerWidth <=  1199){
        for(let i = 0; i<menuFadeParent.length; i++){
          let subMenu = menuFadeParent[i].nextElementSibling;
          if(subMenu){
            menuFadeParent[i].addEventListener('click', () => {
              subMenu.classList.toggle('sub-menu-list_active');
            });
          }
          
        }
        subSubMenu.addEventListener('click', () => {
          subSubMenuLi.classList.toggle('sub-sub_menu_list_active');
        });

    }
// shop
const shopIcon = document.querySelector('.navbar-block__other_bag'),
      shopIconClose = document.querySelector('.modal-shop__main_close'),
      modalShop = document.querySelector('.modal-shop'),
      modalShopBlock = document.querySelector('.modal-shop__block');
shopIcon.addEventListener('click', () => {
  modalShop.classList.add('modal-shop__active');
  modalShopBlock.classList.add('modal-shop__block__active');
  document.body.style.overflow = 'hidden';
});
shopIconClose.addEventListener('click', () => {
  modalShop.classList.remove('modal-shop__active');
  modalShopBlock.classList.remove('modal-shop__block__active');
  document.body.style.overflow = '';
});

// amount add
const minus = document.querySelector('.shop-open__amount_minus'),
      plus = document.querySelector('.shop-open__amount_plus'),
      changeAmount = document.querySelector('.shop-open__amount_change');
if(minus){
  minus.addEventListener('click', () => {
    if(changeAmount.value >= 2) {
      changeAmount.value--;
    }
  });
}
if(plus){
  plus.addEventListener('click', () => {
    changeAmount.value++;
});
}

// tabs
const tabsParentInf = document.querySelector('.shop-open__tabs'), 
      tabsChildsInf = document.querySelectorAll('.shop-open__tab'),
      tabsModal = document.querySelectorAll('.shop-open__modal');
function hide() {
  tabsModal.forEach(i => {
    i.style.display = 'none';
  });
  tabsChildsInf.forEach(i => {
    i.classList.remove('shop-open__tab_active');
  });
}
function show(i=0) {
  if(tabsModal.length){
    tabsModal[i].style.display = 'block';
  }
  if(tabsChildsInf.length){
    tabsChildsInf[i].classList.add('shop-open__tab_active');
  }
}
hide();
show();
if(tabsParentInf){
  tabsParentInf.addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains('shop-open__tab')){
      tabsChildsInf.forEach((item,i) => {
        if(e.target == item){
          hide();
          show(i);
        }
      });
    }
  });
}





    
  

  