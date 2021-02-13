var star, starBody;
var starImg, fairyImg, backgImg;
var fairy;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	backgImg = loadImage("images/starNight.png");
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(140, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(700,50);
	star.addImage(starImg);
	star.scale = 0.1;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(700 , 50 , 10 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(backgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y



  if(star.y > 500 && starBody.position.y > 500 ){
  	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 40;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 40;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
