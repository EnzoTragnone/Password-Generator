// password gen DOM
var generateBtn = document.querySelector("#generateBtn");
var passwordText = document.querySelector("#password");
//password list DOM
var passwordList = document.querySelector("#passwordList");
//length slider DOM
var lengthInput = document.querySelector("#lengthInput");
var lengthCounter = document.querySelector("#lengthCounter");
//reset btn for criteria clear
var resetBtn = document.querySelector("#resetBtn");

//possible characters for password

//arrays of characters
let possibleChoices = [
  uppercaseChoice = {
    characters : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    html : "upperInput",
  },
  lowercaseChoice = {
    characters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    html : "lowerInput",
  },
  specialChoice = {
    characters : ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",']',"^","_","`","{","|","}","~"],
    html : "specialInput",
  },
  numericChoice = {
    characters : ["1","2","3","4","5","6","7","8",'9',"0"],
    html : "numericInput",
  }
];

//displays what length it is
lengthCounter.innerHTML = "(" + lengthInput.value + ")";
lengthInput.oninput = function () {
  lengthCounter.innerHTML = "(" + this.value + ")";
};

//saves password to local storage if decided

//generates final password and displays on user end
function generate() {
  for (let i = 0; i < lengthInput.value; i++) {

    let randomIndex = Math.floor(Math.random() * possible.length);
  
    let item = possible[randomIndex];
  
    finalAnswer = finalAnswer + item 
  }
  passwordText.innerHTML = finalAnswer
}

//validates minimum criteria has been achieved
function validate() {
    for (let i = 0; i < possibleChoices.length; i++) {
      check = document.getElementById(possibleChoices[i].html)
      if (check.checked) {
        possible = possible.concat(possibleChoices[i].characters)
      }
    };

    if (possible.length === 0) {
      passwordText.innerHTML = "Please try again picking at least one of the criteria below"
    } else {
      generate();
    }
};

//calls function based on user input as well as resets values
generateBtn.addEventListener("click", function() {
  possible = [];
  finalAnswer = "";
  validate();
});


//saves passwords to LocalMemory

//retrieves passwords from LocalMemory

//reset btn resets all prompts

