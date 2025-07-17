const scrollbar = window.innerWidth - document.documentElement.clientWidth;

const headerScroll = document.querySelector('.header__fixed')

window.addEventListener('scroll', (e) => {
    if (window.scrollY >= headerScroll.offsetHeight) {
        headerScroll.classList.add('scrolled');
    }else {
        headerScroll.classList.remove('scrolled');
    }
})

const burgerIcon = document.querySelector('.header__burger-icon')
const burgerNavList = document.querySelector('.header__navigation_side-menu')
burgerIcon.addEventListener('click', (e) => {
    burgerNavList.classList.toggle('active', !burgerNavList.classList.contains('active'));

    if (burgerNavList.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbar}px`;
    }else {
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = ``;
    }
});


const burgerLinks = burgerNavList.querySelectorAll('li');
burgerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (burgerNavList.classList.contains('active')) {
            burgerNavList.classList.remove('active');
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = ``;
        }
    })
})

const swiperTopNft = new Swiper ('.top-nft__swiper', {
    loop: true,
    grabCursor: true,

    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 24,
        },
        769:{
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1201:{
            slidesPerView: 2.5,
            spaceBetween: 30,
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
                    console.log(index)
                }
            });
            tabButtons[index].classList.add('active');

            tabSkins.forEach(skin =>{
                if (skin.classList.contains('active')) {
                    skin.classList.remove('active');
                    console.log(index)
                }
            });
            tabSkins[index].classList.add('active');
        }
    })
})
/*
const swiperSkinsModel = new Swiper ('.collections__swiper-skins', {
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 1600,
        disableOnInteraction: true
    },

    slidesPerView: 1,
    speed: 1000,


    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-100%', 0, -500],
            opacity: 0
        },
        next: {
            translate: ['100%', 0, -500],
            opacity: 0
        }
    },
    navigation: {
        nextEl: '.collections__btn-view'
    },
})


const collectionBtn = document.querySelectorAll ('.collections__btn')

collectionBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        swiperSkinsModel.slideToLoop(index);

    })
});

//collectionBtn[0].classList.add('active');

swiperSkinsModel.on('slideChange', function (index){
    const activeIndex = swiperSkinsModel.realIndex;
    collectionBtn.forEach((btn, index) => {
        btn.classList.toggle('active', index === activeIndex);
    })
})
 */

const swiperAccounts = new Swiper ('.collections__swiper-accounts', {
    loop: true,
    grabCursor: true,
    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 24,
        },
        769:{
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1201:{
            slidesPerView: 2.5,
            spaceBetween: 30,
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
    if (window.innerWidth < 769){
        sellersList.classList.toggle('active');
        iconShowMore.classList.toggle('active');
    }
})















