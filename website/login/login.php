<!DOCTYPE html>
<html>
  <head>
    <title>Login Page</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="js/script.js"></script>
  </head>
  <body>
    <div class="container">
      <h1>Log in</h1>
      <form action="php/db_conn.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <button type="submit" onclick="login()">Log in</button>
      </form>
      <p>Don't have an account? <a href="register.html">Register here</a>.</p>

      <button><a href="/fluunk/website/index.html">Log in</a></button>
    </div>

  </body>
</html>

<?php
echo "nigger";
?>