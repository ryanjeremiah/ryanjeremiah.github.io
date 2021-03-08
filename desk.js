class Desk{
  constructor(_xPos,_yPos,_rotation){
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.rotation = _rotation
  
  
  }
 display(){
   noStroke();
   fill(0,20,60,60);
  strokeCap(SQUARE);(260,170,15,20);
   strokeCap(SQUARE);
(210,170,15,20);
   
  push();
translate(this.xPos,this.yPos);
   rotate(this.rotation);
   
 }
  move(){
    if (yPos <= hieght)
      this.yPos+=2;
  } else(yPoshieght) {
    this.yPose = 0
  }
}



//function drawDesk(){
   //noStroke()
//fill(0,20,60,60)
//square(160,170,15,20);
//square(210,170,15,20) 
//} 