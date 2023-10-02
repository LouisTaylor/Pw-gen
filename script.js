// Global variables for the following functions
var generateBtn = document.querySelector("#generate"); // This selects the button language in CSS by ID.
var caseType = ["Lowercase", " Uppercase", " Numeric", " Special Characters"]
var passwordRange = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128]
var characters = "1234567890!@#$%^&*()qwertyuiopasdfghjklzxcvbnm"

// the function to generate a random password output as aided by "https://www.programiz.com/javascript/online-compiler/?ref=85f9cf89" 
function gRandomPass(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } return result;
}

//function to provide selectors
function generatePassword() {
  //initial instructions
    alert("Password must contain the following:\nMinimum of 8 characters\nMust include one of the following: " + caseType)
  var caseTypeTwo = ["lowercase", "uppercase", "numeric", "special Characters"]

  //Text style request. This forces you to opt in to one of the following text styles.
  var textStyle = prompt("What style of " + caseType + " would you like?\nPlease pick just one.") 

  //all answeres need a case sensativety removal see above caseTypeTwo variable
  textStyle = textStyle.toLowerCase();

  //This makes sure you provide a correct answer to text styles or you'll have to start over.
if (!textStyle || !caseTypeTwo.includes(textStyle)) {
    window.alert("Try Again!"); return
} 

    var passwordLength = prompt("Please pick as password length of 8-128 characters.") 
    
    //all prompt answers are strings, and thusly the string needs to be converted to a number
    var passwordValue = Number(passwordLength)

    //must provide a number of the appropiate range or start over.
if (!passwordLength || !passwordRange.includes(passwordValue)) {
        window.alert("Try Again!"); return
}
  if (caseTypeTwo.includes(textStyle) && passwordRange.includes(passwordValue)) { //if you've answered correctly thus far, call the random password function
    var passwordResult = gRandomPass(passwordLength)
}

document.getElementById("password").value = passwordResult; //pay off result: replace the text in the textarea box with the password result. This time its tide to the html element rather than css ID.
}

generateBtn.addEventListener("Click", generatePassword) //tied to the css button via css ID #password

// to do: refactor all querySelector's with getElmentbyID to keep it consistant and elmimate the need to flip through three pages.
