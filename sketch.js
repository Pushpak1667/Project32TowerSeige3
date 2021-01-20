
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var ground,ground1,ground2,bg;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;

var launcherObj,backgroundImg;
var score = 0;

function preload(){
getBackgroundImg();
}

function setup() {
	createCanvas(windowWidth,windowHeight);
        


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = new Polygon(100,100,60);

ground = new Ground(windowWidth/2,windowHeight - 40,width,25);
ground1 = new Ground(500,400,300,20);
ground2 = new Ground(950,320,300,20);

box1 = new Block(380,350);
box2 = new Block(440,350);
box3 = new Block(500,350);
box4 = new Block(560,350);
box5 = new Block(620,350);


box6 = new Block(410,300);
box7 = new Block(470,300);
box8 = new Block(530,300);
box9 = new Block(590,300);

box10 = new Block(440,250);
box11 = new Block(500,250);
box12 = new Block(560,250);

box13 = new Block(470,220);
box14 = new Block(530,220);

box15 = new Block(500,190);


block1 = new Block(830,250);
block2 = new Block(890,250);
block3 = new Block(950,250);
block4 = new Block(1010,250);
block5 = new Block(1070,250);

block6 = new Block(860,200);
block7 = new Block(920,200);
block8 = new Block(980,200);
block9 = new Block(1040,200);

block10 = new Block(890,170);
block11 = new Block(950,170);
block12 = new Block(1010,170);

block13 = new Block(920,140);
block14 = new Block(980,140);

block15 = new Block(950,110);


launcherObj = new Launcher(polygon.body,{x:140,y:250});



	Engine.run(engine);
  
  // score = 0;
}


function draw() {
     if(backgroundImg)
        background(backgroundImg);

      Engine.update(engine);
            textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
  

ground.display();
ground1.display();
ground2.display();
fill("yellow");
polygon.display();

fill("red")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

block15.display();

fill("blue")
box6.display();
box7.display();
box8.display();
box9.display();

block13.display();
block14.display();

fill("Yellow")
box10.display();
box11.display();
box12.display();

block10.display();
block11.display();
block12.display();

fill("purple");
box13.display();
box14.display();

block6.display();
block7.display();
block8.display();
block9.display();

fill("orange");
box15.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

launcherObj.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();

  drawSprites();


textSize(20)
fill("white")
  text("CHALLENGE YOU TO DESTROY ALL THE BLOCKS!",100,100);
  text("Press 'SPACE' to get a second chance to throw!",100,150);
}
function mouseDragged(){
    
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
	
    
}


function mouseReleased(){
    launcherObj.fly();
   
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:100});
    launcherObj.attached(polygon.body);
  }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}