// Function to display message
function sayCode() {
   alert("EMAIL US: ISUD@gmail.com");
}

// Call the function
document.getElementById("myBtn").onclick = sayCode;

function validate() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;
  
  if (name == "" || email == "" || message == "") {
    alert("All fields must be filled out");
    return false;
  }
}
