let squares = ""
foodPos = [ {x: 14, y: 14} ]
let snakeBody = [
{x: 14, y: 2}, 
{x: 14, y: 3}, 
{x: 14, y: 4} ]
let eatFood = 0, score = 0, maxScore = 0
let endgame = 0, line = 1, column = 1, snakeFound = 0

function gridSquares() {
  squares = ""
  if (direction == "up")
    snakeBody.push({x: snakeBody[snakeBody.length - 1].x - 1, y: snakeBody[snakeBody.length - 1].y})
  else if (direction == "down")
    snakeBody.push({x: snakeBody[snakeBody.length - 1].x + 1, y: snakeBody[snakeBody.length - 1].y})
  else if (direction == "left")
    snakeBody.push({x: snakeBody[snakeBody.length - 1].x, y: snakeBody[snakeBody.length - 1].y - 1})
  else if (direction == "right")
    snakeBody.push({x: snakeBody[snakeBody.length - 1].x, y: snakeBody[snakeBody.length - 1].y + 1})
  
  if (snakeBody[snakeBody.length - 1].x == foodPos[0].x && snakeBody[snakeBody.length - 1].y == foodPos[0].y){
    eatFood = 1
    foodPos[0].x = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    foodPos[0].y = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    ++score
    document.getElementById("score").innerHTML = "Score: " + score
  }

  if (direction !== "" && eatFood == 0){
    snakeBody.splice(0, 1)
    eatFood = 0
  }
  
  for (line = 1; line <= 20; ++line)
    for (column = 1; column <= 20; ++column){
      for (let j = 0; j < snakeBody.length; ++j)
        if (line == snakeBody[j].x && column == snakeBody[j].y)
          snakeFound = 1
      if (snakeFound == 1){
        squares += '<div class=snakecolor></div>'
        snakeFound = 0
      } else if (line == foodPos[0].x && column == foodPos[0].y)
        squares += '<div class=food></div>'
      else
        squares += '<div class=cell-grid></div>'
    }
  eatFood = 0
  document.getElementById("snakeGrid").innerHTML = squares

  if ((snakeBody[snakeBody.length - 1].x == 0 && direction == "up") || (snakeBody[snakeBody.length - 1].x == 21 && direction == "down") || (snakeBody[snakeBody.length - 1].y == 0 && direction == "left") || (snakeBody[snakeBody.length - 1].y == 21 && direction == "right"))
    ++endgame
  for (let i = 0; i < snakeBody.length - 3; ++i)
    if (snakeBody[snakeBody.length - 1].x == snakeBody[i].x && snakeBody[snakeBody.length - 1].y == snakeBody[i].y)
      ++endgame
  
  if(endgame > 0){
    snakeBody = [
      {x: 14, y: 2}, 
      {x: 14, y: 3}, 
      {x: 14, y: 4} ]
    foodPos = [ {x: 14, y: 14} ]
    direction = ""
    if(maxScore < score)
      maxScore = score
    score = 0
    document.getElementById("maxScore").innerHTML = "Max Score: " + maxScore
    document.getElementById("score").innerHTML = "Score"
    document.getElementById("snakeGrid").innerHTML = "You Lost! Try Again!"
    endgame = 0
  }  
}

window.onload = gridSquares;
let direction = ""

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      if (snakeBody[snakeBody.length - 1].y - 1 !== snakeBody[snakeBody.length - 2].y)
        direction = "left"
      break;
    case 38:
      if (snakeBody[snakeBody.length - 1].x - 1 !== snakeBody[snakeBody.length - 2].x)
        direction = "up"
      break;
    case 39:
      if (snakeBody[snakeBody.length - 1].y + 1 !== snakeBody[snakeBody.length - 2].y)
        direction = "right"
      break;
    case 40:
      if (snakeBody[snakeBody.length - 1].x + 1 !== snakeBody[snakeBody.length - 2].x)
        direction = "down"
      break;
    }
};

setInterval(gridSquares, 200, direction);