let config={
    type:'loop',
    arrows:true,
    pagination:false,
    perPage: 3,
    perMove:1,
    gap:30,
    easing:'ease',
    breakpoints:{
        991:{
            perPage:2,
            focus:1,
        },
        767:{
            perPage:1,
        },
        420:{
            perPage:1,
        }
    }
};
new Splide( '._personal_testimonial_slider',config ).mount();