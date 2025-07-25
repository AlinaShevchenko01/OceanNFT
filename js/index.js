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
})

const sideMenuLink = sideMenu.querySelectorAll('li');
sideMenuLink.forEach(link => {
    link.addEventListener('click', (e) => {
        if (sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            burgerIcon.classList.toggle('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll')
        }
    })
})

const swiperTopNft = new Swiper ('.top-nft__swiper', {
    loop: true,
    grabCursor: true,

    breakpoints: {
        0:{
            slidesPerView: 1.13,
            spaceBetween: 24,
        },
        376: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        769:{
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1201:{
            slidesPerView: 2.9,
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

const swiperAccounts = new Swiper ('.collections__swiper-accounts', {
    loop: true,
    grabCursor: true,

    breakpoints: {
        0:{
            slidesPerView: 1.13,
            spaceBetween: 24,
        },
        376: {
            slidesPerView: 1.6,
            spaceBetween: 20,
        },
        769:{
            slidesPerView: 2.3,
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

const accordionBtn = document.querySelectorAll('.footer__list')
const accordionMarker  = document.querySelectorAll('.footer__show-more')
const accordionContent = document.querySelectorAll('.footer__list-section')

accordionBtn.forEach((btn, index) => {
    if (window.innerWidth < 769){
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