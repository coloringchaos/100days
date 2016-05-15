// Rebuilt from Daniel Shiffman's example in Nature of Code ch 6 - separation

alert("drag the mouse to make circles!");
//array of blob objects
var blobs = [];

function setup() {
  createCanvas(windowWidth,windowHeight);

  //START BLANK
  //store all blogs in an array, start with 25
  // for (var i = 0; i < 25; i++) {
  //   blobs.push(new Blob(random(width),random(height)));
  // }
}

function draw() {
  background(225);
  
  //draw and update all blogs
  for (var i = 0; i < blobs.length; i++) {
    blobs[i].separate(blobs);
    blobs[i].update();
    blobs[i].borders();
    blobs[i].display();
  }

}

//make more when the mouse is dragged
function mouseDragged() {
  blobs.push(new Blob(mouseX,mouseY));
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
