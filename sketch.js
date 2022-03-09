var ship, ship_sailing;
var ground, invisibleGround, groundImage


function preload(){
ship_sailing = loadAnimation("ship-3.png", "ship-4.png")
groundImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(50,100,50,30);
  ship.addAnimation("ship", ship_sailing);

  ship.scale = 0.5
  ship.x = 100

  invisibleGround = createSprite(200,190,400,10)
  invisibleGround.visible = false


  ground = createSprite(200,180,400,20)
  ground.addImage("ground", groundImage)
  ground.x = ground.width/2

}

function draw() {
  background("blue");
    

ground.velocityX = -2
 
if(ground.x<0){
ground.x = ground.width/2 
}

ship.collide(invisibleGround)

console.log(ship.Y)
drawSprites();
}
