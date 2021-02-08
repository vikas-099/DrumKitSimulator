//For clicking button!
for(var i=0;i<7;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",gotClicked);
}
function gotClicked()
{
  keyboardSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

//For keyboard strokes
document.addEventListener("keydown",keyboardStroke);
function keyboardStroke(){
  keyboardSound(event.key);
  buttonAnimation(event.key);
}

//For making sounds on both click and keyboard
function keyboardSound(something){
  keyPressed = something;
  switch (keyPressed) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log("Not a valid keystroke or you clicked the wrong button!");
  }
}
function buttonAnimation(halfClass)
{
  var fullClass = "."+halfClass;
  document.querySelector(fullClass).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(fullClass).classList.remove("pressed");
  },100)
}
