
let rad;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rad=10;
}


//rad is radoius 
function draw() {
  background(255);
  rad+= sin(frameCount);
  drawCircle (width/2, height/2, rad) 
}

function drawCircle (x,y,r) {
  noStroke ();
  fill(random (0), random (200), random (255)); 
  ellipse (x,y,r,r); 
  if (r < 80){
    drawCircle (x +2*r, y, r*2);
    drawCircle (x -2*r, y, r*2);
       

                             
  }
                             
                             
                             
}

    //the following funcitons where to make them go vertical but it was looking to busy 
    // drawCircle (x, y+r , r*2);
    // drawCircle (x, y-r , r*2);
    
// alternative to play with  it   to make the stoping condition how small they get and not how big 
//     drawCircle (x +r, y, r/2);
//     drawCircle (x -r, y, r/2);