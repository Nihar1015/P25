
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150,550,10);

	dustbin1 = new Dustbin(550,635, 100, 10);
	dustbin2 = new Dustbin(600,605,10,100);
	dustbin3 = new Dustbin(500,605,10,100);

	ground = new Ground(400, 650, 800,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
 
}

function keyPressed(){
	  if(keyCode === UP_ARROW){
		  Matter.Body.applyForce(paper.body, paper.body.position,{x:10, y:-17});
	  }


}





