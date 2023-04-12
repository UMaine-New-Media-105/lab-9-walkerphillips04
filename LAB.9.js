let bubbles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}

function draw() {
  background(120);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-2, 5);
    this.ySpeed = random(-2, 5);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    // Draw the face
  fill(255, 220, 165);
  strokeWeight(2);
  stroke(0);
  ellipse(25, 25, 40, 40);

  // Draw the eyes
  fill(0);
  noStroke();
  ellipse(18, 20, 5, 5);
  ellipse(32, 20, 5, 5);

  // Draw the mouth
  noFill();
  strokeWeight(3);
  stroke(2);
  fill("black");
  arc(25, 35, 15, 10, 4, 3.9);
    pop();
  }
}
