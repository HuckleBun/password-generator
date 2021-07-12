// Assignment code here
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
  var allowedCriteria = [];

  console.log("Length:", length)
  if (confirmNumber) {
    allowedCriteria = allowedCriteria.concat(number);
    console.log("Numbers: Yes")
  } else {
    console.log("Numbers: No")
  }

  if (confirmSpecial) {
    allowedCriteria = allowedCriteria.concat(special);
    console.log("Special Characters: Yes")
  } else {
    console.log("Special Characters: No")
  }

  if (confirmUpper) {
    allowedCriteria = allowedCriteria.concat(upperLetter);
    console.log("Uppercase letters: Yes")
  } else {
    console.log("Uppercase letters: No")
  }

  if (confirmLower) {
    allowedCriteria = allowedCriteria.concat(lowerLetter);
    console.log("Lowercase letters: Yes")
  } else {
    console.log("Lowercase letters: No")
  }
  console.log(allowedCriteria);

  var password = [];

  // Random selection of variables
  for (var i = 0; i <= length; i++) {
    var randPicks = allowedCriteria[Math.floor(Math.random() * length.length)];
    password.push(randPicks);
  }
  console.log(randPicks)
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
