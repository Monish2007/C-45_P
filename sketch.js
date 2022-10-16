var bg_img, bird_img,platform_img, spikeplatform_img, balloon_img,cloud_img;
var bg,bird,platform,spikeplatform,balloon,cloud, platform_Group;
var invisibleBlock;

function preload(){

bg_img = loadImage("bg.jpg");
bird_img = loadImage("bird.png");
platform_img = loadImage("platform.png");
spikeplatform_img = loadImage("spikedplatform.png");
balloon_img = loadImage("balloon.png");
cloud_img = loadImage("cloud.png");

}

function setup() {
  createCanvas(600,700)

  bg = createSprite(600,700);
  bg.addImage(bg_img);
  bg.velocityY =1; 

  bird = createSprite(300,600,100,300);
  bird.addImage(bird_img);
  bird.scale = 0.4;

  platform = createSprite(300,660,400,40);
  spikeplatform = createSprite(400,350,400,40);
  balloon = createSprite(200,300,70,50);
  cloud = createSprite(400,100,200,300);

  
  
  spikeplatform.addImage(spikeplatform_img);
  balloon.addImage(balloon_img);
  cloud.addImage(cloud_img);
  bg.addImage(bg_img);

  
  spikeplatform.scale = 0.4;
  balloon.scale = 0.4;
  cloud.scale = 0.5;
  bg.scale = 6;

  platform_Group = new Group();
  invisibleBlock_Group = new Group();

}

function draw() {
  background(0);
  if(keyDown(LEFT_ARROW)){

    bird.x -= 6;

  }
  if(keyDown(RIGHT_ARROW)){

    bird.x += 6;

  }

  if(bg.y>500)
  {
    bg.y = 300;
  } 

  createPlatform();


  drawSprites();
}

function createPlatform()
{
    
/*if(frameCount % 240 === 0){

  platform = createSprite(300,660,400,40);
  platform.addImage(platform_img);
  platform.x = Math.round(random(10,600));
  platform_Group.add(platform);
  platform.velocityY = 1;
  platform.scale = 0.5;

}*/
if (frameCount % 100 === 0) {
  var platform = createSprite(300,100,140,4);
  var invisibleBlock = createSprite(platform.x,platform.y-15,140,4);
  
  platform.x = Math.round(random(90,550));
  invisibleBlock.x = platform.x;
  platform.scale = 0.4;
  
  platform.addImage(platform_img);
  
  platform.velocityY = 1;
  invisibleBlock.velocityY = 1;
  
  bird.depth = platform.depth;
 
  //assign lifetime to the variable
  platform.lifetime = 800;
  invisibleBlock.lifetime = 800;

  
  //add each door to the group
  platform_Group.add(platform);
  invisibleBlock.debug = false;
  invisibleBlock_Group.add(invisibleBlock);
}
}

