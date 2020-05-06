let capturer;
let bottomLayer;
let layer2;
let layer3;

let alpha;

let darkBlue, lightBlue, charcoal;

function preload() {
  layer3 = loadImage('assets/close up 2.png');
  layer2 = loadImage('assets/close up 1.png');
  // bottomLayer = loadImage('assets/close up base.png');
}

function setup() {
  createCanvas(600, 600);
  darkBlue = color(160, 200, 200);
  lightBlue = color(220, 240, 240);
  charcoal = color(100, 115, 115);


  capturer = new CCapture({
    format: 'webm',
    framerate: 30
  });
  capturer.start();
}

let grey;
let x = 0;
let y = 0;
let z = 0;
let thresh;
let picY = 0;
let picX = 0;

function draw() {
  // background(255, 0, 255);
  images(picY);
  // image(bottomLayer, picX, picY, width);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {

        grey = noise(i / 100 + x, j / 100 + y, z);
        grey = (grey - .5) * 2;
        grey = grey * 255;
        stroke(220, 240, 240, grey);
        point(i, j);

    }
    y += .00005;
    x += .00001;
  }
  x += .001;
  z += .001;


  capturer.capture(document.getElementById('defaultCanvas0'));
  picY -= .1;

  if (picY == -900) {
  	capturer.save();
  	capturer.stop();
  	noLoop();
  }
}

function images(picY) {
  tint(255, 255);
  image(layer2, 0, picY, width);
  tint(255, 255 * alpha);
  image(layer3, 0, picY, width);
  alpha = (sin(frameCount / 10) + 1) / 2
}

function clouds() {

}
