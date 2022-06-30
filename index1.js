let squares = ""
foodPos = 154
let snakeBody = [142, 143, 144]
let eatFood = 0, score = 0, maxScore = 0
let endgame = 0, row = 1, column = 1

function gridSquares() {
  squares = ""
  if (direction == "up")
    snakeBody.push(snakeBody[snakeBody.length - 1] - 20)
  else if (direction == "down")
    snakeBody.push(snakeBody[snakeBody.length - 1] + 20)
  else if (direction == "left")
    snakeBody.push(snakeBody[snakeBody.length - 1] - 1)
  else if (direction == "right")
    snakeBody.push(snakeBody[snakeBody.length - 1] + 1)
  if (direction !== "" && snakeBody[snakeBody.length - 2] !== eatFood){
    snakeBody.splice(0, 1)
    eatFood = 0
  }
  for (let i = 1; i <= 400; ++i){
    let checkSnakeBody = 0
    for (let x = 0; x < snakeBody.length; ++x){
      if (i == snakeBody[x]){
        squares += '<div class=snakecolor></div>'
        ++checkSnakeBody
        if ((column == 1 && direction == "left") || (column == 20 && direction == "right"))
          ++endgame 
      }
    }
    if (snakeBody[snakeBody.length - 1] == foodPos){
      eatFood = foodPos
      foodPos = Math.floor(Math.random() * 400);
      ++score
      document.getElementById("score").innerHTML = "Score: " + score
    }
    if (i == foodPos){
      squares += '<div class=food></div>'
    }  
    else if (checkSnakeBody !== 1){
      squares += '<div class=cell-grid></div>'
    }
    checkSnakeBody = 0
    if (i % 20 == 0){
      ++row
      column = 0
      if (row == 21)
        row = 1
    }
    ++column
    console.log(column)
  }
  document.getElementById("snakeGrid").innerHTML = squares
  if (snakeBody[snakeBody.length - 1] < 1 || snakeBody[snakeBody.length - 1] > 400)
    ++endgame
  for (let x = 0; x < snakeBody.length - 1; ++x)
      if (snakeBody[snakeBody.length - 1] == snakeBody[x])
        ++endgame
  if(endgame > 0){
    snakeBody = [142, 143, 144]
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
      if (snakeBody[snakeBody.length - 1] - 1 !== snakeBody[snakeBody.length - 2])
        direction = "left"
      break;
    case 38:
      if (snakeBody[snakeBody.length - 1] - 20 !== snakeBody[snakeBody.length - 2])
        direction = "up"
      break;
    case 39:
      if (snakeBody[snakeBody.length - 1] + 1 !== snakeBody[snakeBody.length - 2])
        direction = "right"
      break;
    case 40:
      if (snakeBody[snakeBody.length - 1] + 20 !== snakeBody[snakeBody.length - 2])
        direction = "down"
      break;
    }
};

setInterval(gridSquares, 200, direction);






