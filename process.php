<?php

$username = "root";
$password = "root";
$hostname = "localhost";
$database = 'nyr';


$general_return = [
	"db_connect_success" => false,
	"login_success" => false,
	"new_account_creation" => false
];


$connection =mysqli_connect($hostname, $username, $password, $database); 		// Establishing Connection with Server..
$db = mysqli_select_db($connection, "nyr"); 		// Selecting Database


	//Fetching Values from URL


if(mysqli_connect_errno()) {

	echo "Error: Could not connect to database.";
	exit;

}else{
	$general_return["db_connect_success"] = true;
}



	//SIGNUP FORM //SIGNUP * SIGNUP * SIGNUP * SIGNUP * SIGNUP * SIGNUP * SIGNUP * SIGNUP SIGNUP 







if(isset($_POST['submit_signup'])){		//CHECK IF FORM IS SUBMITTED


	if(isset($_POST['email_signup']) && isset($_POST['password_signup'])){		//CHECK IF EMAIL OR PASSWORD IS EMPTY


		$email = mysqli_real_escape_string($connection, $_POST['email_signup']);		//CREATE EMAIL VAR
		$password = md5(mysqli_real_escape_string($connection, $_POST['password_signup']));		//CREATE PASS VAR

	}

	//FORM SUBMITTED

	//CHECKING FOR DUPLICATES


	$query = "SELECT * FROM information WHERE (email = '$email')";
	$check = mysqli_query($connection, $query);
	$checkrows = mysqli_num_rows($check);

	



	if ($checkrows == 1){
		
		echo "This username is already registered";
	
	}else{

		$query = "INSERT INTO information (email, password) VALUES ('$email','$password')";
		$result = mysqli_query($connection, $query);
		$general_return["new_account_creation"] = true;
		


		if (mysqli_query($connection, $result)) {

				echo "SUCCESSFULLY INSERTED INTO DATABASE"; 	 //RESULT INSERTION SUCCESS MESSAGE

			}else{
				
				echo "COULDNT INSERT INTO DATABASE"  ;  	// SHOW ERROR IF RESULT INSERTION DID NOT WORK
			

			}
		

		echo "FORM SUCCESSFULLY SUBMITTED"; 
	
	}

}


		//LOGIN * LOGIN * LOGIN * LOGIN * LOGIN



if(isset($_POST['submit_login'])){		//CHECK IF SUBMIT CONTAINS SOMETHING
	

	if(isset($_POST['email_login']) && isset($_POST['password_login'])){		//CHECK IF USERNAME AND PASSWORD CONTAIN SOMETHING
		


		$email = mysqli_real_escape_string($connection, $_POST['email_login']);					//DEFINE EMAIL VARIABLE
		$password = md5(mysqli_real_escape_string($connection, $_POST['password_login']));		//DEFINE PASSWORD VARIABLE
		$query = "SELECT * FROM information WHERE (email = '$email')";							//GET SHIT FROM TABLE WHERE THE EMAIL IS PRESENT
		$result = mysqli_query($connection, $query);											//SAVE SHIT INTO QUERIED RESULT
		$query = "SELECT * FROM information WHERE (email = '$email')";
		$check = mysqli_query($connection, $query);
		$checkrows = mysqli_num_rows($check);

		if($checkrows==0){

			echo json_encode($general_return);

		}

		while ($row = $result->fetch_assoc()) {		//CHECK PASSWORD ELIGIBILITY
			

			if($row["password"] == $password){

				$general_return['login_success'] = true;


				echo json_encode($general_return);

			}else{

				echo json_encode($general_return);

			}
		}
		


		$rowcount=mysqli_num_rows($result);

		
		if($rowcount == 1){
			
			// var_dump($result);

		}else{

			// var_dump($rowcount);

		}


	}
}


mysqli_close($connection); // Connection Closed


?>
