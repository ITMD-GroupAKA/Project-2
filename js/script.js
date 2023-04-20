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

window.onload = function() {
  const slideshow = document.getElementById('slideshow');
  const slides = slideshow.querySelectorAll('.slide');
  let index = 0;
  
  slides[index].classList.add('active');
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 2000);
};
