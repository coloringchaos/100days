// 100 DAYS OF JAVASCRIPT - DAY 01

alert("Day 01: click the screen to draw squares");
var squares = [];
var col;

function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(0.5);
  stroke(255, 150);
  noFill();
  rectMode(CENTER);
}

function draw() {
  col = map(mouseX, 0, width, 0, 150);
  background(150, col, 150);

  if (mouseIsPressed){
    squares.push(new Cube(mouseX, mouseY));
  }
  
  for (var i = 0; i < squares.length; i++) {
    squares[i].update();
    squares[i].rect();
  }

  console.log(squares.length);
}

function Cube(x, y) {
  this.x = x;
  this.y = y;
  this.size = 30;

  this.rect = function(){
    rect(this.x, this.y, this.size / 1.5, this.size / 1.5);
  }

  this.update = function() {
    this.size = this.size + 1.5;
    this.size = this.size + 1.5;
  }

}