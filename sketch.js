var fixedRect,moveingRect;


function setup() {
  createCanvas(1200,600);
  fixedRect=createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  moveingRect=createSprite(200, 400, 100, 50);
  moveingRect.shapeColor="blue";
  moveingRect.debug=true;

}

function draw() {
  background("lightgreen");  
 
  moveingRect.x=World.mouseX;
  moveingRect.y=World.mouseY;

  if(moveingRect.x-fixedRect.x<fixedRect.width/2+moveingRect.width/2&&
    fixedRect.x-moveingRect.x<fixedRect.width/2+moveingRect.width/2&&
    moveingRect.y-fixedRect.y<fixedRect.width/2+moveingRect.width/2&&
    fixedRect.y-moveingRect.y<fixedRect.width/2+moveingRect.width/2){
   
    moveingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else {
    moveingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}