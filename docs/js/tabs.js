$.fn.tabs = function() {
	var $this = $(this),
		tabs = $this.find('ul.tabs'),
		tab_cont = $this.find('.tab-cont');
		
	tabs.find('a').click(function(e) {
		e.preventDefault();	
		var index = $(this).parent().index();
		tab_cont.find('>div').hide();
		tab_cont.find('>div').eq(index).show();
		
		tabs.find('a').parent().removeClass('active');
		$(this).parent().addClass('active');
		tab_cont.find('>div.accordion').eq(index).slider();	
	}).first().click();	
}
$(document).ready(function(e) {
    $('.content').tabs();
	
});