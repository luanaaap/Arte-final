$(function(){
	$('.menuToggle').on('click', function(){
		$('.menu').slideToggle(600, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
			}
		});
	});
});