
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
    isStatic:false,
    restitution:0.3,
	friction: 0,
	density:1.2
}

var options={
	isStatic:true
}
ground = Bodies.rectangle(width/2,height - 1,width * 2,1,options)
ball=Bodies.circle(200,100,20,ball_options)
	Engine.run(engine);
	World.add(world,ground)
	World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,width * 2,1)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.5})
	}
}



