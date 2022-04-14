// declaring constants and variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, world, engine;
var leftSide, rightSide, groundObj;

function preload()
{
	
}

function setup() {

	engine = Engine.create();
	world = engine.world;

	createCanvas(1800, 700);
	var ball_options = {

		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}

	// create the Bodies here
	ball = Matter.Bodies.circle(200,100,10,ball_options);
	World.add(world,ball);

	groundObj = new Ground (width/2,670,width,20);
	leftSide = new Ground (1200,600,20,120);
	rightSide = new Ground (1400,600,20,120);

	ellipseMode(RADIUS);

	Engine.run(engine);
  
}

function draw() {

	rectMode(CENTER);
	background(0);
  
	ellipse(ball.position.x,ball.position.y,20);

	drawSprites();
	groundObj.display();
	leftSide.display();
	rightSide.display();
	Engine.update(engine);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		// write code here to apply force on ball body
		Body.applyForce(ball, {x: 0, y: 0}, {x: 30, y: -15})
	}
}
