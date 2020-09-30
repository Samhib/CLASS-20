var fixedRect,movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 100);
fixedRect.shapeColor="black";
movingRect=createSprite(600,200,80,50);
movingRect.shapeColor="white";

}

function draw() {
  background("gold");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)

{
movingRect.shapeColor="red";
fixedRect.shapeColor="red";

}
else{
  movingRect.shapeColor="white";
  fixedRect.shapeColor="black";


}


  drawSprites(); 
}