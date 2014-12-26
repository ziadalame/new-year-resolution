jQuery(document).ready(function($) {
	

	headerSize();
	colorChange();

	window.pageYOffset = 0;
	$(window).resize(function(event) {
		headerSize();
		colorChange();
	});

});

function colorChange(){

	var screen_width  = $(window).width();
	if( screen_width < 980 ){
		$(".name").css('color', "#231f20");
		$(".dob").css('color', "#231f20");
		$(".email").css('color', "#231f20");
	}
	if( screen_width > 979 ){
		$(".name").css('color', "white");
		$(".email").css('color', "white");
		$(".dob").css('color', "white");
	}
}

function headerSize(){

	var screen_width = $(window).width();
	$(".green-bg").css('min-width', screen_width);

}



