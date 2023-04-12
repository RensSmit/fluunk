<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <style type="text/css">
      #main{
        background-color: #C9EFC7;
        width: 60rem;
        height: 30rem;
        border-radius: 3rem;
      }

      h1{
        color: white;
        background-color: #31C48D;
        border-top-right-radius: 3rem;
        border-top-left-radius: 3rem;
      }

      .text{
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
        color: white;
        width: 25rem;
        font-weight: bold;
        font-size: 2rem;
        border: none;
        text-align: center;
      }

      .text:focus{
        outline: none;
      }

      hr{
        width: 25rem;
        margin-top: 0px !important;
      }

      #sub{
        width: 25rem;
        height: 3rem;
        background-color: white;
        border: none;

      }

    </style>
</head>
<body>
  <center>
    <div id="main">
    <h1>Fluunk Login</h1>
    <form method="POST">
      <input type="text" name="username" class="text" autocomplete="off" required 
      placeholder="username"><br><hr><br>
      <input type="password" name="password" class="text" autocomplete="off" required
      placeholder="password"><br><hr><br>
      <input type="submit" name="submit" id="sub">
    </form>
  </div>
</center>
</body>
</html>

<?php
  mysql_connect("localhost", "root", "password");
  mysql_selectdb("simplelogin");


  if (isset($_POST['submit'])) {
    $un=$_POST['username'];
    $pw=$_POST['password'];
    $sql=mysql_query("select password from user where username='$un'");
    if ($row=mysql_fetch_array($sql)) {
      if ($pw==$row['password']) {
          header("location:index.html");
          exit();
        }
        else
          echo "<script>alert('Invalid Password')</script>"
    }
    else 
      echo "<script>alert('Invalid Username')</script>"



  }
?>