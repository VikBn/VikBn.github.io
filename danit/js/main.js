
$('#programs').on('click', function(){
    $('.header__progarms').toggleClass('active-block');
});

$('.group__icon').hover(function(){
    $(this.parentNode).find('.group__icon').toggleClass('group__active');
});
