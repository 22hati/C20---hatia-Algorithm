function setup() {
  createCanvas(800,400);
  he = createSprite(200, 200, 80, 50);
  p2 = createSprite(200, 200, 50, 80);
}

function draw() {
  background(255,255,255); 
  
  he.x = mouseX;
  he.y = mouseY;

  if(((he.x-p2.x <= he.width/2+p2.width/2) && 
      (p2.x-he.x <= he.width/2+p2.width/2)) && 
      (he.y-p2.y <= he.height/2+p2.height/2) && 
      (p2.y-he.y <= he.height/2+p2.height/2)) {
      
    he.shapeColor = "red";
    p2.shapeColor = "red";
  }else {
    he.shapeColor = "yellow";
    p2.shapeColor = "yellow";
  }

  drawSprites();
}