

$(document).ready(function(){
	
	$('.sectionArea01').css({'height' : $(window).height()});
	
	$(window).resize(function(){
		$('.sectionArea01').css({'height' : $(window).height()});
	});
	
});