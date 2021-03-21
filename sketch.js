var bullet, wall, thickness;
var weight, speed;

function setup() {
  createCanvas(1370,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(100, 200, 40, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor= "grey";
}

function draw() {
  background(25,25,25); 
  
  if (checkCollision(bullet,wall)) {
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
       //console.log(damage);
       if (damage >10) {
      wall.shapeColor= "red"
    } else {
      wall.shapeColor= "green"
    }
    bullet.velocityX = 0;
  }
  drawSprites();
}
