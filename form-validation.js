function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length >= 6) {
    //Displays a message confirming that a valid username was entered
    document.getElementById("usernameError").innerHTML="Good username";
    //Removes the error class (turns items red)
    document.getElementById("usernameGroup").classList.remove("has-error");
    //Adds the success class (turns items green)
    document.getElementById("usernameGroup").classList.add("has-success");
  } else if (userEntered.length == 0) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username field cannot be left blank";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  } else {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  //Testing for blank password field
  if (passEntered.length == 0) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password field cannot be left blank";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else if (passEntered != "password") {
    //Displays a message confirming a valid password was entered
    document.getElementById("passwordError").innerHTML="Good password.";
    //Removes the error class (turns items red)
    document.getElementById("passwordGroup").classList.remove("has-error");
    //Adds the success class (turns items green)
    document.getElementById("passwordGroup").classList.add("has-success");
  } else {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
}
