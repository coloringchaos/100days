var w;

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();
}

function draw() {
	background(51);

	w.display();
	w.update();
	// w.borders();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}



//constructor 
function Walker(){
	this.pos = createVector(width/2, height/2); //this line replaces this.x and this.y
	this.vel = createVector(0, 0);
	this.radius = 40;
	

	this.update = function(){
		var mouse = createVector(mouseX, mouseY);
		this.acc = p5.Vector.sub(mouse, this.pos)

		// this.acc = createVector(random(-.1, .1), random(-.1, .1));
		this.acc.mult(.001);
		this.vel.add(this.acc); //acceleration changes velocity
		this.pos.add(this.vel);	//velocity changes position
	}

	this.display = function(){
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.radius, this.radius); //use vector's x and y for displaying
	}

	// wraparound to keep everything in bounds :)
  	this.borders = function() {
	    if (this.pos.x < -this.radius) this.pos.x =  width+this.radius;
	    if (this.pos.y < -this.radius) this.pos.y = height+this.radius;
	    if (this.pos.x > width+this.radius) this.pos.x = -this.radius;
	    if (this.pos.y > height+this.radius) this.pos.y = -this.radius;
  	}
}


