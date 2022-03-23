$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollaspe = $('.toggle-collapse .toggle-icons i');

    /** Evento Click sul Toggle */

    $toggleCollaspe.click(function(){
        $nav.toggleClass('collapse');
        
    })

    // owl-carousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplauTimeout: 3000,
        dots:false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });
});
