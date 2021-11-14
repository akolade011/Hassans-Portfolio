



let getButton = document.querySelector(".navbar-toggler");
let hideheader = document.querySelector(".header-content");


let numCircle = 6;
let colors = [];
let pickedColor;
let circle = document.querySelectorAll(".circle");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

getButton.addEventListener("click", function () {

  const curColour = hideheader.style.zIndex;

  // if( hideheader.style.zIndex = "1"){
  //   hideheader.style.zIndex = "0"
  //   hideheader.style.backgroundColor = "transparent";
  // }

  if (curColour === '0') {
    hideheader.style.zIndex = "1"
  }
  else {
    hideheader.style.zIndex = "0"
  }

})



// getButton.addEventListener("onclick",function(){hideheader.style.zIndex = "1";

// })

let showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);

    setTimeout(function () { showText(target, message, index, interval); }, interval);

  }
}
$(function () {
  showText("#messgSlide", " Front End Developer", 0, 150);


});











//form section

window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
formbutton("create", {
  action: "https://formspree.io/f/xdoyrqkq",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "Enter a Message",
    },
    { type: "submit" }
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});



//Color Game


init();

function init() {
  // mode buttons event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected");
      this.textContent === "Easy" ? numCircle = 3 : numCircle = 6;
      reset();
    });
  }

  for (var i = 0; i < circle.length; i++) {
    //add click listeners to circles
    circle[i].addEventListener("click", function () {
      //grab color of clicked circle
      var clickedColor = this.style.background;
      //compare color to pickedColor Var
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "CORRECT!";
        messageDisplay.style.color = "green"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);

      } else {
        this.style.background = "#000000";
        messageDisplay.textContent = "TRY AGAIN!";
        messageDisplay.style.color = "red"
      }
    });
  }

  reset();
}

function reset() {
  colors = generateRandomColors(numCircle);
  // Pick a new random color from array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  // when play again is clicked the "correct" message goes away
  messageDisplay.textContent = "";
  // Change colors of squares
  for (var i = 0; i < circle.length; i++) {
    if (colors[i]) {
      circle[i].style.display = "block";
      circle[i].style.background = colors[i];
    } else {
      circle[i].style.display = "none";
    }
  }

}


// Reset Button
resetButton.addEventListener("click", function () {
  reset();
})


function changeColors(color) {
  //loop through all circles
  for (var i = 0; i < circle.length; i++) {
    // change each color to match given color
    circle[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue"from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
