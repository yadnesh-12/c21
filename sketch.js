var fixedRect, movingRect;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(150,50,50,50);
  ob1.shapeColor = "yellow";
  ob2 = createSprite(350,50,50,50);
  ob2.shapeColor = "yellow";
  ob3 = createSprite(550,50,50,50);
  ob3.shapeColor = "yellow";
  ob4 = createSprite(750,50,50,50);
  ob4.shapeColor = "yellow";


  ob1.velocityX =1
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

if(isTouching(movingRect,ob4))
{
  movingRect.shapeColor = "white";
  ob4.shapeColor = "white";
}
else
{
  movingRect.shapeColor = "green";
  ob4.shapeColor = "yellow";
}
 
bounceOff(ob1,ob2)
drawSprites();
}
