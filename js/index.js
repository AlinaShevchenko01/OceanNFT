const headerScroll = document.querySelector('.header__fixed')

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= headerScroll.offsetHeight) {
        headerScroll.classList.add('scrolled');
    }else {
        headerScroll.classList.remove('scrolled');
    }
})

const burgerIcon = document.querySelector('.header__burger-icon');
const sideMenu = document.querySelector('.header__side-menu');
const overlay = document.querySelector('.header__overlay');

burgerIcon.addEventListener('click', (e) => {
    burgerIcon.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll')
});

const sideMenuLink = sideMenu.querySelectorAll('li');
sideMenuLink.forEach(link => {
    link.addEventListener('click', (e) => {
        if (sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            burgerIcon.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll')
        }
    })
});

window.addEventListener('resize', (e) => {
    if (sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
        burgerIcon.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll')
    }
});

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const img = entry.target;

          if (img.dataset.src){
              img.src = img.dataset.src;
          }

          if (img.dataset.srcset){
              img.srcset = img.dataset.srcset;
          }

          if (img.dataset.sizes){
              img.sizes = img.dataset.sizes;
          }

          observer.unobserve(img);
      }
  });
},{
    rootMargin: '0 300px 300px 0'
});

document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
})

const swiperTopNft = new Swiper ('.top-nft__swiper', {
    grabCursor: true,

    breakpoints: {
        0:{
            slidesPerView: 1.1,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 1.13,
            spaceBetween: 20,
        },
        576:{
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        769:{
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1025:{
            slidesPerView: 2.1,
            spaceBetween: 22,
        },
        1441:{
            slidesPerView: 3,
            spaceBetween: 36,
        }
    }
})

const tabSkins = document.querySelectorAll('.collections__skin')
const tabButtons = document.querySelectorAll('.collections__btn')

tabButtons[0].classList.add('active');
tabSkins[0].classList.add('active');

tabButtons.forEach((tabButton,index) => {
    tabButton.addEventListener('click', (e) => {
        if (!tabButton.classList.contains('active')) {

            tabButtons.forEach(btn =>{
                if (btn.classList.contains('active')) {
                    btn.classList.remove('active');
                }
            });
            tabButtons[index].classList.add('active');

            tabSkins.forEach(skin =>{
                if (skin.classList.contains('active')) {
                    skin.classList.remove('active');
                }
            });
            tabSkins[index].classList.add('active');
        }
    })
})

const swiperAccounts = new Swiper ('.collections__swiper-accounts', {
    grabCursor: true,

    breakpoints: {
        0:{
            slidesPerView: 1.1,
            spaceBetween: 20,
        },
        375: {
            slidesPerView: 1.13,
            spaceBetween: 20,
        },
        576:{
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        769:{
            slidesPerView: 2.2,
            spaceBetween: 25,
        },
        1025:{
            slidesPerView: 2.5,
            spaceBetween: 25,
        },
        1441:{
            slidesPerView: 3,
            spaceBetween: 36,
        }
    }
})

const btnShowMore = document.querySelector('.top-sellers__title')
const sellersList = document.querySelector('.top-sellers__cards')
const iconShowMore = document.querySelector('.top-sellers__show-more')

btnShowMore.addEventListener('click', (e) => {
    if (window.innerWidth < 1025){
        sellersList.classList.toggle('active');
        iconShowMore.classList.toggle('active');
    }
})

const accordionBtn = document.querySelectorAll('.footer__list')
const accordionMarker  = document.querySelectorAll('.footer__show-more')
const accordionContent = document.querySelectorAll('.footer__list-section')

accordionBtn.forEach((btn, index) => {
    if (window.innerWidth < 1025){
        btn.addEventListener('click', (e) => {
            accordionContent.forEach((content,contentIndex) =>{
                if (contentIndex !== index){
                    content.classList.remove('active');
                    accordionMarker[contentIndex].classList.remove('active');
                }
            });

            accordionContent[index].classList.toggle('active');
            accordionMarker[index].classList.toggle('active');
        })
    }
})