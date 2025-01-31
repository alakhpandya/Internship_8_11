$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    center: true,
    // autoWiautoWidth: true,
    nav:true,
    dots:false,
    navText: ['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
    // autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:3
        }
    }
})