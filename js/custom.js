$(function(){

$('.list-lang__link').click(function(){
	$('.list-lang__link').parents('.list-lang__item').removeClass('active')
	$(this).parents('.list-lang__item').addClass('active')
}); 


var h_header = $('header').height();   
$('#fullpage').fullpage({
	paddingTop: h_header,
});

var hf = function(){
	var h_header = $('header').height();
	var h_footer = $('footer').height();
	$('.content').css({
		'paddingTop': h_header,
		'paddingBottom': h_footer
	});

}
$('.tabs a').click(function(){
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('href');
	$(id).removeClass('hide');
	$(this).parent().addClass('active');
	return false
});

$(window).bind('load resize', hf);

});






