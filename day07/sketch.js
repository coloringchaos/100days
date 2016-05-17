var rSlider, gSlider, bSlider;
var system;
var r, g, b;
var radius;

function setup() {
	// create canvas
  	createCanvas(windowWidth, windowHeight);
	textSize(15)
	noStroke();

	// create sliders
	rSlider = createSlider(0, 255, 100);
	rSlider.position(20, 20);
	gSlider = createSlider(0, 255, 0);
	gSlider.position(20, 50);
	bSlider = createSlider(0, 255, 255);
	bSlider.position(20, 80);
	radiusSlider = createSlider(7, 100, 20);
	radiusSlider.position(20, 110);

	system = new ParticleSystem(createVector(width/2, height/2 - 120));
}

function draw() {
	radius = radiusSlider.value();
  	r = rSlider.value();
  	g = gSlider.value();
  	b = bSlider.value();
  	// background(r, g, b);
  	background(250);
  	fill(0);
  	text("red", 165, 35);
  	text("green", 165, 65);
  	text("blue", 165, 95);
  	text("size", 165, 125);

  	print(r);

  	system.addParticle();
  	system.run();
}

function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
}

// A simple Particle class - from p5 example 'Particle System'
var Particle = function(position) {
  	this.acceleration = createVector(0, .01);
  	this.velocity = createVector(random(-2, 2), random(-2, 0));
  	this.position = position.copy();
  	this.lifespan = 765.0;
};

Particle.prototype.run = function() {
  	this.update();
  	this.display();
};

// Method to update position
Particle.prototype.update = function(){
  	this.velocity.add(this.acceleration);
  	this.position.add(this.velocity);
  	this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {

  	stroke(225, this.lifespan/3);
  	fill(r, g, b, this.lifespan/3);
  	ellipse(this.position.x, this.position.y, radius, radius);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  	if (this.lifespan < 0) {
    	return true;
  	} else {
    	return false;
  	}
};

var ParticleSystem = function(position) {
  	this.origin = position.copy();
  	this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  	this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  	for (var i = this.particles.length-1; i >= 0; i--) {
    	var p = this.particles[i];
    	p.run();
    	if (p.isDead()) {
      		this.particles.splice(i, 1);
    	}
  	}
};