
jQuery(document).ready(function($) {		//ONDOCUMENT READY


				headerSize();		//RESIZING HEADER ACCORDING TO SCREEN WIDTH
				fontSize();			//RESIZING FONT SIZE ACCORDING TO SCREEN WIDTH 
				paddingTop();		
				modalSize();
				$("#signup_alert").hide(1);
				$("#login_alert").hide(1);
				$("#email_display").hide(1);



	$(window).resize(function(event) {			//DOING THE SAME RESIZES ON WINDOW RESIZING

				headerSize();
				fontSize();
				paddingTop();
				modalSize();

	});
	

	$("#login-form").submit(function(event){		//ONSUBMIT LOGIN

		event.preventDefault();


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
						// JSON.parse(result);
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

					var result_object = $.parseJSON(result);

					if (result_object.login_success){

						$("#login").modal('hide');
						$("#login_alert").hide(1000);
						$(".username_button").hide(1000);
						$("#email_display").html(email);
						$("#email_display").show(1000);
						


					}else{

						$("#login_alert").show(1000);
					}

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
		$(".question").css('font-size', 31);

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




