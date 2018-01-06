$(document).ready(function(){
	$('.domain a.click').click(function(e) {
			e.preventDefault();
			$(this).parent().find('.popup').toggle();
		});
		$('.sep a').click(function(e) {
			e.preventDefault();
			str = $(this).attr('id');
			jQuery.scrollTo("#"+str, 500);
		});
		var params = {
	        changedEl: ".wrap-select select"
	    }
		cuSel(params);
		$('#header a.order-but').click(function(e) {
			e.preventDefault();
			$('.overlay, .popup-form').fadeIn(300);	
		});
		$('.overlay').click(function(e) {
			e.preventDefault();
			$('.overlay, .popup-form').fadeOut(300);	
		});
		$('.wrap-blocks1 .right-block .block .for-ico').hover(function() {
			$(this).stop().animate({ backgroundColor: "#fcad66"}, 400);
		}, function() {
			$(this).stop().animate({ backgroundColor: "#e9e9e9"}, 400);
		});
	$('#scrollup').cycle({
		fx: 'scrollHorz', 
			speed: 800, 
			timeout: 8000
  	});
	$.fn.scrollToTop = function() {
	  $(this).hide().removeAttr("href");
	  if ($(window).scrollTop() >= "150") $(this).fadeIn("slow")
	  var scrollDiv = $(this);
	  $(window).scroll(function() {
	   if ($(window).scrollTop() <= "150") $(scrollDiv).fadeOut("slow")
	   else $(scrollDiv).fadeIn("slow")
	  });
	  $(this).click(function() {
	   $("html, body").animate({scrollTop: 0}, "slow")
	  })
	 };
	 	$("#toTop").scrollToTop();
		$('.head-icos li a').click(function(e) {
			e.preventDefault();
			$(this).parent().find('span').toggle(); 
		});
});