$(document).ready(function() {
$(window).stellar();
});	

$(window).scroll(function() {
	if($(window).scrollTop()>200) {
		$('.fixed-top').addClass('menu-bg');
}else{
	$('.fixed-top').removeClass('menu-bg');
}});

$( ".navbar-nav button").click(function(){
 $('#navbarSupportedContent').removeClass('show');
 $('.navbar-toggler').addClass('collapsed');
});

$( ".nav-link").click(function(){
 $('#navbarSupportedContent').removeClass('show');
 $('.navbar-toggler').addClass('collapsed');
});

$('body').scrollspy({ target: '#navbar' })
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})