var rect_fixed, moving_rect


function setup() {
  createCanvas(800,400);
  rect_fixed = createSprite(600, 200, 50, 50);
  moving_rect = createSprite(400,200,80,30)
rect_fixed.shapeColor = "green"
moving_rect.shapeColor = "green"

}

function draw() {
  background(255,255,255);  
moving_rect.x = World.mouseX;
moving_rect.y = World.mouseY;
if(moving_rect.x - rect_fixed.x < rect_fixed.width/2 + moving_rect.width/2 && 
 rect_fixed.x - moving_rect.x < rect_fixed.width/2 + moving_rect.width/2 && 
 moving_rect.y - rect_fixed.y < rect_fixed.hight/2 + moving_rect.hight/2 &&
 rect_fixed.y - moving_rect.y < rect_fixed.hight/2 + moving_rect.hight/2


)
{
  rect_fixed.shapeColor = "red"
  moving_rect.shapeColor = "red"
} 

else{
  rect_fixed.shapeColor = "green"
  moving_rect.shapeColor = "green"
}


console.log(moving_rect.width/2 + rect_fixed.widsh/2)
console.log(moving_rect.x - rect_fixed.x)
drawSprites();
}