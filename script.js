// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Ask the user for their password criteria
var pssWord = prompt("Length of password should be between 8 and 128 characters", "");
var psswrd2 = prompt("Your password can include lowercase, uppercase, numeric, and/or special characters", "");
  // generate the password based off the criteria

  // `return` that password
  return "Avery"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
