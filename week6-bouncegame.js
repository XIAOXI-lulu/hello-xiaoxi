var player;

var ballX = 100;
var ballY = 100;

var ballXV = -4;
var ballYV = 1;

var rectX = 10;
var rectY = 10;

var lives = 3;

function setup() {

  createCanvas(500, 400);

  // create object
  player = new gameObject();
}

function draw() {
  background(127);
  player.update();
  //rect(300,30,50,50);  
  setText();
  setShapes();    
  bounceCheck();
  increment();
  scoreCheck();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.hmom -= player.speed;

  } else if (keyCode === RIGHT_ARROW) {
    player.hmom += player.speed;

  } else if (keyCode === UP_ARROW) {
    player.vmom -= player.speed;

  } else if (keyCode === DOWN_ARROW) {
    player.vmom += player.speed;

  }

  return false;
  
  // prevent any default behaviour
  // like the page scrolling when you press the arrows
}

function gameObject() {

  this.x = width / 2;
  this.y = width / 2;

  this.hmom = 0;
  this.vmom = 0;

  this.speed = 10;
  this.size = 10;

  this.update = function() {
    this.move();
    this.render();
  }

  this.move = function() {
    this.x += this.hmom;
    this.y += this.vmom;

    // dampenings
    this.hmom *= 0.9;
    this.vmom *= 0.9;

    this.checkCollisions();
  }

  this.checkCollisions = function() {
    // left and right
    if (this.x <= 0) {
      this.x = 0
    } else if (this.x + this.size >= width) {
      this.x = width - this.size;
    }

    // up and down
    if (this.y <= 0) {
      this.y = 0
    } else if (this.y + this.size >= height) {
      this.y = height - this.size;
    }
  }

  this.render = function() {
    fill(255,0,0);
    rect(this.x, this.y, this.size, 100);
  }

}

function increment() {  
  ballX += ballXV;  
  ballY += ballYV;
  
  if(millis() % 1000 == 0) {
    ballXV = ballXV * 2;
  }
}

function mouseMoved() {
  rectY = mouseY;
}

function ball(x, y) {
  ellipse(x - 2, y, 30, 30);
  //ellipse(x, y, 15, 15);
}

function setShapes() {
  fill(255);
  rect(rectX, rectY, 20, 75);
  ball(ballX, ballY);
}

function sliderBounce() {
  if(rectY < ballY && rectY + 300 > ballY) {
    ballXV = ballXV * -1;
    lives += 1;
  }
}

function wallBounce() {
  ballXV = ballXV * -1;
}

function bounceCheck() {
  if(ballY < 0 || ballY > 200) {
    ballYV = ballYV * -1;
  }
  

  if(ballX < 10 && ballXV < 0) {
    sliderBounce();
  }
  

  if(ballX > 500 && ballXV > 0) {
    wallBounce();
  }
  
  if(ballX < 0) {
    ballX = 200;
    lives -= 1;
  }
}

function scoreCheck() {
  if(lives == 0) {
    noLoop();
    lives = "YOU LOSE";
  }
  
  if(lives == 10) {
    noLoop();
    lives = "YOU WIN";
  }
}

function setText() {
  textAlign(CENTER);
  textSize(22);
  text(lives, 40, 40);
}
