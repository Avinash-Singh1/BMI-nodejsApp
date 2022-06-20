function validate() {
  if (isEmpty() == false) {
    return false;
  }
  if (validateEmail() == false) {
    return false;
  } else if (pass() == false) {
    return false;
  }
}

function isEmpty() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;

  if (e == "" || p == "") {
    alert("Fields Shout not be empty ");
    return false;
  }
}

function validateEmail() {
  let e = document.getElementById("email").value;
  var specialChar = e.indexOf("@");
  var dotChar = e.lastIndexOf(".");
  if (specialChar < 1 || dotChar < specialChar + 2 || dotChar + 2 >= e.length) {
    alert("Invalid email format . ");
    return false;
  }
}

function pass() {
  let password = document.getElementById("pass").value;

  if (password.length > 6) {
    alert("Login Successfully. ");
    return true;
  } else {
    alert("password should be atleast of 7 characters ");
    return false;
  }
}
