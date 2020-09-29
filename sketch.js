var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(2000,2000);
  movingRect = createSprite(200, 200, 50, 80);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(700,400,80,30);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background("turquoise");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(movingRect.x - fixedRect.x);
  if (isTouching(movingRect, gameObject1)){

    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
 }
 else if (isTouching(gameObject2, movingRect)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";


 }else{
    movingRect.shapeColor = "purple";
    gameObject1.shapeColor = "purple";
    gameObject2.shapeColor = "purple";

 }
  drawSprites();
}

