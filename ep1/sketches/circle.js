var angle = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  var x = map(cos(angle), -1, 1, 0, width);
  var y = map(sin(angle), -1, 1, 0, height);
  line(200, 200, x, y);
  ellipse(x, y, 20, 20);
  angle += 0.02
}