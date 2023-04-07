function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var users = JSON.parse(localStorage.getItem("users"));
  
    for (var i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        localStorage.setItem("currentUser", JSON.stringify(users[i]));
        window.location.href = "homepage.html";
        return;
      }
    }
  
    var message = document.getElementById("message");
    message.innerHTML = "Email or password is incorrect.";
  }
  


    /* klok */

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
    }
    
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    /**/ 

