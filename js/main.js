$(function(){

    $('.header__nav-btn').on('click', function(){
        $('.header__nav-items').slideToggle()
    });

})

$(document).ready(function(){
    $('.proof__items').slick({
        responsive: [
            {
              breakpoint: 10000, 
              settings: 'unslick',
            },
            {
              breakpoint: 760, 
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:true,
                autoplay:true,
              }
            }
          ],
    });
});