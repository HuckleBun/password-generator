// Assignment code here
var special = "!@#$%^&*()";
var number = "0123456789";
var upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var allowedCriteria = "";

function generatePassword() {
  var length = parseInt(prompt("Choose the length of your password. Must be between 8 and 128 characters."));

  // Check whether a valid input was entered into the prompt.
  while (!length || length < 8 || length > 128) {
    alert("Please provide a valid number");
    var length = parseInt(prompt("Please provide a number between 8 and 128."));
  }

    // Ask the user whether to include or not include different criteria in their password.
    var confirmNumber = confirm("Do you want your passsword to include numbers?")
    var confirmSpecial = confirm("Do you want your passsword to include special characters?")
    var confirmUpper = confirm("Do you want your passsword to include uppercase letters?")
    var confirmLower = confirm("Do you want your password to include lowecase numbers?")

  while (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {
    // Alert the user that they must choose at least one criteria if none selected.
    window.alert("You must choose at least one criteria for a secure password! Please try again.");
    var confirmNumber = confirm("Do you want your passsword to include numbers?")
    var confirmSpecial = confirm("Do you want your passsword to include special characters?")
    var confirmUpper = confirm("Do you want your passsword to include uppercase letters?")
    var confirmLower = confirm("Do you want your password to include lowecase numbers?")
  }

  // Log all the values that the user has entered and append each true value to "allowedCriteria" variable

  console.log("Length:", length)
  if (confirmNumber) {
    allowedCriteria += number;
    console.log("Numbers: Yes")
  } else {
    console.log("Numbers: No")
  }

  if (confirmSpecial) {
    allowedCriteria += special;
    console.log("Special Characters: Yes")
  } else {
    console.log("Special Characters: No")
  }

  if (confirmUpper) {
    allowedCriteria += upperLetter;
    console.log("Uppercase letters: Yes")
  } else {
    console.log("Uppercase letters: No")
  }

  if (confirmLower) {
    allowedCriteria += lowerLetter;
    console.log("Lowercase letters: Yes")
  } else {
    console.log("Lowercase letters: No")
  }
  console.log(allowedCriteria);

  // Random selection of characters
  var password = "";
  
  for (var i = 0; i < length; i++) {
    var genPass = allowedCriteria.charAt([Math.floor(Math.random() * allowedCriteria.length)]);
    password += genPass;
  }
  console.log(password)
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
