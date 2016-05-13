var cubes = [];

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);

  //get an x and y value for each circle that we want to draw on the screen
  for(var x=0; x<width; x+=100){
    for(var y=0; y<height; y+=100){
        console.log(x + ", " + y);
        cubes.push(new Cube(x, y, 1000));
    }
  }
}


function draw() {
  background(250);
  normalMaterial();

  //drag to move the world.
  // orbitControl();

  for(var i=0; i<cubes.length; i++){  
    cubes[i].display();
  }
}


function Cube(x, y, z){
  this.x = x;
  this.y = y;
  this.z = z;

  this.display = function(){
    push();
      rotateZ(frameCount * 0.001);
      rotateX(frameCount * 0.001);
      rotateY(frameCount * 0.001);
      box(x, y, z);
    pop();
  }

}

