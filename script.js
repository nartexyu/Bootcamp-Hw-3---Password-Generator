// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // variables containing string of characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var special = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

  // one empty array for chosen chars and one empty array to push randomly selected chars from chosen
  var chosenArr = [];
  var passArr = [];

  // while loop to ensure user chooses between 8 and 128 char length for password
  var lengthLoop = true;
  while (lengthLoop) {
    var howMany = prompt("Choose a length between 8 and 128 characters for your password: ");
    if (howMany < 8 || howMany > 128) {
      alert("Please choose a length between 8 and 128 characters.");
    }
    else {
      break;
    };
  }

  // variables to store boolean if user wants each of the 4 types of chars in their password
  var confirmLower = confirm("Would yougit  like to include lower case letters in your password?");
  var confirmUpper = confirm("Would you like to include upper case letters in your password?");
  var confirmNumber = confirm("Would you like to include numbers in your password?");
  var confirmSpecial = confirm("Would you like to include special characters in your password?");

  // if statements to push confirmed chars into array of chosen chars
  if (confirmLower) {
    for (i of lowerCase.split("")) {
      chosenArr.push(i)
    }
  };
  if (confirmUpper) {
    for (i of upperCase.split("")) {
      chosenArr.push(i)
    }
  };
  if (confirmNumber) {
    for (i of numbers.split("")) {
      chosenArr.push(i)
    }
  };
  if (confirmSpecial) {
    for (i of special.split("")) {
      chosenArr.push(i)
    }
  };

  // for loop to randomly select char and put in final password array
  for (var i = 0; i < howMany; i++) {
    var randomNum = Math.floor(Math.random() * chosenArr.length)
    passArr.push(chosenArr[randomNum]);
  }

  // joins elements of passArr into a string
  var password = passArr.join("");

  // updates #password to have value of password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

