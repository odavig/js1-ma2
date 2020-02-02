//Question 1
const myFunctionExpression = function() {
  console.log("Oda")
}

//question 2
const button = document.querySelector(".btn");
button.addEventListener("click", clickable)

function clickable() {
  console.log("I was clicked!")
}

//question 3
const input = document.querySelector("#firstName");
input.addEventListener("keydown", keylogger)

function keylogger() {
  var keyUnicode = event.keyCode;
  var keyCharacter = String.fromCharCode(keyUnicode)
  console.log(keyCharacter)
}

//question 4
const btn = document.querySelectorAll("button")
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("mouseover", add)
}

function add() {
  for (var i = 0; i < btn.length; i++) {
    btn[i].className = "hover"
  }
}

//question 5
const buttonTres = document.querySelector("[data-animal= 'dog']")
buttonTres.addEventListener("mouseout", remove);

function remove() {
  buttonTres.classList.remove("hover");
}

//question 6
const li = document.querySelectorAll("li")
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", logValue)
}

function logValue() {
  for (var i = 0; i < btn.length; i++) {
    console.log(li[i])
  }
}

//question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow")
    break;

  case "cow":
    console.log("Moo")
    break;

  case "bird":
    console.log("Tweet")
    break;

  default:
  console.log("Harrumph")
}

//question 8
const sheep = ["Malcolm", "Anders", "Marie"];

function consoleSheep(sheepArray) {
  console.log(sheepArray)
}

sheep.forEach(consoleSheep);

//question 9
var myVar;
var counter = 0

function myFunction() {
  myVar = setInterval(alertFunc, 3000);

  function alertFunc() {
    if (counter === 5) {
      clearInterval(myVar);
    }
    counter++
    console.log("Hello world")
  }
} myFunction()

//question 10
function timedText() {
  const container = document.querySelector(".container")
  setTimeout(function(){ container.innerHTML = "Text updated" }, 2000);
} timedText()
