
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
     box.shapeColor="orange";
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
     box.shapeColor="black";
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
     box.shapeColor="grey";
  }
if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.shapeColor="blue";
  }

  
  drawSprites();
}

