var walkers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	// walkers = new Walker();
	// background(235, 75, 159);
	background(114, 208, 204);

	//get an x and y value for each circle that we want to draw on the screen
	for(var x=0; x<width; x+=100){
		for(var y=0; y<height; y+=100){
			console.log(x + ", " + y);
			walkers.push(new Walker(x+50, y+50));
		}
	}
}

function draw() {
	
	for(var i=0; i<walkers.length; i++){	
		walkers[i].display();
		walkers[i].walk();
	}

	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}


//constructor 
function Walker(x, y){
	this.x = x;
	this.y = y;

	this.walk = function(){
		this.x = this.x + random(-.5, .5);
		this.y = this.y + random(-.5, .5);
	}
	
	this.display = function(){
		fill(0, .5);
		stroke(255);
		ellipse(this.x, this.y, 40, 40);
	}
}