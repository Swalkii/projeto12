var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

  pathImg=loadImage("path.png");
  boyImg=loadAnimation("jake1.png", "jake4.png");
 
}

function setup(){
  
  createCanvas(400,400);


 path=createSprite(200,200,100,100);
 path.addImage("path",pathImg);
 path.scale=1.2;

 boy=createSprite(200,300,50,50);
 boy.addAnimation("boy",boyImg);
 boy.scale=0.5;
  
leftBoundary=createSprite(10,0,100,800);
leftBoundary.visible=false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
