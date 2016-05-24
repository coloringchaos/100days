alert("click to draw circles and play sounds :)");
var osc;
var circles = [];
var playing = false;

function setup() {
	createCanvas(windowWidth, windowHeight);

	strokeWeight(6);
	noFill();

	osc = new p5.Oscillator();
  	osc.setType('sine');
  	osc.freq(240);
  	osc.amp(0);
  	osc.start();
}

function draw() {
	background(255);
  
  	//make a new circle
  	// if(mouseIsClicked){
  	// 	circles.push(new Circle(mouseX, mouseY));
  	// }

  	//update every circle each time draw loops
  	for (var i = 0; i < circles.length; i++){
  		circles[i].update();
  		circles[i].ellipse();
  		console.log(circles.length);
  		if(circles[i].lifespan <= 0){
  			circles.splice(i, 1);
  		}
  	}
}

function mouseClicked(){
	circles.push(new Circle(mouseX, mouseY));

	if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    	if (!playing) {
	      	// ramp amplitude to 0.5 over 0.1 seconds
	      	osc.amp(0.5, 0.05);
	      	playing = true;
	      	backgroundColor = color(0,255,255);
	    } else {
	      	// ramp amplitude to 0 over 0.5 seconds
	      	osc.amp(0, 1.5);
	      	playing = false;
	      	backgroundColor = color(255,0,255);
	    }
  	}
}

function Circle(x, y){
	// this.osc;

	this.x = x;
	this.y = y;
	this.size = 0;
	// this.c = color(random(255), random(255), random(255));
	this.r = random(255);
	this.g = random(255);
	this.b = random(255);

	this.lifespan = 255;

	this.ellipse = function() {
		// fill(this.c, this.lifespan/2);
		stroke(this.r, this.g, this.b, this.lifespan);
		ellipse(this.x, this.y, this.size, this.size);
	}

	this.update = function() {
		this.size = this.size + 3;
		this.lifespan--;
	}

}
