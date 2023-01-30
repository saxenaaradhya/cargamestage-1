var road ,roadImg, canvas;
var grass1,grass1Img,grass2,grass2Img;
var npccar1 , npccar1Img,npccar2,npccar2Img,pccar,pccarImg,npccar3,npccar3Img,npccar4;
var obstacle,obstacleImg;

function preload(){
    roadImg=loadImage("road.png");
    grass1Img=loadImage("grass1-removebg-preview.png");
    grass2Img=loadImage("grass2-removebg-preview.png");
    npccar1Img=loadImage("npc_car-1-removebg-preview.png");
    npccar2Img=loadImage("npc_car-2-removebg-preview.png");
    npccar3Img=loadImage("car-removebg-preview.png");
    pccarImg=loadImage("pc_car-removebg-preview.png");
    obstacleImg=loadImage("npc_obstacle-removebg-preview.png");

}
function setup(){
    canvas = createCanvas(900,600);
    //road
   road=createSprite(600,800);
  road.addImage("rImg",roadImg);
 //   road.scale=0.5;

//grass
//bottom layer
   grass2=createSprite(230,530,20,20);
   grass2.addImage(grass2Img);
   grass2.scale=0.8;

   grass2=createSprite(480,530,20,20);
   grass2.addImage(grass2Img);
   grass2.scale=0.8;

   grass1=createSprite(650,540,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;
   
//top layer

   grass1=createSprite(55,35,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(350,35,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(650,35,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(850,35,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;
   
   //side layer
   grass1=createSprite(55,540,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(55,450,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(55,360,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(55,260,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;


   //middle line 1
   grass1=createSprite(350,450,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(350,360,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;
   
   grass1=createSprite(350,270,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   //middle line 2
   grass1=createSprite(650,450,20,20);
  grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(650,360,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(650,270,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   //side line2
   grass1=createSprite(850,450,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(850,360,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(850,270,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   grass1=createSprite(850,550,20,20);
   grass1.addImage(grass1Img);
   grass1.scale=0.7;

   //obstacle
   obstacle=createSprite(200,150,20,20);
   obstacle.addImage(obstacleImg);
   obstacle.scale=0.3;
   
   //pccar
   
   pccar=createSprite(750,530);
   pccar.addImage(pccarImg);
   pccar.scale=0.4;
   //pccar.debug=true;
   pccar.setCollider("rectangle",0,0,120,300);

   //npc
   npccar2=createSprite(140,430);
   npccar2.addImage(npccar2Img);
   npccar2.scale=0.4;
   //npccar2.debug=true;
   npccar2.setCollider("rectangle",0,0,120,300);

   npccar3=createSprite(840,170);
   npccar3.addImage(npccar3Img);
   npccar3.scale=0.4;
   //npccar3.debug=true;
   npccar3.setCollider("rectangle",0,0,290,120);

   npccar4=createSprite(480,430);
   npccar4.addImage(npccar2Img);
   npccar4.scale=0.4;
   //npccar4.debug=true;
   npccar4.setCollider("rectangle",0,0,120,300);
}

function draw(){
    background("grey");

    //moveing car pc
    
    if (keyIsDown(UP_ARROW)) {
        pccar.y =pccar.y-8;
      }

      if (keyIsDown(DOWN_ARROW)) {
        pccar.y =pccar.y+8;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        pccar.x =pccar.x+8;
      }

      if (keyIsDown(LEFT_ARROW)) {
        pccar.x =pccar.x-8;
      }

      //moving npc cars

      if (keyIsDown(UP_ARROW)) {
        npccar2.velocityX = 0;  
        npccar2.velocityY = -4;
      }

      if (keyIsDown(UP_ARROW)) {
        npccar3.velocityX = -6;  
        npccar3.velocityY = 0;
      }

      if (keyIsDown(UP_ARROW)) {
        npccar4.velocityX = 0;  
        npccar4.velocityY = -5;
      }


      drawSprites();

   
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
