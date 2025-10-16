$('#offersScroll ').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1 }
        }
    ]
});

$('#offers-prev').on('click', function () {
    $('#offersScroll').slick('slickPrev');
});
$('#offers-next').on('click', function () {
    $('#offersScroll').slick('slickNext');
});
$('#activitiesScroll ').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1 }
        }
    ]
});

$('#activities-prev').on('click', function () {
    $('#activitiesScroll').slick('slickPrev');
});
$('#activities-next').on('click', function () {
    $('#activitiesScroll').slick('slickNext');
});