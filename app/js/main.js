$(function(){

    $(".products__inner").slick({

    });

    $('.feed__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".products-star").rateYo({
        starWidth: "15px",
        rating: 4.5,
        readOnly: true
      });
      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
    });
    $(".filter-bar__listsvg").on('click', function(){
        $('.items__inner-box').addClass('list');
        $('.filter-bar__listsvg').addClass('active');
        $('.filter-bar__greed').removeClass('active');
    });
    
    $(".filter-bar__greed").on('click', function(){
        $('.items__inner-box').removeClass('list');
        $('.filter-bar__greed').addClass('active');
        $('.filter-bar__listsvg').removeClass('active');
    });
    var mixer = mixitup('.item__product');
    
});