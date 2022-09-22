var numbersofDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numbersofDrum; i++) {

  // detecting the button press
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    var buttoninnerHTML = this.innerHTML;

    makesound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
  }
}


// detecting keyboard press

document.addEventListener("keypress", function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
})


function makesound(key) {

  switch (key) {
    case "I":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "f":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "e":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "a":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "n":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "y":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "i":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);

  }
}

function buttonAnimation(currentkey) {

  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function() {

    activeButton.classList.remove("pressed");
  }, 100);
}
