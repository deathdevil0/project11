var path,pathImg;
var runner,runnerImg;
var leftBond,rightBond;
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(100,150,30,20);
  runner.addAnimation( "movingRunner",runnerImg);
  runner.scale=0.06;

  leftBond=createSprite(0,0,100,800);
  leftBond.visible=false;

  rightBond=createSprite(410,0,100,800);
  rightBond.visible=false;
}


function draw() {
  background(0);

  path.velocityY=4;
  runner.x=World.mouseX;
  edges=createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBond);
  runner.collide(rightBond);


  if(path.y>400){
    path.y=height/2;
  }
  drawSprites();
}
