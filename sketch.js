
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

	//Create the Bodies Here.
var rod1 = createSprite(500,660,10,170)
var rod2 = createSprite(680,660,10,170)
var rod3 = createSprite(590,700,170,20)
	Paper1 = new Paper(100, 600, 10);
	ground = new Ground(600,height,1200,20)
  
}





function draw() {
	Engine.run(engine);
	background(0);


  rectMode(CENTER);

  Paper1.display();
  ground.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x:300, y:-300});
		console.log("hi")
	}
}	

