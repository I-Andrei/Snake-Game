let squares = ""
let snakePos = 144, foodPos = 154

function gridSquares() {
  squares = ""
  for (let i = 1; i <= 400; ++i){
    if(i == snakePos)
      squares += "<div class=snakecolor></div>"
    else if (i == foodPos)
      squares += "<div class=food></div>"
    else
      squares += "<div class=cell-grid></div>"
  }
    ++snakePos
    console.log(snakePos)
  document.getElementById("snakeGrid").innerHTML = squares
}

window.onload = gridSquares;

setInterval(gridSquares, 1000)

document.onkeydown = function (event) {
  switch (event.keyCode) {
     case 37:
        console.log("Left key is pressed.");
        break;
     case 38:
        console.log("Up key is pressed.");
        break;
     case 39:
        console.log("Right key is pressed.");
        break;
     case 40:
        console.log("Down key is pressed.");
        break;
  }
};




