var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var PLAY = 1;
var END = 0;
var gamestate = 1;
var survivalTime=0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 500)
  ground = createSprite(250, 480, 500, 20);
  monkey = createSprite(50, 420)
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
  background("white")
  if (gamestate === PLAY) {
    monkey.velocityY = monkey.velocityY + 0.8
    if (keyDown("space") && monkey.y > 408.5) {
      monkey.velocityY = -17
    }
    spawnBananas();
    spawnStone();
  }
  monkey.collide(ground)
  console.log(monkey.y);

  stroke("white")
textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  
  drawSprites();

}

function spawnBananas() {
  if (frameCount % 60 === 0) {
    banana = createSprite(480, 200, 10, 10);
    banana.velocityX = -5
    banana.addImage(bananaImage)
    banana.scale = 0.1
    FoodGroup.add(banana)
    banana.y=Math.round(random(120,200));
    banana.SetLifetime = -1

  }
}

function spawnStone() {
  if (frameCount % 300 === 0) {
    stone = createSprite(480, 460, 10, 10);
    stone.velocityX = -5
    stone.addImage(obstacleImage)
    stone.scale = 0.1
    obstaclesGroup.add(stone)
    obstaclesGroup.SetLifetime = -1

  }
}