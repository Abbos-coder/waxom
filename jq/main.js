$(document).ready(function () {
    var $navbar = $('#navbar');
    var $nav = $('.nav');
    var $close = $('.navbar__close__btn');
    var $open = $('.nav__open__btn');
    
    $navbar.hide(0);
    $close.on('click', function (){
        $navbar.hide(1000);
    });

    $open.on('click', function (){
        $navbar.toggle(1000);
    });
});