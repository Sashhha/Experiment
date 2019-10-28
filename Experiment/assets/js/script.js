/*SIDEBAR*/
$(document).ready(function(){
	$('.sidebarBtn').click(function(){
		$('.main').toggleClass('active');
		$('.sidebarBtn').toggleClass('toggle');
	})
}) (jQuery);