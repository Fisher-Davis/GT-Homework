// Assignment Code
  var generateBtn = document.querySelector("#generate");
  var specialCharacters = "!@#$%^&*()";
  var specialCharactersArr = specialCharacters.split("");
  var lowerCase = "abcdefgihjklmnopqrstuvwxyz";
  var lowerCaseArr = lowerCase.split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperCaseArr = upperCase.split("")
  var numbers = "0123456789";
  var numbersArr = numbers.split("")
   var finalPassword ="";
 

  function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password 
 
  }
  function generatePassword() {
    var allChar =[];
   

    var passwordLength = prompt('How many characters do you want in your password?', 'must be between 8 and 128');

      if(passwordLength < 8 || passwordLength > 128){
          window.alert('Must be between 8 and 128')
          
      } 
            
else{
  if(confirm('Would you like Uppercase letters in your password?')){
  Array.prototype.push.apply(allChar, upperCaseArr);
  }

  if(confirm('Would you like lowercase letters in your password?')){
  Array.prototype.push.apply(allChar, lowerCaseArr)
  }

  if(confirm('would you like numbers in your Password?')){
  Array.prototype.push.apply(allChar, numbersArr)
  }

  if(confirm('Would you like Special Characters in the password?')) {
  Array.prototype.push.apply(allChar, specialCharactersArr)
  }
 
  if(allChar.length === 0){
alert('You must select at least 1 character type to make a password.')
}

else{
  for(var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random()* allChar.length);
    allChar += allChar [random]
  }
  document.getElementById("password").innerHTML = finalPassword;
}
};

    
  
    



    
     
    
  


  }
 generateBtn.addEventListener('click', writePassword)
  

