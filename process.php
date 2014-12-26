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
			if(isset($_POST['emailsignup'])){ 
				$email = mysqli_real_escape_string($connection, $_POST['emailsignup']);
				} 
			if(isset($_POST['passwordsignup'])){ 
				$password = md5(mysqli_real_escape_string($connection, $_POST['passwordsignup']));
				echo $password;
			} 

				$sql = "INSERT INTO information (id, first, last, email, dob, doj, pass) VALUES ('','','', '$email','','','$password')";
				$query = mysqli_query($connection, $sql);
				if (mysqli_query($connection, $query)) {
						echo "suceeeyyyeeess";    // Iterate and display result
					} else {
						echo "error"  ;  // Show error
					}
				//Insert query
				echo "Form Submitted Succesfully";

		
		mysqli_close($connection); // Connection Closed
		?>



</body>
</html>