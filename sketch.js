
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(200,330,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,370,400,60);
  ground.velocityX=-5;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  drawSprites();
  
  if(ground.x===0){
    ground.x=ground.width/2;  
  }
  
  monkey.collide(ground);
  monkey.velocityY=monkey.velocityY+0.8;
  if(keyDown("space")&&monkey.y>200){
    monkey.velocityY=-10;
  }
  
  if(frameCount%80===0){
     createBanana();
  }else if(frameCount%300===0){
    createObstacle();
  }
  
}

function createBanana(){
  banana=createSprite(200,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1
  
  banana.x=400;
  banana.y=random(120,250);
  banana.velocityX=-5;
  banana.lifetime=80;
  
  bananaGroup.add(banana);
}
function createObstacle(){
  obstacle=createSprite(200,200,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  
  obstacle.x=400;
  obstacle.y=340;
  obstacle.velocityX=-5;
  obstacle.lifetime=80;
  
  obstacleGroup.add(obstacle);
}



