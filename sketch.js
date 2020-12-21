var fixed, moving
var gameObject1, gameObject2, gameObject3, gameObject4;
var object1, object2;



function setup() {

  createCanvas(800,400);
  fixed = createSprite(200, 200, 50, 30);
  moving = createSprite(400, 200, 80, 50);

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);

  gameObject1.shapeColor="orange";
  gameObject2.shapeColor="lightblue";
  gameObject3.shapeColor="maroon";
  gameObject4.shapeColor="pink";

  fixed.shapeColor="green";
  moving.shapeColor="blue";

  gameObject4.velocityY=4
  moving.velocityY=-4
}

function draw() {
  background(0); 
 /* moving.x=World.mouseX;
  moving.y=World.mouseY;*/
  console.log(moving.y-gameObject1.y) ;

  drawSprites();
 /* if(isTouching(moving, gameObject2)){
  gameObject2.shapeColor="red";
  moving.shapeColor="red";
  }
  else{
  gameObject2.shapeColor="lightblue";
  moving.shapeColor="blue";
  }*/
  bounceOff(moving,gameObject4);
}

