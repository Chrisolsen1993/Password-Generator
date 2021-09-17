// creating a variable that select the bouton generate from the html 
var generateBtn = document.querySelector("#generate");

// Writing password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// The function that execute the whole application
function generatePassword(){
  // Checking the password length who must be betwen and also including 8 and 128
  var passwordLength = 0 
  while (passwordLength<8 || passwordLength>128){
   passwordLength= prompt("Choose a length of at least 8 character and no more thant 128");
    
  }
  //Confirming what type of characters  users want to include in his password 
var confirmLowerCase = confirm("Do you want lowercase in your password");
var confirmUpperCase = confirm("Do you want uppperCase in your password");
var confirmNumber = confirm("Do you want any number in your character");
var confirmSpecialCharacter = confirm("Do you want any specialcharacter in your password?");
// Controling they choice by making sure that they choose at least one character
 while(!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecialCharacter){
   alert(
     "You must choose one of those character"
   )
   generatePassword();
 }
//Building the array of each type of characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var specialCharacter = ['@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ', ', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var passwordChoices=[];

//concatenating together whatever characters they confirm to chose from
if (confirmLowerCase){
   passwordChoices=passwordChoices.concat(lowerCase);
}

if (confirmUpperCase){
  passwordChoices=passwordChoices.concat(upperCase);
}
if (confirmNumber){
  passwordChoices=passwordChoices.concat(number);
}
if (confirmSpecialCharacter){ 
  passwordChoices=passwordChoices.concat(specialCharacter)
}
console.log(passwordChoices);

var randomPassword= "";
//loop through the number of character they picked which constitute the password length;
for ( var i= 0; i<passwordLength; i++){
  // randomly picking a number of index out of passwordChoices
  var numberPicked = Math.floor(Math.random()*passwordChoices.length);
  //adding each character to randomPassword to build up the full password
  randomPassword += passwordChoices[numberPicked];
  
  console.log(randomPassword);
}
return randomPassword;
}
