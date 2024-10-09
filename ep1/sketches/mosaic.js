function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let s = 35;
let cells = [];

function setup() {
  createCanvas(420, 800);
  rectMode(CENTER);
  for (let c = 1; c < width/s; c++) {
    for (let r = 1; r < height/s; r++) {
      cells.push(new Cell(c, r));
    }
  }
}

let xoff = 0;

function draw() {
  background("#f2f0df");
  xoff = xoff = 0.01;
  let n = noise(xoff*2);

  cells.forEach((cell) => {
    cell.draw(n);
  });
}

class Cell {
  constructor(c, r) {
    this.c = c;
    this.r = r;
    this.rot = random(radians(-r), radians(r));
  }

  draw(n) {
    push();
    translate((this.c*s), (this.r*s));
    rotate(this.rot*(this.r*n*3));
    fill(0,0,0,n*this.r);
    strokeWeight(4*n);
    beginShape();

    for(let i = 0; i < this.r; i++) {
      let angle = map(i, 0, (this.c+2) * this.r, 3, 16 * n * 2);
      let x = s/2 * cos(angle);
      let y = s/2 * sin(angle);
      curveVertex(x, y);
    }

    endShape();
    strokeWeight(1);
    stroke(0,0,0,50);
    rect(0,0,s,s);
    pop();
  }
}