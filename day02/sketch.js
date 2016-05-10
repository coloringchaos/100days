var circles = []; //array to hold all circles
var col; //for background color

function setup() {
	createCanvas(windowWidth, windowHeight);

	colorMode(HSB);
	noStroke();

	//get an x and y value for each circle that we want to draw on the screen
	for(var x=0; x<width; x+=100){
		for(var y=0; y<height; y+=100){
			console.log(x + ", " + y);
			circles.push(new Circle(x+50, y+50));
		}
	}

	// console.log(circles);
}

function draw() {
	col = map(mouseX, 0, width, 0, 360);
	background(col, 100, 100);

	//draw and update all circles
	for(var i=0; i<circles.length; i++){	
		circles[i].update();
		circles[i].ellipse();
	}
}

function Circle(x, y){
	this.x = x;
	this.y = y;
	this.size = 0;
	this.isGrowing = true;

	this.ellipse = function(){
		ellipse(this.x, this.y, this.size, this.size);
	}

	this.update = function(){
		
		//set state
		if(this.size <= 0){
			this.isGrowing = true; 
		}
		if(this.size >= 140){
			this.isGrowing = false;
		}

		//update size
		if(this.isGrowing === true){
			this.size++;
		}
		if(this.isGrowing === false){
			this.size--;
		}

		// print(this.isGrowing);
	}
}






