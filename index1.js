let squares = ""
foodPos = 154
let snakeBody = [142, 143, 144]
let eatFood = 0, score = 0, maxScore = 0
let endgame = 0

function gridSquares() {
  squares = ""
  for (let i = 1, s = 1; i <= 400; ++i, ++s){
    let checkSnakeBody = 0
    for (let x = 0; x < snakeBody.length; ++x){
      if (i == snakeBody[x]){
        squares += '<div class=snakecolor id=' + i + ' ' + s + '></div>'
        ++checkSnakeBody
      }
    }
    if (snakeBody[snakeBody.length - 1] == foodPos){
      eatFood = foodPos
      foodPos = Math.floor(Math.random() * 400);
      ++score
      document.getElementById("score").innerHTML = "Score: " + score
    }
    if (i == foodPos)
      squares += '<div class=food id=' + i + ' ' + s + '></div>'
    else if (checkSnakeBody !== 1)
      squares += '<div class=cell-grid id=' + i + ' ' + s + '></div>'
    checkSnakeBody = 0
    if (s == 20)
      s = 0
  }
  if (direction == "up"){
    snakeBody.push(snakeBody[snakeBody.length - 1] - 20)
  }
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
  document.getElementById("snakeGrid").innerHTML = squares
  if (snakeBody[snakeBody.length - 1] < 1 || snakeBody[snakeBody.length - 1] > 400)
    ++endgame
  for (n = 1; n <= 381; n+=20)
    for (m = 20; m <= 400; m+=20)
      if((snakeBody[snakeBody.length - 1] == n && snakeBody[snakeBody.length - 2] == m) || (snakeBody[snakeBody.length - 1] == m && snakeBody[snakeBody.length - 2] == n))
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






