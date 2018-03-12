$(document).ready(function() {

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
