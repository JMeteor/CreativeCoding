var x = 0; // walker x position
var y = 0; // walker y position
var w = 0; // walker width
var hueVar = 0; // walker hue
var saturationVar = 0; // walker saturation
var brightnessVar = 0; // walker brightness
var bgHue = 0; // background hue
var bgSaturation = 0; // background saturation
var bgBrightness = 0; // background brightness

function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 360, 100, 100, 100);

  // initialize background hue
  bgHue = random(0, 360);
  bgSaturation = random(5, 15);
  bgBrightness = random(90, 100);
  background(bgHue, bgSaturation, bgBrightness);

  // initialize walker hue as complementary color to background
  hueVar = (bgHue + 180) % 360;
  saturationVar = random(40, 70);
  brightnessVar = random(20, 60);


  // initialize walker position to center of canvas
  x = width / 2;
  y = height / 2;
}

function drawWalker() {
  // change walker size with a random value between -2.1 and 2,
  // this will make the walker grow and shrink.
  //there is a slight bias towards shrinking
  w = w + random(-2.1, 2);

  // here we make sure the walker size is always between 0 and 100
  if (w < 0) {
    w = 0;
  } else if (w > 100) {
    w = 100;
  }

  // here we draw the walker as an ellipse with a stroke and fill and we set the  fill to the walker's hue, saturation, and brightness
  strokeWeight(0.5);
  fill(hueVar, saturationVar, brightnessVar, 100);
  stroke(bgHue, bgSaturation, bgBrightness, 100);
  ellipse(x, y, w, w);
}

function moveWalker() {
  // here we move the walker by a random amount between the width divided by 3. this will make the walker move in a random direction.
  x = x + random(-w / 3, w / 3);
  y = y + random(-w / 3, w / 3);


  if (x < -w / 2) {
    x = width + w / 2;
  } else if (x > width + w / 2) {
    x = -w / 2;
  }
  if (y < -w / 2) {
    y = height + w / 2;
  } else if (y > height + w / 2) {
    y = -w / 2;
  }
}

function draw() {
  moveWalker();
  drawWalker();
}