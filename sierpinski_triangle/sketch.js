function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
  background(0);
  noLoop();
}

function draw() {
  let canvasHeight = displayHeight;
  let canvasWidth = displayWidth;

  strokeWeight(10);
  colorMode(HSB, 360, 100, 100);

  let p1 = createVector(canvasWidth * 0.5, 0);
  let p2 = createVector(canvasWidth * 0.25, canvasHeight);
  let p3 = createVector(canvasWidth * 0.75, canvasHeight);

  let pnts = [p1, p2, p3];
  for (let i = 0; i < pnts.length; i++) {
    stroke(Math.floor(pnts[i].y * (360 / displayHeight)), 100, 100);
    point(pnts[i].x, pnts[i].y);
  }

  center = createVector((p1.x + p2.x + p3.x) / 3, (p1.y + p2.y + p3.y) / 3);
  stroke(Math.floor(center.y * (360 / displayHeight)), 100, 100);
  point(center.x, center.y);

  for (let i = 0; i < 100000; i++) {
    random_pnt = pnts[Math.floor(Math.random() * pnts.length)];

    new_pnt = createVector(
      (center.x + random_pnt.x) * 0.5,
      (center.y + random_pnt.y) * 0.5
    );

    stroke(Math.floor(new_pnt.y * (360 / displayHeight)), 100, 100);
    point(new_pnt.x, new_pnt.y);
    // console.log(new_pnt);

    center = new_pnt;
  }
}

function mousePressed() {
  saveCanvas("photo", "png");
}
