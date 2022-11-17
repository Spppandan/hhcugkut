
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	var groundObj_options ={
		isStatic: true
	  };
	  var rightside_options ={
		isStatic: true
	  };
	  var leftside_options ={
		isStatic: true
	  };
	groundObj=new ground(350,670,1100,20,groundObj_options);
	World.add(world,groundObj);
	leftside=new ground(1100,600,20,120,leftside_options);
	World.add(world,leftside);
	rightside=new ground(1000,500,20,120,rightside_options);
	World.add(world,rightside);
	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(groundObj.position.x,ground.position.y,1100,20);
  rect(leftside.position.x,ground2.position.y,20,120);
  rect(rightside.position.x,ground2.position.y,20,120);
  groundObj.display();
  leftside.display();
  rightside.display();
  ball.display();
  drawSprites();
 
}



