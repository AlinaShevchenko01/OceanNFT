console.log('hello world')

const swiperTopNft = new Swiper ('.top-nft__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 36,
    grabCursor: true,

    navigation: {
        nextEl: '.top-nft__btn'
    },
})


const swiperSkinsModel = new Swiper ('.collections__swiper-skins', {
    loop: true,
    grabCursor: true,
    /*
    autoplay: {
        delay: 1600,
        disableOnInteraction: true
    },
    /
     */
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

collectionBtn[0].classList.add('active');

swiperSkinsModel.on('slideChange', function (index){
    const activeIndex = swiperSkinsModel.realIndex;
    collectionBtn.forEach((btn, index) => {
        btn.classList.toggle('active', index === activeIndex);
    })
})

const swiperAccounts = new Swiper ('.collections__swiper-accounts', {
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 36,

    navigation: {
        nextEl: '.collections__btn-all'
    },
})