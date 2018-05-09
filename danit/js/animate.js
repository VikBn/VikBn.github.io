$.fn.scrollBottom = function() {
    return $(window).scrollTop() + $(window).height();
  };

  $(window).scroll(function() {
      var app = $('.advantages__inner').offset().top + 240 - $(window).height();
          offer = $('.offer__wrapper').offset().top + 240 - $(window).height();
          group = $('.group__wrapper').offset().top + 240 - $(window).height();
          about = $('.about__wrapper').offset().top + 240 - $(window).height();
          education = $('.education__wrapper').offset().top + 240 - $(window).height();
          receive = $('.receive__wrapper').offset().top + 240 - $(window).height();

    if  ($(window).scrollTop() > app){
      $('.advantages__inner').css({'visibility':'visible'}).addClass("bounceInDown");
    }
    if  ($(window).scrollTop() > offer){
      $('.offer__wrapper').css({'visibility':'visible'}).addClass("bounceInUp");
    }
    if  ($(window).scrollTop() > group){
      $('.group__wrapper').css({'visibility':'visible'}).addClass("bounceInLeft");
    }
    if  ($(window).scrollTop() > about){
      $('.about__wrapper').css({'visibility':'visible'}).addClass("bounceInRight");
    }
    if  ($(window).scrollTop() > education){
      $('.education__wrapper').css({'visibility':'visible'}).addClass("bounceInUp");
    }
    if  ($(window).scrollTop() >receive){
      $('.receive__wrapper').css({'visibility':'visible'}).addClass("bounceInDown");
    }

  });
