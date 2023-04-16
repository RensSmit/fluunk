<!DOCTYPE html>
<?php 
//starting the session
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
			
			<form class="forms" method="POST" action="login_query.php">	
				
				<div class="data"><h1>Login</h1></div>
				<div class="data">
					<label>Username</label>
					<input type="text" name="username" class="form" required="required"/>
				</div>

				<div class="data">
					<label>Password</label>
					<input type="password" name="password" class="form" required="required"/>
				</div>
				
				<?php
					if(ISSET($_SESSION['error'])){
				?>
					<div class="alert alert-danger"><?php echo $_SESSION['error']?></div>
				<?php
					session_unset($_SESSION['error']);
					}
				?>

				<div class="data">
					<button class="loginBtn" name="login"><span></span>Login</button>
				</div>
				<a href="index.php">Not a member yet? Register here...</a>
			</form>	
		</div>
	</div>
</body>
</html>
