$(document).ready(function(e) {
    $('.tab-block').each(function() {
		$(this).find('.title').toggle(function() {
			var $this = $(this);
			$this.addClass('active');
			$this.find('>a').html('Свернуть<span></span>');	
			$this.parent().find('.tab-cont').slideDown(400);
		}, function() {
			var $this = $(this);
			$this.removeClass('active');
			$this.find('>a').html('Развернуть<span></span>');		
			$this.parent().find('.tab-cont').slideUp(400);
		});
	});
});