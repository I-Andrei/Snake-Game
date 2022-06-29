let squares = ""
let snakePos = 144, foodPos = 154
let up = 0, down = 0, left = 0, right = 0

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
  if (direction == "up")
    snakePos -= 20
  if (direction == "down")
    snakePos += 20
  if (direction == "left")
    --snakePos
  if (direction == "right")
    ++snakePos
  document.getElementById("snakeGrid").innerHTML = squares
}

window.onload = gridSquares;
let direction = ""

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      direction = "left"
      break;
    case 38:
      direction = "up"
      break;
    case 39:
      direction = "right"
      break;
    case 40:
      direction = "down"
      break;
    }
};

setInterval(gridSquares, 500, direction);






