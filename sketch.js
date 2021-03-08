
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var stone;
var ground;
var hammer;
var rubber;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(700,320,70,70);
	ground = new Ground(320,700,15,1000);
	hammer = new Hammer(100,100);
	rubber = new Rubber(600,150);
	sand1 = new Sand(500,150);
	sand2 = new Sand(500,150);
	sand3 = new Sand(500,150);
	sand4 = new Sand(500,150);
	sand5 = new Sand(500,150);
	sand6 = new Sand(500,150);
	sand7 = new Sand(500,150);
	sand8 = new Sand(500,150);
	iron = new Iron(300,150,50,100);


	
  
}


function draw() {
	Engine.update(engine);
  background("lightblue");

  stone.display();
  ground.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron.display();
  
   
 
}



