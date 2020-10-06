var spcChars = ['`','~','!','@','#','$','^','&','*','(',')','_','-','=','+','|','{','}','[',']',':',';',',','<','.','>','/','?'];

var lwrCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

var upprCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

var number = ['1','2','3','4','5','6','7','8','9','0'];



function askRequirements() {
  
  var passLength = parseInt(
    prompt('How many characters will the password be?'));

  if (isNaN(passLength) === true || passLength > 128 || passLength < 8){
    alert('May only choose a number between 8 and 128.');
    return;

  };
  
  var hasSpcChars = confirm('Add special characters?');

  var hasLwrCase = confirm('Add lower case characters?');

  var hasUpprCase = confirm('Add upper case characters?');

  var hasNumbers = confirm('Add numbers?')

  if (hasSpcChars||hasLwrCase||hasUpprCase||hasNumbers){
   
    var requirements = {
      passLength: passLength,
      hasSpcChars: hasSpcChars,
      hasLwrCase: hasLwrCase,
      hasUpprCase: hasUpprCase,
      hasNumbers: hasNumbers,
    };
    return requirements;

  } else {
    alert('You must choose at least one character type.')
  };
}

function randomizer(obj) {
  var indx = Math.floor(Math.random() * obj.length);
  var rndItem = obj[indx];

  return randElement;
}



 function generatePassword() {

    var passReq = askRequirements();

    var passPool = compilation();

    var password = [];

    function compilation() {

      if (passReq.hasSpcChars) {
        var passPool = passPool.concat.spcChars;
      };

      if (passReq.hasLwrCase) {
        var passPool = passPool.concat.lwrCase;
      };

      if (passReq.hasUpprCase) {
        var passPool = passPool.concat.upprCase;
      };

      if (passReq.hasNumbers) {
        var passPool = passPool.concat.number;
      };

      return passPool;

    }

    for (var i = 0; i < passReq.passLength; i++) {
      var passChar = getRandom(passPool);
  
      password.push(passChar);
    }

 }










// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
