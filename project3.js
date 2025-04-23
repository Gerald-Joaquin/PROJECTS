const validUserName = "Gerald Joaquin";
const validPassword = "Gerald_12345";

var nameError = document.getElementById("name-error");
var passwordError = document.getElementById("password-error");

// Validate Username
function validateName() {
  var name = document.getElementById("contact-name").value.trim();

  if (name.length === 0) {
    nameError.innerHTML = "Name is required!";
    return false;
  }

  if (name !== validUserName) {
    nameError.innerHTML = "Incorrect Username!";
    return false;
  }

  nameError.innerHTML = ""; // Clear the error message
  return true;
}

// Validate Password
function validatePassword() {
  var password = document.getElementById("contact-password").value.trim();

  if (password.length === 0) {
    passwordError.innerHTML = "Password is required!";
    return false;
  }

  if (password !== validPassword) {
    passwordError.innerHTML = "Incorrect Password";
    return false;
  }

  passwordError.innerHTML = ""; // Clear the error message
  return true;
}

// Form validation and redirection
function validateForm(event) {
  // Prevent form submission if validation fails
  if (!validateName() || !validatePassword()) {
    event.preventDefault(); // Prevent the form from submitting
    return false;
  }

  // Redirect to another page if credentials are correct
  window.location.href = "PROJECT2/project2.html"; // Change this URL to your target page
  return true;
}
