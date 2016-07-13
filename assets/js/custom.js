

$(document).ready(function(){
	
	$('.section,.sectionBlock01').css({'height' : $(window).height()});
	
	$(window).resize(function(){
		$('.section').css({'height' : $(window).height()});
	});
	
	$('.toggleArea p i').hover(function(){
		$('.navBlock').slideDown();
		$(this).parents('.toggleArea').animate({top: '-150px'},300);
	});
	
	$('.navBlock').mouseleave(function(){
		$(this).slideUp();
		$('.toggleArea').animate({top: '0px'},300);
	});

	var scrollState =true;
	
	$('html,body').on('DOMMouseScroll mousewheel', function ( event ) {
		if (scrollState == true){
			
			if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
			
				//scroll down
				if (!$('.section.active').is(':last-child')){
					scrollState = false;
					$(this).animate({scrollTop: $('.section.active').next('.section').offset().top},500,function(){
						$('.section.active').next('.section').addClass('active').siblings('.section').removeClass('active');
						scrollState = true;
					});
				}

			} else {
				//scroll up
				if (!$('.section.active').is(':first-child')){
					scrollState = false;
					$(this).animate({scrollTop: $('.section.active').prev('.section').offset().top},500,function(){
						$('.section.active').prev('.section').addClass('active').siblings('.section').removeClass('active');
						scrollState = true;
					});
				}
			}
			//prevent page fom scrolling
			return false;
		}

	});

});