




	// animated scrolling to section
	$(".scroll_to").on("click", function (event) {
	  //отменяем стандартную обработку нажатия по ссылке
	  event.preventDefault();

	  //забираем идентификатор бока с атрибута href
	  var id  = $(this).data('section');
	  var pageName = getPageName();

	  console.log(pageName);

	  if ((id && pageName == 'index') || (id && !pageName) ) {
	      //узнаем высоту от начала страницы до блока на который ссылается якорь
	    var top = $(id).offset().top;

	    //мінусуємо висоту фіксованого меню
	    //top = top-110;

	    //анимируем переход на расстояние - top за 1500 мс
	    $('body,html').animate({scrollTop: top}, 2000, "swing");
	  }else if(id && pageName){
	    window.location.href = 'index.html'+id;
	  }

	});
	function getPageName() {
	  var st = unescape(window.location.pathname );
	  var r = st.substring( st.lastIndexOf('/') + 1, st.length );
	  return r;
	}
