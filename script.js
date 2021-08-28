// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Why do we have these strings here? 
// we use these string characters to pull data from for the passowrd generator.

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()_+";
function getRandom(str) {

  // What is going on here?
  // it is going to generate a random number 

  var randomIndex = Math.floor(Math.random() * str.length);

  // and here?
  // This is going to return a random strings but with in the string length decided by the user.

  return str[randomIndex];
}
// Write password to the #password input 

function writePassword() {


  // What is the difference between return and console log?
  // Console log passes arguments to the web console and return passes a specific function

  // What happens if we console log our password instead of returning it?
  // It will print out on the console

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {

  // Ask the user for their password criteria
  // 8 characters and no more than 128 characters
  // Prompt the user for the password length

  var length = prompt("How long would you like your password to be?");

  // If the length is less than 8 or more than 128

  if (length < 8 || length > 128) {

    // alert the user that they messed up
    alert("Your password must be between 8 and 128");

    // exit the function early, (use the return keyword)
    return "";
  }

  // What are we doing here?
  // Prompting the user to confirm what characters they want to use by clicking ok,
  // or clicking cancel to reject that choice.

  var useLowercase = confirm("Would you like to use lower case characters?");
  var useUppercase = confirm("Would you like to use upper case characters?");
  var useNumeric = confirm("Would you like to use numeric characters?");
  var useSpecial = confirm("Would you like to use special characters?");

  // Why is this if statement necessary?
  //User must supply at least one character type to generate a password

  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("We need at least one option to be chosen.");
    return "";
  }
  // generate the password based off the criteria
  var pass = "";
  
  for (let i = 0; i < length; i++)  {
    if (useLowercase) {
      pass += getRandom(lowercase);
    }
    if (useUppercase) {
      pass += getRandom(uppercase);
    }
    if (useNumeric) {
      pass += getRandom(numeric);
    }
    if (useSpecial) {
      pass += getRandom(special);
    }
  }
  return pass.substr(0, length);
} 
// `return` that password
// Add event listener to generate button