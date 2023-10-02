// Assignment Code
var generateBtn = document.querySelector("#generate");
var caseType = ["Lowercase", " Uppercase", " Numeric", " Special Characters"]
var passwordRange = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128]
// var passwordLength = prompt ("How long of a password would you like?")

// Write password to the #password input
// function prompt("Password must contain the following:\nMinimum of 8 characters\nMust include one of the following:"){

// }

// var passwordLength = window.prompt("How long of a Password would you like?")
  
// var passwordType = window.prompt("Which of the following case types would you like:" + caseType)


var generatePassword = function() {
  alert("Password must contain the following:\nMinimum of 8 characters\nMust include one of the following: " + caseType)
  var textStyle = prompt("What style of " + caseType + " would you like?") 
  
  if (!textStyle)
  return

  textStyle = textStyle.toLowerCase()

  var passwordLength = prompt("Please pick as password length of 8-128 characters.")

  if (!passwordLength)
  return



}




// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("Click", generatePassword())
// generateBtn.addEventListener("click", writePassword);