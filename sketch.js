const Engine = Matter.Engine;

const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200, 450, 85);
	bob2 = new Bob(300, 450, 85);
	bob3 = new Bob(400, 450, 85);
	bob4 = new Bob(500, 450, 85);
	bob5 = new Bob(600, 450, 85);

	roof = new Roof(400, 150, 400, 70);

	rope1 = new Rope(bob1.body, roof.body, -190, 20);
	rope2 = new Rope(bob2.body, roof.body, -110, 20);
	rope3 = new Rope(bob3.body, roof.body, -7, 20);
	rope4 = new Rope(bob4.body, roof.body, 70, 20);
	rope5 = new Rope(bob5.body, roof.body, 190, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
	
  drawSprites();
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -250, y: -250})
	}
}




