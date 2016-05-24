var words, words2;
var x = 100;
var y = 200;


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(32, 167, 239);

	var x2 = map(mouseX, 0, width, x-50, x+50);
	var y2 = map(mouseY, 0, width, y-15, y+45);

	fill('rgba(255,255,255, 0.8)');
	words2 = new Text(x2, y2);

	var x1 = map(mouseX, 0, width, x-20, x+20);
	var y1 = map(mouseY, 0, width, y-5, y+20);
	// console.log(x);

	fill('rgba(239,66,237, 0.6)');
	words2 = new Text(x1, y1);

	var newFill = map(mouseX, 0, width, 0, 1);
	// fill(0,newFill);
	fill(50);
	console.log(newFill);
	words = new Text(x, y);
	
}


function Text(x, y){
	textFont("monospace");
	textSize(100);
	// textMode(CENTER);
	text("words words words \nwords words words \nsomething something", x, y);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}