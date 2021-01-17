var gameState = 1;
var count = 0;
var upB,downB,play,quit,aboutUs,num,B1,B2,emerald1,emerald2,emerald1IMG,emerald2IMG,GameName;
var ballon1,ballon2;

function preload() {
emerald1IMG = loadImage("emerald1.png");
emerald2IMG = loadImage("emerald2.png");
B1 = loadImage("ballon1.jpg");
B2 = loadImage("ballon2.jpg");
}

function setup(){
  var canvas = createCanvas(1200,680);

  play = createButton("play");
  play.position(displayWidth/2-45,displayHeight/2-200);
  play.style("font-size","50px");
  play.style("color","#ff00ff");

  aboutUs = createButton("About Us");
  aboutUs.position(displayWidth/2-90,displayHeight/2);
  aboutUs.style("font-size","50px");
  aboutUs.style("color","yellow");

  GameName = createButton("Maths Square");
  GameName.position(displayWidth/2-140,displayHeight/2-400);
  GameName.style("font-size","50px");
  GameName.style("color","red");

//emerald1 = createSprite(200,200,200,200);
//emerald1.addImage(emerald1IMG);
//emerald1.scale = 0.5;

quit = createButton("Quit");
quit.position(0,0);
quit.style("font-size","20px");

ballon1 = createSprite(800,550,200,200);
ballon1.addImage(B1);
ballon1.scale = 0.5;
ballon1.visible = true;
}

function draw(){

 if(gameState === 0){
    play.show();
    aboutUs.show();
    GameName.show();
    ballon1.visible = false;
   // emerald1.scale = 0.0000001;

 }   

 if(gameState === 1){
    play.hide();
    aboutUs.hide();
    GameName.hide();
    
 }  

 if(gameState === 2){

 } else{
    
 } 

    play.mousePressed(()=>{
        playBClick();
      });

      aboutUs.mousePressed(()=>{
        aboutUsClick();
      });

      quit.mousePressed(()=>{
          gameState = 0;
          ballon.x = 10000;


      })

drawSprites();
}

function playBClick() {
    play.hide();
    aboutUs.hide();
    GameName.hide();
    gameState = 1;
    ballon1.visible = true;
    ballon1.x = 800;

}

function aboutUsClick(){
    play.hide();
    aboutUs.hide();
    GameName.hide();
    gameState = 2;
}


