$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollaspe = $('.toggle-collapse .toggle-icons i');

    /** Evento Click sul Toggle */

    $toggleCollaspe.click(function(){
        $nav.toggleClass('collapse');
    })
});
