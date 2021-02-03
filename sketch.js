var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  
  stroke("purple");
  strokeWeight(3);
  fill("pink");
  textSize(25)
  text(hr +" : "+ mn +" : "+ sc, 130, 390);
    
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(5);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(10);
  line(0, 0, 50, 0);
  pop();

  stroke(255, 0, 255);
  strokeWeight(10);
  noFill();

  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke(0, 255, 0);
  arc(0, 0, 270, 270, 0, mnAngle);

  stroke(0, 0, 255);
  arc(0, 0, 240, 240, 0, hrAngle);
  
  drawSprites();
}