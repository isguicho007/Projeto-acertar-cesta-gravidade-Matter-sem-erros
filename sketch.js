
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var ground, leftObj, rightObj;

function preload(){
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Criação de corpos
	
	var ballOptions = {
		isStatic: false,
		restitution: 0.3,
		friction: 1.2
	}
	
	ball = Bodies.circle(260, 100, 15, ballOptions);
	World.add(world,ball);

	//Criar Solo
	
	ground = new Ground(width/2, 700, width, 20);
	
	//Criar cesta
	
	leftObj = new Ground(1100, 641, 20, 120);
	rigthObj =  new Ground(1350, 641, 20, 120);

}



function draw() {
  background(0);
  Engine.update(engine);
  
 
    push();
	fill("purple");
	ellipseMode(RADIUS);
	ellipse(ball.position.x, ball.position.y, 15, 15);
	pop();
	
	leftObj.display();
	rigthObj.display();
	ground.display();
	
	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) 

	   Matter.Body.applyForce(ball, ball.position, {x:0.04, y:-0.04});
		
	}






