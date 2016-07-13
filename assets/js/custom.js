

$(document).ready(function(){
	
	$('.sectionBlock01').css({'height' : $(window).height()});
	
	$(window).resize(function(){
		$('.sectionBlock01').css({'height' : $(window).height()});
	});
	
	$('.toggleArea p i').hover(function(){
		$('.navBlock').slideDown();
		$(this).parents('.toggleArea').animate({top: '-150px'},300);
	});
	
	$('.navBlock').mouseleave(function(){
		$(this).slideUp();
		$('.toggleArea').animate({top: '0px'},300);
	});
	
	
});