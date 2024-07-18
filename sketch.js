function setup() {
  createCanvas(400, 400);
 
  
}

let d=50

function draw() {
  background('lavender');
  fill('powderblue');
  circle( mouseX,mouseY,d);
  stroke('teal');
  strokeWeight(0);
  line(200,0,200,400);
  strokeWeight(0);
  line(0,200,400,200)
  strokeWeight(20);
  
if (mouseX < 200 && mouseY < 200) {
    d=100;
  
  }
  else if (mouseX > 200 && mouseY < 200){
    stroke('hotpink');
   fill('blue');
    circle(mouseX,mouseY,d+50);
    
  } else if (mouseX>200 && mouseY>200){
stroke('seagreen')
    fill('orange')
    circle(mouseX,mouseY,d+20);
  }else if (mouseX<200 && mouseY>200){
    stroke('purple');
    fill('salmon');
    circle(mouseX, mouseY,d-30);
  }
  

  
  
    
  

}
// to create an arc 
