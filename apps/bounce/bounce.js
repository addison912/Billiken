//generate a random color
function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
  //our ball element
  const ball = document.getElementById("bounceBall");
  const container = document.getElementById("bounceContainer");
  let directionX;
  let directionY;
  let containerHeight = container.offsetHeight;
  let containerWidth = container.offsetWidth;
  let containerTop = container.offsetTop;
  let containerLeft = container.offsetLeft;
  let posX = containerLeft;
  let posY = containerTop;
  let speed = 12;

  var x = setInterval(move, speed);

  //change element to random color on click
  document
    .getElementById("bounceContainer")
    .addEventListener("click", function() {
      event.target.style.backgroundColor = randomColor();
    });

  ball.style.backgroundColor = randomColor();
  container.style.backgroundColor = randomColor();

  function move() {
    if (posX >= containerWidth + containerLeft - 50) {
      directionX = "left";
      posX -= 1;
    } else if (posX <= containerLeft) {
      directionX = "right";
      posX += 1;
    }
    if (directionX == "right") {
      posX += 1;
      ball.style.left = posX + "px";
    } else if (directionX == "left") {
      posX -= 1;
      ball.style.left = posX + "px";
    }

    if (posY >= containerHeight + containerTop - 50) {
      directionY = "up";
      posY -= 1;
    } else if (posY <= containerTop) {
      directionY = "down";
      posY += 1;
    }
    if (directionY == "down") {
      posY += 1;
      ball.style.top = posY + "px";
    } else if (directionY == "up") {
      posY -= 1;
      ball.style.top = posY + "px";
    }
  }
};
