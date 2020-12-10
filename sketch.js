var car,wall
var speed,weigth

function setup() {
  createCanvas(1600,400);
  
car=createSprite(50,200,50,50)
speed=random (55,90)
weigth=random(400,1500)
car.velocityX=speed

wall=createSprite(1500,200,60,height/2)
}

function draw() {
  background(0);
  
  if(wall.x=car.x(car,width+wall.wiidth)/2){
    car.velocityX=0;
    var deformation=0.5*weght*speed*speed/22509;
    if(deformation>180){
car.shapeColour=color("green");
    }
    if(deformation<180 && deformation>100){
car.shapeColour("yellow")
    }
    if(deformation<100){
      car.shapeColour("red")
    }
  }
  drawSprites();
  
}