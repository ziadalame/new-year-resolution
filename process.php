<html>
<head>
	<title></title>
</head>
<body>

	<?php

		$username = "root";
		$password = "";
		$hostname = "localhost";
		$database = 'nyr';


		$connection =mysqli_connect($hostname, $username, $password, $database); // Establishing Connection with Server..
		$db = mysqli_select_db($connection, "nyr"); // Selecting Database
		//Fetching Values from URL


			if(mysqli_connect_errno()) {
			echo "Error: Could not connect to database.";
			exit;
			}else{
				echo "Connected to database - ";
			}



			//SIGNUP FORM

			if(isset($_POST['submit_signup'])){//CHECK IF FORM IS SUBMITTED
				if(isset($_POST['email_signup']) && isset($_POST['password_signup'])){//CHECK IF EMAIL OR PASSWORD IS EMPTY
					$email = mysqli_real_escape_string($_POST['email_signup']);//CREATE EMAIL VAR
					$password = md5(mysqli_real_escape_string($connection, $_POST['password_signup']));//CREATE PASS VAR
				}

				//FORM SUBMITTED

					$query = "INSERT INTO information (email, pass) VALUES ('$email','$password')";
					$result = mysqli_query($connection, $query);
					if (mysqli_query($connection, $result)) {
							echo "SUCCESSFULLY INSERTED INTO DATABASE";    //RESULT INSERTION SUCCESS MESSAGE
						} else {
							echo "COULDNT INSERT INTO DATABASE"  ;  // SHOW ERROR IF RESULT INSERTION DID NOT WORK
						}
				echo "FORM SUCCESSFULLY SUBMITTED";
			}else{
				echo "FORM SUBMIT FAILED";
			}


			//LOGIN SHIT
			if(isset($_POST['submit_login'])){//CHECK IF SUBMIT CONTAINS SOMETHING
				if(isset($_POST['email_login']) && isset($_POST['password_login'])){//CHECK IF USERNAME AND PASSWORD CONTAIN SOMETHING
					$email = mysqli_real_escape_string($_POST['email_login']);//DEFINE EMAIL VARIABLE
					$password = md5(mysqli_real_escape_string($connection, $_POST['password_login']));//DEFINE PASSWORD VARIABLE

					$query = "SELECT * FROM information WHERE (email = '$email')";//GET SHIT FROM TABLE WHERE THE EMAIL IS PRESENT
					var_dump($query);
					$result = mysqli_query($connection, $query);//SAVE SHIT INTO QUERIED RESULT
					var_dump($result);
					while ($row = $result->fetch_assoc()) {//CHECK PASSWORD ELIGIBILITY
				        if($row["pass"] == $password){
				        	echo "You are now logged in";
				        }else{
				        	echo "Incorrect username or password.";
				        }
				    }
					$rowcount=mysqli_num_rows($result);

					if($rowcount == 1){
						var_dump($result);
					}else{
						var_dump($rowcount);
					}


				}
			}

		
		mysqli_close($connection); // Connection Closed
		?>



</body>
</html>