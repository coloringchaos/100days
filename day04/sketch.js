var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2, c3, c4;

function setup() {
  createCanvas(windowWidth, windowHeight);

  c1 = color(247, 201, 201);
  c2 = color(152, 150, 164);
  c3 = color(177, 143, 106);
  c4 = color(145, 168, 209);
}

function draw() {
  setGradient(0, 0, width, height, c1, c4, Y_AXIS);
}

function setGradient(x, y, w, h, color1, color2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(color1, color2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(color1, color2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}