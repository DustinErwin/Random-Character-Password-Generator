let spcChars = [
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

let lwrCase = [
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

let upprCase = [
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

let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function askRequirements() {
  let passLength = parseInt(
    prompt("How many characters will the password be?")
  );

  if (isNaN(passLength) === true || passLength > 128 || passLength < 8) {
    alert("May only choose a number between 8 and 128.");

    return askRequirements();
  }

  let hasSpcChars = confirm("Add special characters?");

  let hasLwrCase = confirm("Add lower case characters?");

  let hasUpprCase = confirm("Add upper case characters?");

  let hasNumbers = confirm("Add numbers?");

  if (hasSpcChars || hasLwrCase || hasUpprCase || hasNumbers) {
    let requirements = {
      passLength: passLength,
      hasSpcChars: hasSpcChars,
      hasLwrCase: hasLwrCase,
      hasUpprCase: hasUpprCase,
      hasNumbers: hasNumbers,
    };

    return requirements;
  } else {
    alert("You must choose at least one character type.");
    return askRequirements();
  }
}

function randomizer(obj) {
  let indx = Math.floor(Math.random() * obj.length);

  let rndItem = obj[indx];

  return rndItem;
}

function generatePassword() {
  //Asks user for password requirements letar passReq = askRequirements();
  let passReq = askRequirements();
  //Creates variable arrays
  let passPool = [];

  let passDone = [];

  let count = 0;

  // Grabing random pool of characters to guarantee requirements are met
  if (passReq.hasSpcChars === true) {
    count++;
    for (let i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(spcChars));
    }

    passDone.push(randomizer(spcChars));
  }

  //
  if (passReq.hasLwrCase) {
    count++;
    for (let i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(lwrCase));
    }

    passDone.push(randomizer(lwrCase));
  }

  //
  if (passReq.hasUpprCase) {
    count++;
    for (let i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(upprCase));
    }

    passDone.push(randomizer(upprCase));
  }

  //
  if (passReq.hasNumbers) {
    count++;
    for (let i = 0; i < passReq.passLength; i++) {
      passPool.push(randomizer(number));
    }

    passDone.push(randomizer(number));
  }

  //Adding characters to meet required length
  console.log(count);

  for (let i = 0; i < passReq.passLength - count; i++) {
    let passChar = randomizer(passPool);

    passDone.push(passChar);
  }

  //Makes it all a single prinatble string
  return passDone.join("");
}

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
