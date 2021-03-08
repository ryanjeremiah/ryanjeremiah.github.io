let angleArm;
let desk;
let desk2;
let desk3;

function setup(){
  createCanvas(400,400);
  background (200,100,100);
  
  drawShadow(); 
  drawThing(); 
  drawHead(); 
  drawArms();  
  drawNose();
  drawEyes();
  drawWall();
  drawDesk();
  
 desk = new Desk (120,170,20,25);
  console.log(desk);
desk2 = new Desk (165,1170,1215,25);
console.log(desk);
desk3 = new Desk (160,110,21,20);
  console.log(desk);
  
  

desk.display();
  desk.move;
  
frameRate (30);
textSize(30);
textAlign(CENTER);

}
function audio(){
console.log("mic level" + mic.getlevel());
micLevel = mic.getLevel();

    draw = map(mic.getLevel(), 0,10, 345,369)

console.log("mic level" + mic.getlevel);
  if (bamYes==true){
     cricle(width/100,height/200,300)
  }
} 
function mousePressed(){
  if (angleArm > width * 0.4 && angleArm < width * 0.10 && mouseY > height * 0.6 && angleArm < hieght * 0.10) {
    console.log ("mouse beep in here"); 
    angleleftArm = -angleleftArm
  
    } else if (angleArm < width * .4 || angleArm > width * 0.10){
    bamYes = !bamYes;
     console.log ("mouse beep in here");  
    } 
}
function draw(){
text(frameCount, width/10,height/10)

}
function drawArms(){
     //left arm
fill('#fae')  
circle(175,255,75) 
     //right arm 
fill('#fae')  
circle(275,270,75)  
}
function drawHead(){
  fill(0,0,255);
circle (200,200,150);
}
function drawEyes(){
  fill(255,204,100);
circle (170,175,50)
circle (220,175,50)
}
function drawNose(){
fill(0,0,0);
triangle(350,200,200,220,200,200);
}
function drawWall(){
let c = color('175,100,220');
  fill(c)
  rect(100,250,250,100) //draw up and down
}
function drawThing(){
  fill(0,0,0)
quad(62,100,60,100,80,80,175,155) 
}
function drawShadow(){
fill(23,20,64,64);
rect(110,200,200,250);
}
function drawDesk(){
   noStroke()
fill(0,20,60,60)
square(160,170,15,20);
square(210,170,15,20) 
}