
jQuery(document).ready(function($) {
	headerSize();
	fontSize();
	paddingTop();
	modalSize();
	$(window).resize(function(event) {
		headerSize();
		fontSize();
		paddingTop();
		modalSize();
	});
	

	$("#login-form").submit(function(event){

		event.preventDefault();
		console.log('form submitted');
	});


	$('#login-form').parsley({
		trigger:      'change',
		successClass: "has-success",
		errorClass: "has-error",
		classHandler: function (el) {
            return el.$element.closest('.form-group'); //working
        }
    });

	$('#signup-form').parsley({
		trigger:      'change',
		successClass: "has-success",
		errorClass: "has-error",
		classHandler: function (el) {
            return el.$element.closest('.form-group'); //working
        }
    });

		$("#submit_signup").click(function(){
			var email = $("#signup_email").val();
			var password = $("#signup_password").val();
// Returns successful data submission message when the entered information is stored in database.
			 dataString = {'email_signup':email, 'password_signup':password,'submit_signup':true};


		if(email==''||password=='')
		{
			alert("Please Fill All Fields");
		}
		else
		{
			console.log(dataString);
		// AJAX Code To Submit Form.
		$.ajax({
			type: "POST",
			url: "process.php",
			data: dataString,
			success: function(result){
				console.log(result);
			}
		});
		}
		return false;
		});


		$("#submit_login").click(function(){
			var email = $("#email_login").val();
			var password = $("#password_login").val();

			dataString = {'email_login':email, 'password_login':password,'submit_login':true};

			if (email=='' || password=='')
			{
				alert("Please fill in all the fields");
			}
			else{
				console.log("Input correct so far.");
				$.ajax({
					type:"POST",
					url:"process.php",
					data: dataString,
					success: function(result){
						console.log(result);
					}
				});
			}
			return false;

		});








});
var screen_height = $(window).height();
var screen_width = $(window).width();

function headerSize(){
	$("#header").css('min-width', screen_width);
	$("#header").css('min-height', screen_height);
}

function modalSize(){
	if(screen_width < 358){
		$('.modal-body').css('width', screen_width-15);
		$('.modal-dialog').css('width', screen_width-20);
		$('.modal-body').css('padding-left', 15);


	}
	if(screen_width > 358){
		$('.modal-body').css('width', 358);
		$('.modal-dialog').css('width', 358);
		$('.modal-body').css('padding', 15)

	}
}


function fontSize(){
	if( screen_width < 602 ){
		$(".question").css('text-align', "center");
		$(".question").css('font-size', 31)
	}
	if( screen_width > 602){
		$(".question").css('text-align', "left");
	}

}
function paddingTop(){
	if(screen_width < 359){
		$(".reminder").css('padding-top',0);
		$(".reminder").css('text-align',"center");
	}
	if(screen_width >= 359){
		$(".reminder").css('padding-top', 15)
		$(".reminder").css('text-align', "right");
	}
	
}


$( "#login-form" ).submit(function( event ) {
});


function validateEmail(email) { 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
} 

function checkPwd(str) {
	if (str.length < 6) {
		return("too_short");
	} else if (str.length > 20) {
		return("too_long");
	} else if (str.search(/\d/) == -1) {
		return("no_num");
	} else if (str.search(/[a-zA-Z]/) == -1) {
		return("no_letter");
	} else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
		return("bad_char");
	}
	return "ok";
}