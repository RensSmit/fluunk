<!DOCTYPE html>
<?php 
session_start();
?>
<html lang="en">
	<head>
		<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" href="css/login.css">
	</head>
<body>
	<div class="container">
		<div class="venster">
			<img class="logo" src="img/fluunk-high-resolution-logo-black-on-transparent-background.png" alt="fluunk logo">
			
			<form class="forms" method="POST" action="save_member.php">	
				<div class="data">
					<h1>Registration</h1>
				</div>
				<div class="data">
					<label>Username</label>
					<input type="text" name="username" class="form" required="required"/>
				</div>
				<div class="password"> <p class="pass">password must be 8 characters</p><p>*</p></div>
				<div class="data">
					<label>Password</label>
					<input id="password" type="password" name="password" class="form" required="required"/>
					 
				</div>
				<div class="data">
					<label>Firstname</label>
					<input type="text" name="firstname" class="form" required="required"/>
				</div>
				<div class="data">
					<label>Lastname</label>
					<input type="text" name="lastname" class="form" required="required"/>
				</div>


				<?php
					if(ISSET($_SESSION['success'])){
				?>
				<div class="alert alert-success"><?php echo $_SESSION['success']?></div>
				<?php
					unset($_SESSION['success']);
					}
				?>

				<div class="data">
					<button class="loginBtn" name="register"><span class="glyphicon glyphicon-save"></span> Register</button>
				</div>
			</form>	
		<a href="login.php">Already a member? Log in here...</a>
		</div>
</body>
</html>