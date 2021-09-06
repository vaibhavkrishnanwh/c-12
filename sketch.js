var path, pathImg;
var runner, runnerImg;
var invisiblePathR, invisiblePathL;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,90,80);
  path.addImage("path",pathImg);
  path.velocityY = 5;
  path.scale = 1.2;

  runner = createSprite(200,350,59,90);
  runner.addAnimation("runner",runnerImg);
  runner.scale = 0.07;

  invisiblePathR = createSprite(370,200,50,900);
  invisiblePathR.visible = false;

  invisiblePathL = createSprite(34,200,50,900);
  invisiblePathL.visible = false;
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

  runner.x = World.mouseX;
  
  runner.collide(invisiblePathR);
  runner.collide(invisiblePathL);
  
  drawSprites();

}



  
  