//Define possible character arrays
var spcChars = [
  "`",
  "~",
  "!",
  "@",
  "#",
  "$",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "|",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];

var lwrCase = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

var upprCase = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Function to receive user input for password requirements
function askRequirements() {
  var passLength = parseInt(
    prompt("How many characters will the password be?")
  );

  if (isNaN(passLength) === true || passLength > 128 || passLength < 8) {
    alert("May only choose a number between 8 and 128.");
    return;
  }

  var hasSpcChars = confirm("Add special characters?");

  var hasLwrCase = confirm("Add lower case characters?");

  var hasUpprCase = confirm("Add upper case characters?");

  var hasNumbers = confirm("Add numbers?");

  //Store requirement values in an array
  if (hasSpcChars || hasLwrCase || hasUpprCase || hasNumbers) {
    var requirements = {
      passLength: passLength,
      hasSpcChars: hasSpcChars,
      hasLwrCase: hasLwrCase,
      hasUpprCase: hasUpprCase,
      hasNumbers: hasNumbers,
    };
    return requirements;

    //Ends if no character type selected
  } else {
    alert("You must choose at least one character type.");
  }
}

//Randomizer function
function randomizer(obj) {
  var indx = Math.floor(Math.random() * obj.length);
  var rndItem = obj[indx];

  return rndItem;
}

function generatePassword() {
  //Asks user for password requirements
  var passReq = askRequirements();

  //Creates variable arrays
  var passPool = [];

  var passDone = [];

  var count = 0;

  // Grabing random pool of characters to guarantee requirements are met
  if (passReq.hasSpcChars) {
    count++;
    for (var i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(spcChars));
    }

    passDone.push(randomizer(spcChars));
  }

  //Same
  if (passReq.hasLwrCase) {
    count++;
    for (var i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(lwrCase));
    }

    passDone.push(randomizer(lwrCase));
  }

  //Same
  if (passReq.hasUpprCase) {
    count++;
    for (var i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(upprCase));
    }

    passDone.push(randomizer(upprCase));
  }

  //Same
  if (passReq.hasNumbers) {
    count++;
    for (var i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(number));
    }

    passDone.push(randomizer(number));
  }

  //Adding characters to meet required length
  for (var i = 0; i < passReq.passLength - count; i++) {
    var passChar = randomizer(passPool);

    passDone.push(passChar);
  }

  //Makes it all a single prinatble string
  return passDone.join("");
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
