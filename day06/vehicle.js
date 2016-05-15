// Vehicle object - adapted from Nature of Code
function Blob(x, y) {
  // All the usual stuff
  this.position = createVector(x, y);
  this.radius = random(35,90);
  this.maxspeed = 5;    // Maximum speed
  this.maxforce = 0.2;  // Maximum steering force
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, 0);

  //variables for color fill
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  this.applyForce = function(force) {
    this.acceleration.add(force);
  }

  // Separation
  // Method checks for nearby vehicles and steers away
  this.separate = function(vehicles) {
    var desiredseparation = this.radius*2;
    var sum = createVector();
    var count = 0;

    // For every boid in the system, check if it's too close
    for (var i = 0; i < vehicles.length; i++) {
      var d = p5.Vector.dist(this.position, vehicles[i].position);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if ((d > 0) && (d < desiredseparation)) {
        // Calculate vector pointing away from neighbor
        var diff = p5.Vector.sub(this.position, vehicles[i].position);
        diff.normalize();
        diff.div(d);        // Weight by distance
        sum.add(diff);
        count++;            // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      sum.div(count);
      // Our desired vector is the average scaled to maximum speed
      sum.normalize();
      sum.mult(this.maxspeed);
      // Implement Reynolds: Steering = Desired - Velocity
      var steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  }

  // Method to update location
  this.update = function() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelertion to 0 each cycle
    this.acceleration.mult(0);  //slows down with this in, comment out to stop losing speed
  }

  this.display = function() {
    fill(this.r, this.g, this.b);
    stroke(200);

    push();
      translate(this.position.x, this.position.y);
      ellipse(0, 0, this.radius, this.radius);
    pop();
  }

  // Wraparound to keep everything in bounds :)
  this.borders = function() {
    if (this.position.x < -this.radius) this.position.x =  width+this.radius;
    if (this.position.y < -this.radius) this.position.y = height+this.radius;
    if (this.position.x >  width+this.radius) this.position.x = -this.radius;
    if (this.position.y > height+this.radius) this.position.y = -this.radius;
  }
}






